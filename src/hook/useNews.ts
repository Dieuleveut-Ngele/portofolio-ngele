import { useEffect, useState } from 'react';
import { NewsArticle } from '../lib/newsData';
import { fetchAllNews } from '../services/newsService';

const CACHE_KEY = 'portfolio-news-v1';
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

interface NewsCache {
  timestamp: number;
  articles: NewsArticle[];
}

function readCache(): NewsCache | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as NewsCache;
    if (!Array.isArray(parsed.articles)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeCache(articles: NewsArticle[]) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), articles }));
  } catch {
    // Quota dépassé ou navigation privée → on ignore silencieusement
  }
}

export interface UseNewsResult {
  articles: NewsArticle[];
  loading: boolean;
  /** true si le flux en direct a échoué (le composant affiche alors le fallback) */
  isFallback: boolean;
}

/**
 * Stratégie stale-while-revalidate :
 *  - cache frais (< 30 min) → affiché tel quel, zéro requête ;
 *  - cache périmé → affiché immédiatement + rafraîchi en arrière-plan ;
 *  - pas de cache → skeleton pendant le fetch ; en cas d'échec total,
 *    `isFallback` passe à true et le composant affiche les articles statiques.
 */
export const useNews = (): UseNewsResult => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const cached = readCache();

      if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
        setArticles(cached.articles);
        setLoading(false);
        return;
      }

      // Cache périmé : on l'affiche quand même pendant le rafraîchissement
      if (cached) {
        setArticles(cached.articles);
        setLoading(false);
      }

      try {
        const fresh = await fetchAllNews();
        if (cancelled) return;
        setArticles(fresh);
        setIsFallback(false);
        setLoading(false);
        writeCache(fresh);
      } catch {
        if (cancelled) return;
        // Échec total : si on n'a rien à montrer, le composant utilisera le fallback
        setIsFallback(true);
        setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { articles, loading, isFallback };
};
