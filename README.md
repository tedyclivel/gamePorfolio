# tedyclivel

Portfolio personnel 3D de Tedy Clivel, ingénieur logiciel basé au Cameroun.

## Aperçu

Le site présente les compétences, l’expérience, les projets et un formulaire de contact. Il utilise une scène 3D interactive et une interface React responsive.

## Technologies

- React et TypeScript
- Vite
- Three.js et React Three Fiber
- Tailwind CSS
- Cloudflare Workers
- Resend et Google reCAPTCHA v3 pour le formulaire de contact

## Démarrage

Prérequis : Node.js et pnpm 10.11.1.

```bash
git clone http://github.com/tedyclivel/gamePorfolio.git
cd gamePorfolio
pnpm install
pnpm run dev
```

L’application est alors disponible à l’adresse indiquée par Vite.

## Formulaire de contact (facultatif)

Le site se déploie sans aucune clé. Sans configuration, la page Contact reste
accessible mais le formulaire indique qu’il est indisponible. Pour activer
l’envoi de messages, renseignez les valeurs correspondantes dans les secrets
et variables du Worker Cloudflare :

```env
RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
RESEND_FROM_EMAIL="Tedy Clivel <contact@your-domain.com>"
CONTACT_TO_EMAIL="contact@your-domain.com"
CONTACT_SITE_URL="https://your-domain.com"
RESEND_TEMPLATE_CONTACT_USER="contact-thank-you"
RESEND_TEMPLATE_CONTACT_ADMIN="contact-admin"
VITE_RECAPTCHA_SITE_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
RECAPTCHA_SECRET_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
RECAPTCHA_MIN_SCORE="0.5"
```

`VITE_RECAPTCHA_SITE_KEY` est une variable de compilation publique. Les autres
valeurs sont des secrets ou variables d’exécution du Worker. `CONTACT_SITE_URL`
est facultatif : le Worker utilise automatiquement l’origine de la requête si
elle n’est pas défini.

## Commandes

```bash
pnpm run dev
pnpm run typecheck
pnpm run build
pnpm run preview
pnpm run deploy
```

## Déploiement Cloudflare

Le site et l’API de contact sont déployés par le même Worker :

```bash
pnpm run deploy
```

La configuration du formulaire est facultative pour le déploiement. Pour
activer le formulaire après publication, ajoutez ces secrets au Worker :
`RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_TO_EMAIL`,
`CONTACT_SITE_URL`, `RESEND_TEMPLATE_CONTACT_USER`,
`RESEND_TEMPLATE_CONTACT_ADMIN` et `RECAPTCHA_SECRET_KEY`.

`CONTACT_SITE_URL` est facultatif. Pour activer le formulaire côté client,
définissez aussi `VITE_RECAPTCHA_SITE_KEY` dans l’environnement de compilation.
`RECAPTCHA_MIN_SCORE` vaut `0.5` par défaut.

## GitHub

Le code source est disponible sur [tedyclivel/gamePorfolio](http://github.com/tedyclivel/gamePorfolio).

## Licence

Ce projet est distribué sous licence MIT. Consultez [LICENSE](LICENSE).
