import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Building2, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';
import { experiences } from '../lib/experienceData';

export const Experience = () => {
  const { t, language } = useLanguage();
  // Premier volet ouvert par défaut pour la découvrabilité
  const [openId, setOpenId] = useState<string | null>('ria');

  return (
    <section id="experience" className="py-12 md:py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête de section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-accent/20 text-xs font-bold text-accent mb-6"
          >
            <Briefcase size={14} />
            {t('experience.badge')}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            {t('experience.title1')}
            <span className="text-accent">{t('experience.title2')}</span>
          </motion.h2>
          <p className="text-foreground/60 max-w-2xl">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Timeline verticale */}
        <div className="relative">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const isOpen = openId === exp.id;
              return (
                <motion.article
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: index * 0.08 }}
                  className="relative pl-8 md:pl-12"
                >
                  {/* Point de timeline */}
                  <div className="absolute left-0 top-8 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-[0_0_12px_rgba(225,29,72,0.6)]" />

                  <div
                    className={cn(
                      'glass-card p-6 md:p-8 transition-all duration-300 hover:border-accent/20',
                      isOpen && 'border-accent/30'
                    )}
                  >
                    {/* En-tête de carte */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-display font-bold leading-tight">
                          {exp.title[language]}
                        </h3>
                        <p className="text-accent text-sm font-bold flex items-center gap-2 mt-2">
                          <Building2 size={14} className="flex-shrink-0" />
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-foreground/70 text-sm leading-relaxed mb-5">
                      {exp.summary[language]}
                    </p>

                    {/* Tags technologiques */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest text-foreground/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Accordéon détails */}
                    <button
                      onClick={() => setOpenId(isOpen ? null : exp.id)}
                      aria-expanded={isOpen}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-white transition-colors duration-300"
                    >
                      {isOpen ? t('experience.less') : t('experience.details')}
                      <ChevronDown
                        size={14}
                        className={cn('transition-transform duration-300', isOpen && 'rotate-180')}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-5 pt-5 border-t border-white/5 space-y-2.5">
                            {exp.details[language].map((detail, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-sm text-foreground/70 leading-relaxed"
                              >
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-[7px] flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute top-1/3 -left-64 w-[500px] h-[500px] bg-accent/5 blur-[150px] -z-10 pointer-events-none" />
    </section>
  );
};
