export type NewsCategory = 'ia' | 'dev' | 'tech' | 'cyber' | 'network' | 'design' | 'football';

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string | null;
  publishedAt: string;
  category: NewsCategory;
}

export const NEWS_CATEGORIES: NewsCategory[] = [
  'ia',
  'dev',
  'tech',
  'cyber',
  'network',
  'design',
  'football',
];

/**
 * Articles de secours : affichés uniquement si toutes les sources
 * en direct sont indisponibles. Liens evergreen réels, sans fausse date.
 */
export interface FallbackArticle {
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  url: string;
  source: string;
  category: NewsCategory;
}

export const FALLBACK_ARTICLES: FallbackArticle[] = [
  {
    title: { fr: 'React — le blog officiel', en: 'React — the official blog' },
    description: {
      fr: 'Nouveautés, bonnes pratiques et annonces de l’équipe React.',
      en: 'News, best practices and announcements from the React team.',
    },
    url: 'https://react.dev/blog',
    source: 'react.dev',
    category: 'dev',
  },
  {
    title: { fr: 'OpenAI — actualités et recherches', en: 'OpenAI — news and research' },
    description: {
      fr: 'Les dernières annonces en intelligence artificielle.',
      en: 'The latest announcements in artificial intelligence.',
    },
    url: 'https://openai.com/blog',
    source: 'openai.com',
    category: 'ia',
  },
  {
    title: { fr: 'MDN Web Docs', en: 'MDN Web Docs' },
    description: {
      fr: 'La référence pour les technologies web : HTML, CSS, JavaScript.',
      en: 'The reference for web technologies: HTML, CSS, JavaScript.',
    },
    url: 'https://developer.mozilla.org/',
    source: 'developer.mozilla.org',
    category: 'dev',
  },
  {
    title: { fr: 'CISA — alertes de cybersécurité', en: 'CISA — cybersecurity advisories' },
    description: {
      fr: 'Alertes et bulletins de sécurité de l’agence américaine CISA.',
      en: 'Security alerts and bulletins from the US CISA agency.',
    },
    url: 'https://www.cisa.gov/news-events/cybersecurity-advisories',
    source: 'cisa.gov',
    category: 'cyber',
  },
  {
    title: { fr: 'Figma — blog design', en: 'Figma — design blog' },
    description: {
      fr: 'Design, prototypage et tendances UI/UX.',
      en: 'Design, prototyping and UI/UX trends.',
    },
    url: 'https://www.figma.com/blog/',
    source: 'figma.com',
    category: 'design',
  },
  {
    title: { fr: 'BBC Sport — Football', en: 'BBC Sport — Football' },
    description: {
      fr: 'Toute l’actualité du football en direct.',
      en: 'All the latest football news live.',
    },
    url: 'https://www.bbc.com/sport/football',
    source: 'bbc.com',
    category: 'football',
  },
];
