import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const educationData = [
  {
    title: "Bac +3 en Administration Réseau et Base de Données",
    institution: "ESMICOM",
    img: "https://res.cloudinary.com/dxwcrbqes/image/upload/v1776363706/Portofolio/esmicom_xqdcja.png",
    type: "academic",
    description: "Spécialisation dans la conception et l'administration d'infrastructures réseaux et de systèmes de gestion de bases de données complexes.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Bac +2 en Développement Web Mobile",
    institution: "Kadea Academy (Simplon)",
    img: "https://res.cloudinary.com/dxwcrbqes/image/upload/v1776363706/Portofolio/kadeaacademy_fviqyn.png",
    type: "academic",
    description: "Formation intensive axée sur les technologies web modernes et le développement d'applications mobiles performantes.",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Certification en Intelligence Artificielle",
    institution: "IBM SkillsBuild",
    img: "https://res.cloudinary.com/dxwcrbqes/image/upload/v1776363706/Portofolio/ibm_a2xpkr.png",
    type: "certification",
    description: "Apprentissage des concepts fondamentaux de l'IA, du machine learning et de l'implémentation de solutions intelligentes.",
    color: "from-accent to-red-500"
  },
  {
    title: "Certification \"Certified Data Scientist with Python\"",
    institution: "IBM",
    img: "https://res.cloudinary.com/dxwcrbqes/image/upload/v1776363706/Portofolio/ibm_a2xpkr.png",
    type: "certification",
    description: "Maîtrise de l'analyse de données, de la visualisation et des outils de data science utilisant l'écosystème Python.",
    color: "from-green-500 to-emerald-500"
  }
];

export const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-12 md:py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-accent/20 text-xs font-bold text-accent mb-6"
          >
            <GraduationCap size={14} />
            {t('education.badge')}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            {t('education.title1')}<span className="text-accent">{t('education.title2')}</span>
          </motion.h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            {t('education.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-accent/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Gradient Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex gap-4">
                    <div className={`w-16 h-16 rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-accent/20 transition-colors`}>
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                    item.type === 'academic' 
                      ? 'border-blue-500/30 bg-blue-500/10 text-blue-400' 
                      : 'border-accent/30 bg-accent/10 text-accent'
                  }`}>
                    {item.type === 'academic' ? t('education.diploma') : t('education.cert')}
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-accent font-bold text-sm mb-4">
                  {item.institution}
                </p>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Bottom Decorative Line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color} w-0 group-hover:w-full transition-all duration-700`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-1/4 -right-64 w-[600px] h-[600px] bg-accent/5 blur-[150px] -z-10" />
      <div className="absolute bottom-1/4 -left-64 w-[600px] h-[600px] bg-accent/5 blur-[150px] -z-10" />
    </section>
  );
};