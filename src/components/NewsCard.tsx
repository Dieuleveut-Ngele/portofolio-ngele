import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Newspaper } from 'lucide-react';
import { NewsArticle } from '../lib/newsData';
import { useLanguage } from '../contexts/LanguageContext';
import { TranslationKey } from '../lib/translations';

const formatDate = (iso: string, language: string): string => {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '';
  return new Intl.DateTimeFormat(language === 'fr' ? 'fr-FR' : 'en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(d);
};

interface NewsCardProps {
  article: NewsArticle;
  index: number;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article, index }) => {
  const { t, language } = useLanguage();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      className="glass-card overflow-hidden flex flex-col group hover:border-accent/30 transition-colors duration-300"
    >
      {/* Image ou placeholder dégradé */}
      <div className="relative h-36 overflow-hidden bg-white/5">
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            width={600}
            height={400}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/15 via-transparent to-accent/5">
            <Newspaper size={36} className="text-accent/40" />
          </div>
        )}

        {/* Badge catégorie */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/80">
          {t(`news.cat.${article.category}` as TranslationKey)}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-2 text-[10px] font-bold uppercase tracking-widest text-foreground/40">
          <span className="truncate">{article.source}</span>
          <span className="whitespace-nowrap">{formatDate(article.publishedAt, language)}</span>
        </div>

        <h3 className="font-display font-bold text-sm leading-snug mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          {article.title}
        </h3>
        <p className="text-foreground/60 text-xs leading-relaxed line-clamp-2 flex-1">
          {article.description}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 self-start text-xs font-bold uppercase tracking-widest text-accent hover:text-white transition-colors duration-300"
          aria-label={`${t('news.read')} — ${article.title}`}
        >
          {t('news.read')}
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.article>
  );
};
