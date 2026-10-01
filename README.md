# tedyclivel

Portfolio personnel 3D de Tedy Clivel, ingénieur logiciel basé au Cameroun.

## Aperçu

Le site présente les compétences, l’expérience, les projets et un formulaire de contact. Il utilise une scène 3D interactive et une interface React responsive.

## Technologies

- React et TypeScript
- Vite
- Three.js et React Three Fiber
- Tailwind CSS
- Netlify Functions
- Resend et Google reCAPTCHA v3 pour le formulaire de contact

## Démarrage

Prérequis : Node.js et npm.

```bash
git clone http://github.com/tedyclivel/gamePorfolio.git
cd gamePorfolio
npm install
npm run dev
```

L’application est alors disponible à l’adresse indiquée par Vite.

## Configuration du formulaire de contact

Créez un fichier `.env` à la racine du projet :

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

`CONTACT_TO_EMAIL` est obligatoire : il définit la boîte qui reçoit les messages envoyés depuis le site.

## Commandes

```bash
npm run dev
npm run typecheck
npm run build
npm run preview
```

## GitHub

Le code source est disponible sur [tedyclivel/gamePorfolio](http://github.com/tedyclivel/gamePorfolio).

## Licence

Ce projet est distribué sous licence MIT. Consultez [LICENSE](LICENSE).
