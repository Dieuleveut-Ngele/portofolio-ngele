import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Github, Twitter, Instagram, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const socials = [
  { icon: Linkedin, href: '#' },
  { icon: Github, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Globe, href: '#' },
];

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground/60 hover:text-accent hover:border-accent transition-all duration-300"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-foreground/40 font-medium tracking-widest uppercase mb-2">
              {t('footer.rights')}
            </p>
            {/* <p className="text-xs text-foreground/30 flex items-center justify-center gap-1">
              Crafted with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-accent">❤️</motion.span> using React & Tailwind
            </p> */}
          </div>
        </div>
      </div>
      
      {/* Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </footer>
  );
};
