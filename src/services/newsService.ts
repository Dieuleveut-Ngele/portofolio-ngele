import { FALLBACK_ARTICLES, NewsArticle, NewsCategory } from '../lib/newsData';

/**
 * Récupération d'actualités 100 % frontend — aucune clé API requise.
 *
 * Sources (toutes CORS-friendly et sans authentification) :
 *  - Hacker News via l'API publique Algolia (tech, IA, cybersécurité, cloud…)
 *  - Dev.to API (développement, web/mobile)
 *  - BBC Sport Football en RSS via rss2json (fallback : allorigins + DOMParser)
 */

const HN_QUERIES = [
  'artificial intelligence',
  'cybersecurity',
  'web development',
  'cloud computing',
  'computer networks',
];

const FOOTBALL_RSS = 'https://feeds.bbci.co.uk/sport/football/rss.xml';

// ── Catégorisation par mots-clés (ordre de priorité décroissant) ────────────
const IA_KEYWORDS = ['ai', 'artificial intelligence', 'machine learning', 'llm', 'gpt', 'openai', 'anthropic', 'deep learning', 'neural', 'copilot', 'gemini', 'claude', 'intelligence artificielle'];
const CYBER_KEYWORDS = ['cybersecurity', 'security', 'vulnerability', 'breach', 'malware', 'ransomware', 'hacker', 'phishing', 'exploit', 'cve', 'sécurité', 'cybersécurité', 'faille'];
const NETWORK_KEYWORDS = ['network', '5g', 'dns', 'tcp', 'routing', 'cisco', 'réseau', 'bandwidth', 'latency', 'internet infrastructure'];
const DESIGN_KEYWORDS = ['design', 'ux', 'ui', 'figma', 'user experience', 'typography', 'interface'];
const DEV_KEYWORDS = ['javascript', 'typescript', 'react', 'vue', 'angular', 'node', 'python', 'programming', 'developer', 'coding', 'software', 'github', 'framework', 'développement', 'web', 'api', 'database', 'sql', 'linux', 'devops', 'docker', 'kubernetes'];

function categorize(text: string): NewsCategory {
  const t = text.toLowerCase();
  const match = (words: string[]) => words.some((w) => t.includes(w));
  if (match(IA_KEYWORDS)) return 'ia';
  if (match(CYBER_KEYWORDS)) return 'cyber';
  if (match(NETWORK_KEYWORDS)) return 'network';
  if (match(DESIGN_KEYWORDS)) return 'design';
  if (match(DEV_KEYWORDS)) return 'dev';
  return 'tech';
}

function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return (doc.body.textContent || '').trim();
}

// ── Sources ──────────────────────────────────────────────────────────────────
async function fetchHN(query: string): Promise<NewsArticle[]> {
  const res = await fetch(
    `https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=6&query=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error(`HN ${res.status}`);
  const data = await res.json();
  return (data.hits || [])
    .filter((h: any) => h.url && h.title)
    .map((h: any): NewsArticle => ({
      id: `hn-${h.objectID}`,
      title: h.title,
      description: `${h.points ?? 0} points · ${h.num_comments ?? 0} commentaires · Hacker News`,
      url: h.url,
      source: new URL(h.url).hostname.replace(/^www\./, ''),
      image: null,
      publishedAt: h.created_at,
      category: categorize(h.title),
    }));
}

async function fetchDevTo(): Promise<NewsArticle[]> {
  const res = await fetch('https://dev.to/api/articles?per_page=8&top=7');
  if (!res.ok) throw new Error(`DevTo ${res.status}`);
  const data = await res.json();
  return (data || []).map((a: any): NewsArticle => ({
    id: `devto-${a.id}`,
    title: a.title,
    description: a.description || a.title,
    url: a.url,
    source: 'dev.to',
    image: a.cover_image || a.social_image || null,
    publishedAt: a.published_at,
    category: categorize(`${a.title} ${(a.tag_list || []).join(' ')}`),
  }));
}

async function fetchFootball(): Promise<NewsArticle[]> {
  // Tentative 1 : rss2json (endpoint public sans clé)
  try {
    const res = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(FOOTBALL_RSS)}`
    );
    if (!res.ok) throw new Error(`rss2json ${res.status}`);
    const data = await res.json();
    if (data.status !== 'ok' || !Array.isArray(data.items)) throw new Error('rss2json payload');
    return data.items.slice(0, 6).map((item: any): NewsArticle => ({
      id: `foot-${item.guid || item.link}`,
      title: item.title,
      description: stripHtml(item.description || ''),
      url: item.link,
      source: 'BBC Sport',
      image: item.thumbnail || item.enclosure?.link || null,
      publishedAt: item.pubDate,
      category: 'football',
    }));
  } catch {
    // Tentative 2 : allorigins + parsing XML natif
    const res = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(FOOTBALL_RSS)}`);
    if (!res.ok) throw new Error(`allorigins ${res.status}`);
    const xml = await res.text();
    const doc = new DOMParser().parseFromString(xml, 'text/xml');
    return Array.from(doc.querySelectorAll('item')).slice(0, 6).map((item, i): NewsArticle => ({
      id: `foot-xml-${i}-${item.querySelector('link')?.textContent ?? i}`,
      title: item.querySelector('title')?.textContent ?? '',
      description: stripHtml(item.querySelector('description')?.textContent ?? ''),
      url: item.querySelector('link')?.textContent ?? '',
      source: 'BBC Sport',
      image: item.getElementsByTagName('media:thumbnail')[0]?.getAttribute('url') ?? null,
      publishedAt: item.querySelector('pubDate')?.textContent ?? '',
      category: 'football',
    }));
  }
}

// ── Agrégation : dédoublonnage + tri par date ───────────────────────────────
function dedupeAndSort(articles: NewsArticle[]): NewsArticle[] {
  const seenUrls = new Set<string>();
  const seenTitles = new Set<string>();
  return articles
    .filter((a) => {
      if (!a.url || !a.title) return false;
      const urlKey = a.url.split('?')[0].replace(/\/$/, '').toLowerCase();
      const titleKey = a.title.toLowerCase().trim();
      if (seenUrls.has(urlKey) || seenTitles.has(titleKey)) return false;
      seenUrls.add(urlKey);
      seenTitles.add(titleKey);
      return true;
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/** Interroge toutes les sources en parallèle ; échoue seulement si TOUTES échouent. */
export async function fetchAllNews(): Promise<NewsArticle[]> {
  const results = await Promise.allSettled([
    ...HN_QUERIES.map((q) => fetchHN(q)),
    fetchDevTo(),
    fetchFootball(),
  ]);

  const articles: NewsArticle[] = [];
  for (const r of results) {
    if (r.status === 'fulfilled') articles.push(...r.value);
  }
  if (articles.length === 0) throw new Error('Toutes les sources sont indisponibles');
  return dedupeAndSort(articles);
}

/** Articles statiques de secours, dans la langue affichée. */
export function getFallbackArticles(language: 'fr' | 'en'): NewsArticle[] {
  return FALLBACK_ARTICLES.map((a, i) => ({
    id: `fallback-${i}`,
    title: a.title[language],
    description: a.description[language],
    url: a.url,
    source: a.source,
    image: null,
    publishedAt: '',
    category: a.category,
  }));
}
