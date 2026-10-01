export const CONTACT_RECAPTCHA_ACTION = "contact";

// Configure CONTACT_TO_EMAIL in the deployment environment.
export const CONTACT_EMAIL_FALLBACK = "";

export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export type ContactFormFields = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormError =
  | "Nom invalide"
  | "E-mail invalide"
  | "Message invalide";

export const isValidContactName = (name: string): boolean => {
  const trimmed = name.trim();
  return trimmed.length >= 3 && trimmed.length <= 200;
};

export const isValidContactEmail = (email: string): boolean => {
  const trimmed = email.trim();
  return trimmed.length <= 100 && Boolean(trimmed.toLowerCase().match(EMAIL_REGEX));
};

export const isValidContactMessage = (message: string): boolean => {
  const trimmed = message.trim();
  return trimmed.length >= 5 && trimmed.length <= 500;
};

export const validateContactForm = ({
  name,
  email,
  message,
}: ContactFormFields): ContactFormError | null => {
  if (!isValidContactName(name)) {
    return "Nom invalide";
  }

  if (!isValidContactEmail(email)) {
    return "E-mail invalide";
  }

  if (!isValidContactMessage(message)) {
    return "Message invalide";
  }

  return null;
};
