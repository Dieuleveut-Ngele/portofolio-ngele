import React from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-none mb-6"
            >
              Dieuleveut <span className="text-accent">{"</>"}</span> Ngele
            </motion.h1>

            <div className="h-px w-full bg-gradient-to-r from-accent to-transparent mb-8" />

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm md:text-base font-medium text-foreground/80 mb-12"
            >
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                {t('hero.role1')}
              </span>
              <span className="text-accent/30">|</span>
              <span>{t('hero.role2')}</span>
              <span className="text-accent/30">|</span>
              <span>{t('hero.role3')}</span>
              <span className="text-accent/30">|</span>
              <span>{t('hero.role4')}</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 max-w-2xl"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 leading-tight">
                {t('hero.title1')}<span className="text-gradient-red">{t('hero.title2')}</span>{t('hero.title3')}
              </h2>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex flex-col items-center sm:items-start gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                  </span>
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">{t('contact.available')}</span>
                </div>
                <p className="text-xs text-foreground/50">{t('hero.download_desc')}</p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3 rounded-xl border border-accent text-accent font-bold hover:bg-accent hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(225,29,72,0.15)] hover:shadow-[0_0_25px_rgba(225,29,72,0.4)]"
              >
                <Download size={18} />
                {t('hero.download')}
              </motion.button>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-72 h-72 md:w-96 md:h-96"
            >
              <div className="absolute inset-0 border-2 border-accent/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-accent/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 border-2 border-accent/5 rounded-full animate-[spin_25s_linear_infinite]" />
              
              <motion.div 
                animate={{ y: [0, -10, 0], scale: [1, 1.02, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-4 overflow-hidden rounded-full border-4 border-accent/30 shadow-[0_0_30px_rgba(225,29,72,0.3)] z-10 group cursor-pointer"
              >
                <motion.img 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.4 }}
                  src="assets/imaages/profil.png" 
                  alt="Design & Code" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Waving Hand Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 pointer-events-none">
                  <div className="bg-black/40 backdrop-blur-md rounded-full p-4 border border-white/20 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <motion.div
                      animate={{ rotate: [0, 20, -10, 20, -10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                      className="text-5xl origin-bottom-right drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                    >
                      👋
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Accents */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-card-red p-4 rounded-2xl z-20"
              >
                <p className="text-2xl font-black text-accent leading-none">2+</p>
                <p className="text-[10px] uppercase font-bold text-foreground/60">Years Exp.</p>
              </motion.div>

              {/* Big Greeting under the image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap z-20"
              >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]">
                  {t('hero.greeting')}
                </h2>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
         {/* <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          {/* <span className="text-[10px] uppercase tracking-widest text-foreground/40 hidden md:block">Scroll</span> */}
          {/* <div className="w-5 h-8 border-2 border-foreground/30 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 bg-accent rounded-full"
            /> 
          </div> 
        </motion.div> */}
      </div>
    </section>
  );
};
