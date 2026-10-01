import {
  CONTACT_EMAIL_FALLBACK,
  CONTACT_RECAPTCHA_ACTION,
  validateContactForm,
} from "./lib/contact";

type Env = {
  ASSETS: { fetch(request: Request): Promise<Response> };
  CONTACT_TO_EMAIL?: string;
  CONTACT_SITE_URL?: string;
  RECAPTCHA_MIN_SCORE?: string;
  RECAPTCHA_SECRET_KEY?: string;
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  RESEND_TEMPLATE_CONTACT_ADMIN?: string;
  RESEND_TEMPLATE_CONTACT_USER?: string;
};

type ContactRequestBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  recaptchaToken?: unknown;
};

type RecaptchaVerifyResponse = {
  success: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
};

const json = (body: unknown, status = 200) =>
  Response.json(body, { status });

const getClientIp = (request: Request): string | undefined =>
  request.headers.get("CF-Connecting-IP") ?? undefined;

async function verifyRecaptcha(
  token: string,
  env: Env,
  remoteIp?: string,
): Promise<{ ok: true } | { ok: false; status: number; error: string }> {
  if (!env.RECAPTCHA_SECRET_KEY) {
    console.error("RECAPTCHA_SECRET_KEY n’est pas défini.");
    return { ok: false, status: 500, error: "Erreur de configuration du serveur." };
  }

  const body = new URLSearchParams({
    secret: env.RECAPTCHA_SECRET_KEY,
    response: token,
  });
  if (remoteIp) body.set("remoteip", remoteIp);

  let data: RecaptchaVerifyResponse;
  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    data = (await response.json()) as RecaptchaVerifyResponse;
  } catch (error) {
    console.error("La vérification reCAPTCHA a échoué :", error);
    return {
      ok: false,
      status: 502,
      error: "Impossible de vérifier reCAPTCHA. Veuillez réessayer.",
    };
  }

  const minScore = Number(env.RECAPTCHA_MIN_SCORE ?? "0.5");
  if (
    !data.success ||
    data.action !== CONTACT_RECAPTCHA_ACTION ||
    Number.isNaN(minScore) ||
    (data.score ?? 0) < minScore
  ) {
    console.error("La vérification reCAPTCHA a échoué :", {
      success: data.success,
      action: data.action,
      errorCodes: data["error-codes"],
    });
    return {
      ok: false,
      status: 403,
      error: "La vérification reCAPTCHA a échoué. Veuillez réessayer.",
    };
  }

  return { ok: true };
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") {
    return json({ error: "Méthode non autorisée." }, 405);
  }

  const adminEmail = env.CONTACT_TO_EMAIL || CONTACT_EMAIL_FALLBACK;
  if (
    !env.RECAPTCHA_SECRET_KEY ||
    !env.RESEND_API_KEY ||
    !env.RESEND_FROM_EMAIL ||
    !env.RESEND_TEMPLATE_CONTACT_USER ||
    !env.RESEND_TEMPLATE_CONTACT_ADMIN ||
    !adminEmail
  ) {
    return json(
      { error: "Le formulaire de contact n’est pas encore configuré." },
      503,
    );
  }

  let payload: ContactRequestBody;
  try {
    payload = (await request.json()) as ContactRequestBody;
  } catch {
    return json({ error: "Requête invalide." }, 400);
  }

  const name = typeof payload.name === "string" ? payload.name : "";
  const email = typeof payload.email === "string" ? payload.email : "";
  const message = typeof payload.message === "string" ? payload.message : "";
  const recaptchaToken =
    typeof payload.recaptchaToken === "string" ? payload.recaptchaToken : "";

  if (!recaptchaToken) return json({ error: "Le jeton reCAPTCHA est manquant." }, 400);

  const validationError = validateContactForm({ name, email, message });
  if (validationError) return json({ error: validationError }, 400);

  const recaptchaResult = await verifyRecaptcha(recaptchaToken, env, getClientIp(request));
  if (!recaptchaResult.ok) {
    return json({ error: recaptchaResult.error }, recaptchaResult.status);
  }

  const siteUrl = (env.CONTACT_SITE_URL || new URL(request.url).origin).replace(/\/$/, "");

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();
  try {
    const response = await fetch("https://api.resend.com/emails/batch", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {
          from: env.RESEND_FROM_EMAIL,
          to: [trimmedEmail],
          reply_to: adminEmail,
          template: {
            id: env.RESEND_TEMPLATE_CONTACT_USER,
            variables: {
              USER_NAME: trimmedName,
              USER_MESSAGE: trimmedMessage,
              SITE_URL: siteUrl,
            },
          },
        },
        {
          from: env.RESEND_FROM_EMAIL,
          to: [adminEmail],
          reply_to: trimmedEmail,
          template: {
            id: env.RESEND_TEMPLATE_CONTACT_ADMIN,
            variables: {
              USER_NAME: trimmedName,
              USER_EMAIL: trimmedEmail,
              USER_MESSAGE: trimmedMessage,
              SITE_URL: siteUrl,
            },
          },
        },
      ]),
    });
    if (!response.ok) {
      console.error("L’envoi groupé Resend a échoué :", await response.text());
      return json({ error: "Échec de l’envoi du message. Veuillez réessayer." }, 502);
    }
  } catch (error) {
    console.error("Erreur inattendue lors de l’envoi de l’e-mail :", error);
    return json({ error: "Échec de l’envoi du message. Veuillez réessayer." }, 500);
  }

  return json({ ok: true });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/contact") return handleContact(request, env);
    return env.ASSETS.fetch(request);
  },
};
