import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

const categories = ["All", "Financement Participatif & RSE", "E-commerce", "Plateforme d'Investissement", "Plateforme Événementielle"];

const projects = [
  {
    title: "Sotradons",
    description: "Plateforme de financement participatif et de responsabilité sociale des entreprises en République Démocratique du Congo. Connecte entreprises et initiatives sociales pour un impact durable.",
    tags: ["Next.js", "React", "Tailwind", "Node.js", "MongoDB", "Express"],
    category: "Financement Participatif & RSE",
    image: "https://picsum.photos/seed/sotradons/800/600",
    demo: "#",
    code: "#"
  },
  {
    title: "EcoShop",
    description: "Une boutique en ligne moderne axée sur les produits écologiques et durables, avec une gestion complète du panier et des paiements sécurisés.",
    tags: ["React", "Redux", "Firebase", "Stripe"],
    category: "E-commerce",
    image: "https://picsum.photos/seed/ecoshop/800/600",
    demo: "#",
    code: "#"
  }
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { t } = useLanguage();

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-12 md:py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            {t('projects.title1')}<span className="text-accent">{t('projects.title2')}</span>
          </motion.h2>
          <p className="text-foreground/60 max-w-2xl mb-12">
            {t('projects.subtitle')}
          </p>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border",
                  activeCategory === cat 
                    ? "bg-accent border-accent text-white shadow-[0_0_20px_rgba(225,29,72,0.3)]" 
                    : "glass-card border-white/5 text-foreground/60 hover:text-foreground hover:border-white/20 hover:-translate-y-1"
                )}
              >
                {cat === 'All' ? t('projects.all') : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden flex flex-col lg:flex-row group"
              >
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center border-l border-white/5">
                  <h3 className="text-3xl font-display font-bold text-accent mb-6">{project.title}</h3>
                  <p className="text-foreground/70 leading-relaxed mb-8 text-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest text-foreground/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-8 py-3 bg-accent/10 border border-accent/20 rounded-xl text-accent font-bold hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                      {t('projects.demo')}
                    </motion.a>
                    <motion.a
                      href={project.code}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-8 py-3 glass-card border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all duration-300"
                    >
                      <Github size={18} />
                      {t('projects.code')}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
