import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';
import { projectCategories, projects } from '../lib/projectsData';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { t, language } = useLanguage();

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.categoryId === activeCategory);

  const categoryLabel = (id: string) =>
    projectCategories.find((c) => c.id === id)?.[language] ?? id;

  return (
    <section id="projects" className="py-12 md:py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-accent/20 text-xs font-bold text-accent mb-6"
          >
            <FolderGit2 size={14} />
            {t('projects.badge')}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            {t('projects.title1')}
            <span className="text-accent">{t('projects.title2')}</span>
          </motion.h2>
          <p className="text-foreground/60 max-w-2xl mb-12">
            {t('projects.subtitle')}
          </p>

          {/* Filtres catégories */}
          <div className="flex flex-wrap gap-3">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border',
                  activeCategory === cat.id
                    ? 'bg-accent border-accent text-white shadow-[0_0_20px_rgba(225,29,72,0.3)]'
                    : 'glass-card border-white/5 text-foreground/60 hover:text-foreground hover:border-white/20 hover:-translate-y-1'
                )}
              >
                {cat[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Grille compacte de projets */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.06 }}
                className="glass-card overflow-hidden flex flex-col group"
              >
                {/* Image du projet */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={750}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Badge catégorie sur l'image */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/80">
                    {categoryLabel(project.categoryId)}
                  </div>
                </div>

                {/* Contenu texte */}
                <div className="p-6 md:p-8 flex flex-col flex-1 border-t border-white/5">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-accent mb-3">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-6 text-sm flex-1">
                    {project.description[language]}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest text-foreground/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.demo !== '#' ? (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-2.5 bg-accent/10 border border-accent/20 rounded-xl text-accent text-sm font-bold hover:bg-accent hover:text-white transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                        {t('projects.demo')}
                      </motion.a>
                    ) : (
                      <span className="flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-foreground/30 font-bold cursor-not-allowed text-sm">
                        <ExternalLink size={14} />
                        {t('projects.private')}
                      </span>
                    )}

                    {project.code !== '#' ? (
                      <motion.a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-2.5 glass-card border-white/10 rounded-xl text-sm font-bold hover:bg-white/10 transition-all duration-300"
                      >
                        <Github size={16} />
                        {t('projects.code')}
                      </motion.a>
                    ) : (
                      <span className="flex items-center gap-2 px-6 py-2.5 glass-card border-white/10 rounded-xl text-foreground/30 font-bold cursor-not-allowed text-sm">
                        <Github size={14} />
                        {t('projects.private')}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
