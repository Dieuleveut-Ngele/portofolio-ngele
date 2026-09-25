export interface ProjectCategory {
  id: string;
  fr: string;
  en: string;
}

export const projectCategories: ProjectCategory[] = [
  { id: 'all', fr: 'Tout', en: 'All' },
  { id: 'crowdfunding', fr: 'Financement Participatif & RSE', en: 'Crowdfunding & CSR' },
  { id: 'ecommerce', fr: 'E-commerce', en: 'E-commerce' },
  { id: 'fintech', fr: 'Fintech & Finance', en: 'Fintech & Finance' },
  { id: 'showcase', fr: 'Site Vitrine', en: 'Showcase Website' },
  { id: 'internal', fr: 'Outils Internes', en: 'Internal Tools' },
];

export interface Project {
  title: string;
  description: { fr: string; en: string };
  tags: string[];
  categoryId: string;
  image: string;
  demo: string;
  code: string;
}

export const projects: Project[] = [
  {
    title: 'Prelevement Wallet',
    description: {
      fr: "Module de reporting et de gestion des prélèvements wallets intégré à Flash POS. Suivi en temps réel des transactions, validation des prélèvements planifiés, filtrage multi-devises (CDF, USD, FCN) et export des rapports d'exécution.",
      en: 'Reporting and wallet direct-debit management module integrated into Flash POS. Real-time transaction tracking, scheduled debit validation, multi-currency filtering (CDF, USD, FCN) and execution report export.',
    },
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'REST API'],
    categoryId: 'fintech',
    // Placeholder local en attendant la capture réelle (remplacer par un .png du même nom)
    image: '/assets/prelevement-wallet.svg',
    demo: '#',
    code: '#',
  },
  {
    title: 'Documentation Utilisateur — Flash',
    description: {
      fr: "Plateforme de documentation interne pour les équipes de Flash. Procédures organisées par service (CSC OPS, Finance, Conformité, Marketing, IT) avec recherche instantanée, glossaire et FAQ.",
      en: 'Internal documentation platform for Flash teams. Procedures organized by department (CSC OPS, Finance, Compliance, Marketing, IT) with instant search, glossary and FAQ.',
    },
    tags: ['React', 'Next.js', 'Tailwind', 'Algolia Search'],
    categoryId: 'internal',
    image: 'https://res.cloudinary.com/dxwcrbqes/image/upload/f_auto,q_auto,w_1200/v1783506690/Portofolio/docuser_f50fel.png',
    demo: '#',
    code: '#',
  },
  {
    title: 'TheLaB Service',
    description: {
      fr: "Site vitrine pour TheLaB, laboratoire de transformation humaine. Programmes, académie et services mis en avant avec statistiques d'impact (500+ participants, 10+ années d'expérience).",
      en: 'Showcase website for TheLaB, a human transformation laboratory. Programs, academy and services highlighted with impact statistics (500+ participants, 10+ years of experience).',
    },
    tags: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
    categoryId: 'showcase',
    image: 'https://res.cloudinary.com/dxwcrbqes/image/upload/f_auto,q_auto,w_1200/v1783506687/Portofolio/thelab_h9azyu.png',
    demo: '#',
    code: '#',
  },
  {
    title: 'Glibox Service',
    description: {
      fr: 'Site vitrine pour Glibox, partenaire de solutions technologiques et commerciales. Design moderne bilingue (FR/EN) avec mode sombre et proposition de valeur : Simplifiez, Optimisez, Innovez.',
      en: 'Showcase website for Glibox, a technology and business solutions partner. Modern bilingual (FR/EN) design with dark mode and value proposition: Simplify, Optimize, Innovate.',
    },
    tags: ['React', 'Vite', 'Tailwind', 'i18n'],
    categoryId: 'showcase',
    image: 'https://res.cloudinary.com/dxwcrbqes/image/upload/f_auto,q_auto,w_1200/v1783506690/Portofolio/glibox_ho6z6m.png',
    demo: '#',
    code: '#',
  },
];
