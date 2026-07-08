import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

// ── Catégories ────────────────────────────────────────────────────────────────
const categories = [
  "All",
  "Financement Participatif & RSE",
  "E-commerce",
  "Fintech & Finance",
  "Site Vitrine",
  "Outils Internes",
];

// ── Projets ───────────────────────────────────────────────────────────────────
const projects = [
  {
    title: "Prelevement Wallet",
    description:
      "Module de reporting et de gestion des prélèvements wallets intégré à Flash POS. Permet le suivi en temps réel des transactions, la validation des prélèvements planifiés, le filtrage multi-devises (CDF, USD, FCN) et l'export des rapports d'exécution.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "REST API"],
    category: "Fintech & Finance",
    // Dépose l'image dans public/assets/prelevement-wallet.png ou upload sur Cloudinary
    image: "/assets/prelevement-wallet.png",
    demo: "#",
    code: "#",
  },
  {
    title: "Documentation Utilisateur — Flash",
    description:
      "Plateforme de documentation interne pour les équipes de Flash. Organise les procédures par service (CSC OPS, Finance, Conformité, Marketing, IT) avec recherche instantanée, glossaire et FAQ pour une prise en main rapide des outils métiers.",
    tags: ["React", "Next.js", "Tailwind", "Algolia Search"],
    category: "Outils Internes",
    // Dépose l'image dans public/assets/doc-utilisateur.png ou upload sur Cloudinary
    image: "https://res.cloudinary.com/dxwcrbqes/image/upload/v1783506690/Portofolio/docuser_f50fel.png",
    demo: "#",
    code: "#",
  },
  {
    title: "TheLaB Service",
    description:
      "Site web vitrine pour TheLaB, laboratoire de transformation humaine spécialisé en développement spirituel, intellectuel et social. Met en avant les programmes, l'académie et les services avec statistiques d'impact (500+ participants, 10+ années d'expérience).",
    tags: ["Next.js", "React", "Tailwind", "Framer Motion"],
    category: "Site Vitrine",
    // Dépose l'image dans public/assets/thelab.png ou upload sur Cloudinary
    image: "https://res.cloudinary.com/dxwcrbqes/image/upload/v1783506687/Portofolio/thelab_h9azyu.png",
    demo: "#",
    code: "#",
  },
  {
    title: "Glibox Service",
    description:
      "Site web vitrine pour Glibox, partenaire de solutions technologiques et commerciales. Design moderne bilingue (FR/EN) avec mode sombre, présentation des services et mise en avant de la proposition de valeur : Simplifiez, Optimisez, Innovez.",
    tags: ["React", "Vite", "Tailwind", "i18n"],
    category: "Site Vitrine",
    // Dépose l'image dans public/assets/glibox.png ou upload sur Cloudinary
    image: "https://res.cloudinary.com/dxwcrbqes/image/upload/v1783506690/Portofolio/glibox_ho6z6m.png",
    demo: "#",
    code: "#",
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { t } = useLanguage();

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
            {t('projects.title1')}
            <span className="text-accent">{t('projects.title2')}</span>
          </motion.h2>
          <p className="text-foreground/60 max-w-2xl mb-12">
            {t('projects.subtitle')}
          </p>

          {/* Filtres catégories */}
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
                {cat === "All" ? t('projects.all') : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des projets */}
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
                {/* Image du projet */}
                <div className="lg:w-1/2 relative overflow-hidden min-h-[220px] lg:min-h-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Badge catégorie sur l'image */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/80">
                    {project.category}
                  </div>
                </div>

                {/* Contenu texte */}
                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center border-l border-white/5">
                  <h3 className="text-3xl font-display font-bold text-accent mb-6">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-8 text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest text-foreground/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {project.demo !== "#" ? (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-8 py-3 bg-accent/10 border border-accent/20 rounded-xl text-accent font-bold hover:bg-accent hover:text-white transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                        {t('projects.demo')}
                      </motion.a>
                    ) : (
                      <span className="flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-foreground/30 font-bold cursor-not-allowed text-sm">
                        <ExternalLink size={16} />
                        Privé
                      </span>
                    )}

                    {project.code !== "#" ? (
                      <motion.a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-8 py-3 glass-card border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all duration-300"
                      >
                        <Github size={18} />
                        {t('projects.code')}
                      </motion.a>
                    ) : (
                      <span className="flex items-center gap-2 px-8 py-3 glass-card border-white/10 rounded-xl text-foreground/30 font-bold cursor-not-allowed text-sm">
                        <Github size={16} />
                        Privé
      </span>
                    )}
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