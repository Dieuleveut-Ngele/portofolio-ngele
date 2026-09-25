export interface ExperienceItem {
  id: string;
  company: string;
  period: string;
  title: { fr: string; en: string };
  summary: { fr: string; en: string };
  details: { fr: string[]; en: string[] };
  tags: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'ria',
    company: 'Flash International',
    period: '2025',
    title: {
      fr: "RIA Money Transfer — Parcours d'envoi",
      en: 'RIA Money Transfer — Send Money Journey',
    },
    summary: {
      fr: "Intégration et tests des API RIA pour les différents parcours de transfert d'argent, de l'authentification OAuth jusqu'à la création de l'ordre.",
      en: 'Integration and testing of RIA APIs for the money-transfer journeys, from OAuth authentication to order creation.',
    },
    details: {
      fr: [
        "Authentification OAuth et gestion des tokens d'accès",
        'Récupération des pays autorisés, méthodes de livraison et payout partners',
        'Intégration des étapes Amounts & Requirements et Draft Order',
        'Gestion des données et validations métier côté frontend et backend',
        'Parcours Cash Pickup, Bank Deposit et Mobile Wallet',
      ],
      en: [
        'OAuth authentication and access token management',
        'Retrieval of authorized countries, delivery methods and payout partners',
        'Integration of the Amounts & Requirements and Draft Order steps',
        'Transaction data handling and business-rule validation on frontend and backend',
        'Cash Pickup, Bank Deposit and Mobile Wallet flows',
      ],
    },
    tags: ['REST API', 'OAuth', 'Postman', 'JSON', 'JavaScript', 'TypeScript'],
  },
  {
    id: 'flashscan',
    company: 'Flash International',
    period: '2025',
    title: {
      fr: "Flash Scan — Scan de pièces d'identité",
      en: 'Flash Scan — Identity Document Scanning',
    },
    summary: {
      fr: "Solution interne centralisée de scan de pièces d'identité, réutilisée dans plusieurs parcours de transfert d'argent en remplacement de l'ancien mécanisme.",
      en: 'Centralized in-house identity-document scanning solution, reused across several money-transfer journeys, replacing the legacy mechanism.',
    },
    details: {
      fr: [
        'Centralisation du mécanisme de scan dans un module réutilisable',
        'Intégration dans les parcours MoneyGram, Western Union, RIA, Mukuru et Taptap Send',
        "Amélioration de l'expérience opérateur",
        "Réduction de la dépendance à l'ancien système",
      ],
      en: [
        'Centralized the scanning mechanism into a reusable module',
        'Integrated into the MoneyGram, Western Union, RIA, Mukuru and Taptap Send journeys',
        'Improved operator experience',
        'Reduced dependency on the legacy system',
      ],
    },
    tags: ['Réutilisable', 'MoneyGram', 'Western Union', 'RIA', 'Mukuru', 'Taptap Send'],
  },
  {
    id: 'prelevement-wallet',
    company: 'Flash International',
    period: '2025',
    title: {
      fr: 'Prelevement Wallet — Reporting & prélèvements',
      en: 'Prelevement Wallet — Reporting & Direct Debits',
    },
    summary: {
      fr: 'Module de reporting et de gestion des prélèvements wallets intégré à Flash POS, avec suivi en temps réel et export de rapports.',
      en: 'Reporting and wallet direct-debit management module integrated into Flash POS, with real-time tracking and report export.',
    },
    details: {
      fr: [
        'Suivi en temps réel des transactions',
        'Validation des prélèvements planifiés',
        'Filtrage multi-devises (CDF, USD, FCN)',
        "Export des rapports d'exécution",
      ],
      en: [
        'Real-time transaction tracking',
        'Scheduled debit validation',
        'Multi-currency filtering (CDF, USD, FCN)',
        'Execution report export',
      ],
    },
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'REST API'],
  },
  {
    id: 'api-docs',
    company: 'Flash International',
    period: '2024 – 2025',
    title: {
      fr: 'Tests & documentation des API partenaires',
      en: 'Partner API Testing & Documentation',
    },
    summary: {
      fr: 'Création et maintenance des collections Postman et rédaction de la documentation technique des API des partenaires de transfert.',
      en: 'Built and maintained Postman collections and authored technical documentation for money-transfer partner APIs.',
    },
    details: {
      fr: [
        'Collections Postman : RIA, Western Union, MoneyGram, Taptap Send, TerraPay, ZeePay, Swiss Remit, Mukuru, Mobile Money',
        "Scénarios de tests des parcours d'envoi et de réception",
        'Rédaction des documentations techniques à destination des équipes',
      ],
      en: [
        'Postman collections: RIA, Western Union, MoneyGram, Taptap Send, TerraPay, ZeePay, Swiss Remit, Mukuru, Mobile Money',
        'Test scenarios for send and receive journeys',
        'Technical documentation written for internal teams',
      ],
    },
    tags: ['Postman', 'REST API', 'JSON', 'XML', 'Documentation'],
  },
  {
    id: 'ux-docs',
    company: 'Flash International',
    period: '2024',
    title: {
      fr: 'Documentation utilisateurs & design UX',
      en: 'User Documentation & UX Design',
    },
    summary: {
      fr: "Application interne de documentation utilisateurs et refonte UX de l'application mobile FlashApp.",
      en: 'Internal user-documentation application and UX redesign of the FlashApp mobile application.',
    },
    details: {
      fr: [
        "Développement d'une application de documentation (Angular, TypeScript, SCSS)",
        'Procédures organisées par service (CSC OPS, Finance, Conformité, Marketing, IT)',
        'Recherche instantanée, glossaire et FAQ',
        'Maquettes et prototypes interactifs sur Figma',
        "Refonte de l'interface mobile de FlashApp",
      ],
      en: [
        'Developed a documentation application (Angular, TypeScript, SCSS)',
        'Procedures organized by department (CSC OPS, Finance, Compliance, Marketing, IT)',
        'Instant search, glossary and FAQ',
        'Interactive mockups and prototypes in Figma',
        'Redesign of the FlashApp mobile interface',
      ],
    },
    tags: ['Angular', 'TypeScript', 'Figma', 'UX Design'],
  },
  {
    id: 'thelab',
    company: 'TheLaB Service',
    period: 'Freelance',
    title: {
      fr: 'Site vitrine — TheLaB Service',
      en: 'Showcase Website — TheLaB Service',
    },
    summary: {
      fr: 'Site vitrine pour TheLaB, laboratoire de transformation humaine : programmes, académie et services mis en avant.',
      en: 'Showcase website for TheLaB, a human transformation laboratory: programs, academy and services highlighted.',
    },
    details: {
      fr: [
        "Présentation des programmes, de l'académie et des services",
        "Statistiques d'impact : 500+ participants, 10+ années d'expérience",
        'Animations et design moderne avec Framer Motion',
      ],
      en: [
        'Presentation of programs, academy and services',
        'Impact statistics: 500+ participants, 10+ years of experience',
        'Modern animations and design with Framer Motion',
      ],
    },
    tags: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
  },
  {
    id: 'glibox',
    company: 'Glibox Service',
    period: 'Freelance',
    title: {
      fr: 'Site vitrine — Glibox Service',
      en: 'Showcase Website — Glibox Service',
    },
    summary: {
      fr: 'Site vitrine bilingue pour Glibox, partenaire de solutions technologiques et commerciales.',
      en: 'Bilingual showcase website for Glibox, a technology and business solutions partner.',
    },
    details: {
      fr: [
        'Design moderne bilingue (FR/EN) avec mode sombre',
        'Proposition de valeur : Simplifiez, Optimisez, Innovez',
        'Internationalisation i18n',
      ],
      en: [
        'Modern bilingual (FR/EN) design with dark mode',
        'Value proposition: Simplify, Optimize, Innovate',
        'i18n internationalization',
      ],
    },
    tags: ['React', 'Vite', 'Tailwind', 'i18n'],
  },
];
