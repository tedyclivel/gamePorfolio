// contains all constants to be used throughout the project
// dont' remove anything from here if not sure

import {
  css,
  git,
  github,
  html,
  javascript,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  tailwindcss,
  typescript,
} from "../assets/icons";

export type SidebarLink = {
  route: string;
  label: string;
};

export type SkillType =
  | "Frontend"
  | "Backend"
  | "Version Control"
  | "Database"
  | "Animation"
  | "State Management"
  | "Mobile"
  | "Tooling";

export type Skill = {
  imageUrl: string;
  name: string;
  type: SkillType;
};

export type ExtraLinks = {
  source_code: string;
};

export type Experience = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

export type Project = {
  iconUrl: string;
  theme: string;
  name: string;
  description: string;
  link?: string;
};

// sidebar links
export const SIDEBAR_LINKS: SidebarLink[] = [
  {
    route: "/about",
    label: "À propos",
  },
  {
    route: "/projects",
    label: "Projets",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

// skills
export const SKILLS: Skill[] = [
  {
    imageUrl: css,
    name: "CSS3",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React.js",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML5",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "AngularJS",
    type: "Frontend",
  },
  {
    imageUrl: motion,
    name: "Three.js",
    type: "Animation",
  },
  {
    imageUrl: motion,
    name: "Vite",
    type: "Tooling",
  },
  {
    imageUrl: mongodb,
    name: "Supabase",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "Flutter & Dart",
    type: "Mobile",
  },
  {
    imageUrl: nodejs,
    name: "API REST & Node.js",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

// site name
export const SITE_NAME = "Tedy Clivel";

// extra links
export const EXTRA_LINKS: ExtraLinks = {
  source_code: "http://github.com/tedyclivel/gamePorfolio",
};

// experiences
export const EXPERIENCES: Experience[] = [
  {
    title: "Développeur Front-End Flutter",
    company_name: "OUFAREZ",
    icon: react,
    iconBg: "#accbe1",
    date: "Jan. 2026 – Mars 2026",
    points: [
      "Conception et intégration d’interfaces front-end ainsi que de composants UI réutilisables durant un contrat de trois mois.",
      "Traduction des besoins fonctionnels en écrans, interactions et parcours utilisateur avec l’équipe technique.",
      "Diagnostic et correction de problèmes d’interface pour améliorer la cohérence visuelle, l’ergonomie et la qualité du produit.",
    ],
  },
  {
    title: "Stagiaire Développeur Mobile Front-End",
    company_name: "ARITED",
    icon: typescript,
    iconBg: "#fbc3bc",
    date: "Juin 2025 – Sept. 2025",
    points: [
      "Développement de composants d’interface réutilisables et participation à leur intégration dans les fonctionnalités de l’application.",
      "Correction de problèmes UI et contribution aux améliorations fonctionnelles via un workflow collaboratif basé sur Git.",
      "Renforcement de l’expérience en architecture de composants, débogage et itération rapide sur les interfaces utilisateur.",
    ],
  },
];

// projects
export const PROJECTS: Project[] = [
  {
    iconUrl: nextjs,
    theme: "btn-back-red",
    name: "Kouture & Maestro",
    description:
      "Plateforme SaaS pour couturiers avec une application mobile de gestion en Flutter/BLoC et une marketplace web en Next.js, reliées à Supabase pour l’authentification, les données, le temps réel et le stockage.",
    link: "https://github.com/tedyclivel/KoutureMaestro",
  },
  {
    iconUrl: react,
    theme: "btn-back-green",
    name: "Blog Front-End dynamique",
    description:
      "Interface de blog développée avec React.js, Vite et JavaScript, incluant navigation dynamique, recherche, tri, commentaires et validation des formulaires.",
    link: "https://github.com/tedyclivel/blog",
  },
  {
    iconUrl: motion,
    theme: "btn-back-blue",
    name: "Landing Page SSR & Expérience 3D",
    description:
      "Landing page produit avec Next.js, Three.js et TypeScript : rendu côté serveur, animations 3D, métadonnées SEO, sitemap et optimisation des performances.",
    link: "https://github.com/tedyclivel/LandingGame.git",
  },
  {
    iconUrl: javascript,
    theme: "btn-back-pink",
    name: "Dashboard de données",
    description:
      "Tableau de bord responsive avec AngularJS, JavaScript et API REST pour récupérer, filtrer et afficher des données dynamiques avec gestion des états de chargement et des erreurs.",
    link: "https://github.com/tedyclivel/admin-dashbord",
  },
  {
    iconUrl: react,
    theme: "btn-back-yellow",
    name: "EduTrust",
    description:
      "Contribution aux interfaces mobile et web d’une plateforme universitaire de paiement avec React Native, Expo et React.js, couvrant les frais de scolarité, les reçus et l’historique des transactions.",
  },
  {
    iconUrl: react,
    theme: "btn-back-green",
    name: "TchopTime",
    description:
      "Application mobile de gestion de cuisine familiale avec React Native : planification des repas, organisation des menus et génération de listes de courses.",
    link: "https://github.com/tedyclivel/tchoptime-3",
  },
  {
    iconUrl: motion,
    theme: "btn-back-blue",
    name: "LexiFlow",
    description:
      "Jeu mobile de mots croisés développé avec Flutter, avec interfaces de jeu, interactions liées aux grilles et un mode Duel pour affronter ses amis.",
    link: "https://github.com/tedyclivel/LexiFlow",
  },
  {
    iconUrl: typescript,
    theme: "btn-back-red",
    name: "Iron Mind",
    description:
      "Application mobile d’apprentissage développée avec Flutter pour créer et gérer des parcours personnalisés, avec suivi de progression et objectifs d’apprentissage.",
    link: "https://github.com/tedyclivel/roamap_cyber_security",
  },
];
