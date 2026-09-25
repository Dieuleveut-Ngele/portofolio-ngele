import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

const categories = ["All", "Frontend", "Backend", "Fullstack", "Database", "Tools", "CMS"];

const skills = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Fullstack" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Fullstack" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Fullstack" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "Tools" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "Backend" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Fullstack" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools" },
  { name: "Canva", icon: "https://cdn.simpleicons.org/canva/00C4CC", category: "Tools" },
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4B71", category: "Tools" },
  { name: "Botpress", icon: "https://cdn.simpleicons.org/botpress/white", category: "Tools" },
  { name: "Voiceflow", icon: "https://cdn.simpleicons.org/voiceflow/white", category: "Tools" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: "Frontend" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database" },
  { name: "SQL Server", icon: "https://cdn.simpleicons.org/microsoftsqlserver/white", category: "Database" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Frontend" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Frontend" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", category: "Frontend" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", category: "Frontend" },
  { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", category: "CMS" },
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { t } = useLanguage();

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-12 md:py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            {t('skills.title1')}<span className="text-accent">{t('skills.title2')}</span>
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300",
                  activeCategory === cat 
                    ? "bg-accent text-white shadow-[0_0_20px_rgba(225,29,72,0.3)]" 
                    : "glass-card text-foreground/60 hover:text-foreground hover:scale-105"
                )}
              >
                {cat === 'All' ? t('skills.all') : cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-card p-6 flex flex-col items-center justify-center gap-4 group cursor-default"
              >
                <div className="w-12 h-12 relative">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain transition-transform group-hover:scale-110 group-hover:rotate-6"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-foreground/60 group-hover:text-accent transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
