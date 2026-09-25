import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export const Profile = () => {
  const { t } = useLanguage();

  return (
    <section id="profile" className="py-12 md:py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-2">{t('profile.title')}</h2>
          <p className="text-foreground/60 text-lg">{t('profile.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: User Photo */}
          <div className="lg:col-span-5 sticky top-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02, rotate: -2 }}
              className="relative aspect-[4/3] md:aspect-[3.5/5] rounded-2xl overflow-hidden bg-[#111111] border border-white/5 group shadow-[0_0_40px_rgba(225,29,72,0.1)] hover:shadow-[0_0_60px_rgba(225,29,72,0.3)] transition-all duration-500 cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"
              />
              <motion.img
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                src="https://res.cloudinary.com/dxwcrbqes/image/upload/f_auto,q_auto,w_800/v1776363785/Portofolio/dlvngele_m4vbnq.png"
                alt="Dieuleveut Ngele"
                width={700}
                height={1000}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Waving Hand Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-black/40 backdrop-blur-md rounded-full p-6 border border-white/20 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <motion.div
                    animate={{ rotate: [0, 20, -10, 20, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
                    className="text-6xl origin-bottom-right drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                  >
                    👋
                  </motion.div>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full z-20 transition-transform duration-300 group-hover:-translate-y-1"
              >
                <span className="text-white font-bold text-sm">Dieuleveut Ngele</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Content (4 Blocks) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card-red p-6 border-l-4 border-l-accent"
              >
                <h3 className="text-accent font-bold mb-2 flex items-center gap-2">
                  <div className="w-1 h-1 bg-accent rounded-full" />
                  {t('profile.block1.title')}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {t('profile.block1.desc')}
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-6 border-l-4 border-l-white/10"
              >
                <h3 className="text-foreground font-bold mb-2 flex items-center gap-2">
                  <div className="w-1 h-1 bg-foreground rounded-full" />
                  {t('profile.block2.title')}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {t('profile.block2.desc')}
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6 border-l-4 border-l-white/10 flex flex-col gap-4"
              >
                <h3 className="text-foreground font-bold flex items-center gap-2">
                  <div className="w-1 h-1 bg-foreground rounded-full" />
                  {t('profile.block3.title')}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {t('profile.block3.desc')}
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6 border-l-4 border-l-white/10"
              >
                <h3 className="text-foreground font-bold mb-4 flex items-center gap-2">
                  <div className="w-1 h-1 bg-foreground rounded-full" />
                  {t('profile.block4.title')}
                </h3>
                <ul className="space-y-3 text-foreground/70 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {t('profile.block4.item1')}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {t('profile.block4.item2')}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {t('profile.block4.item3')}
                  </li>
                </ul>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Background Accents */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] -z-10 pointer-events-none" />
    </section>
  );
};
