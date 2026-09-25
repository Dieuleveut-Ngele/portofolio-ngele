import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Newspaper, Rss, AlertTriangle, Plus } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';
import { TranslationKey } from '../lib/translations';
import { NEWS_CATEGORIES, NewsCategory } from '../lib/newsData';
import { getFallbackArticles } from '../services/newsService';
import { useNews } from '../hook/useNews';
import { NewsCard } from './NewsCard';

const PAGE_SIZE = 6;

/** Skeleton de chargement, calqué sur la forme d'une NewsCard */
const NewsSkeleton = () => (
  <div className="glass-card overflow-hidden animate-pulse">
    <div className="h-36 bg-white/5" />
    <div className="p-5 space-y-3">
      <div className="h-2.5 w-1/3 bg-white/5 rounded" />
      <div className="h-3.5 w-full bg-white/5 rounded" />
      <div className="h-3.5 w-2/3 bg-white/5 rounded" />
      <div className="h-2.5 w-1/4 bg-white/5 rounded" />
    </div>
  </div>
);

export const News = () => {
  const { t, language } = useLanguage();
  const { articles, loading, isFallback } = useNews();
  const [activeCategory, setActiveCategory] = useState<'all' | NewsCategory>('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Flux en direct / cache, sinon articles statiques de secours
  const sourceArticles =
    articles.length > 0 ? articles : isFallback ? getFallbackArticles(language) : [];

  const filtered =
    activeCategory === 'all'
      ? sourceArticles
      : sourceArticles.filter((a) => a.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);

  const handleCategory = (cat: 'all' | NewsCategory) => {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section id="news" className="py-12 md:py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête de section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-accent/20 text-xs font-bold text-accent mb-6"
          >
            <Rss size={14} />
            {t('news.badge')}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            {t('news.title1')}
            <span className="text-accent">{t('news.title2')}</span>
          </motion.h2>
          <p className="text-foreground/60 max-w-2xl mb-10">
            {t('news.subtitle')}
          </p>

          {/* Filtres catégories */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleCategory('all')}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border',
                activeCategory === 'all'
                  ? 'bg-accent border-accent text-white shadow-[0_0_20px_rgba(225,29,72,0.3)]'
                  : 'glass-card border-white/5 text-foreground/60 hover:text-foreground hover:border-white/20 hover:-translate-y-1'
              )}
            >
              {t('news.all')}
            </button>
            {NEWS_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border',
                  activeCategory === cat
                    ? 'bg-accent border-accent text-white shadow-[0_0_20px_rgba(225,29,72,0.3)]'
                    : 'glass-card border-white/5 text-foreground/60 hover:text-foreground hover:border-white/20 hover:-translate-y-1'
                )}
              >
                {t(`news.cat.${cat}` as TranslationKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Bandeau fallback */}
        {isFallback && (
          <div className="mb-8 flex items-center gap-3 px-4 py-3 rounded-xl border border-accent/30 bg-accent/5 text-sm text-foreground/70">
            <AlertTriangle size={16} className="text-accent flex-shrink-0" />
            {t('news.fallback')}
          </div>
        )}

        {/* Grille d'articles / skeleton */}
        {loading && sourceArticles.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <NewsSkeleton key={i} />
            ))}
          </div>
        ) : visible.length === 0 ? (
          <div className="glass-card p-10 text-center text-foreground/50 text-sm flex flex-col items-center gap-3">
            <Newspaper size={28} className="text-accent/40" />
            {t('news.empty')}
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visible.map((article, index) => (
                <NewsCard key={article.id} article={article} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Voir plus */}
        {filtered.length > visibleCount && (
          <div className="mt-10 text-center">
            <motion.button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-accent text-accent font-bold hover:bg-accent hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(225,29,72,0.15)] hover:shadow-[0_0_25px_rgba(225,29,72,0.4)]"
            >
              <Plus size={16} />
              {t('news.more')}
            </motion.button>
          </div>
        )}
      </div>

      {/* Background Accent */}
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-accent/5 blur-[150px] -z-10 pointer-events-none" />
    </section>
  );
};
