import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Briefcase, FileText, Mail, GraduationCap, X, Bell, Menu } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';
import { TranslationKey } from '../lib/translations';

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState('nav.home');
  const [toastVisible, setToastVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { name: 'nav.home', href: '#home', icon: Home },
    { name: 'nav.profile', href: '#profile', icon: User },
    { name: 'nav.education', href: '#education', icon: GraduationCap },
    { name: 'nav.projects', href: '#projects', icon: Briefcase },
    { name: 'nav.news', href: '#news', icon: FileText },
    { name: 'nav.contact', href: '#contact', icon: Mail },
  ] as const;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string, href: string) => {
    if (href === '#news') {
      e.preventDefault();
      setToastVisible(true);
      setMobileMenuOpen(false);
      return;
    }
    setActiveItem(name);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => setToastVisible(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [toastVisible]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#mobile-nav')) setMobileMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── Toast notification ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {toastVisible && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 20, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[110] w-[90%] max-w-sm"
          >
            <div className="glass-card-red p-4 flex items-start gap-4 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent animate-pulse" />
              <div className="p-2 bg-accent/20 rounded-full text-accent flex-shrink-0">
                <Bell size={20} />
              </div>
              <div className="flex-1 pt-1">
                <p className="text-sm font-bold text-foreground mb-1">{t('nav.news' as TranslationKey)}</p>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  {t('nav.news_soon' as TranslationKey)}
                </p>
              </div>
              <button
                onClick={() => setToastVisible(false)}
                className="text-foreground/50 hover:text-foreground transition-colors p-1"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── DESKTOP navbar (md+) ────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-[100] hidden md:flex justify-center pt-4 px-4">
        <div className="glass-card flex items-center gap-4 px-6 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.name, item.href)}
              className={cn(
                "relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 group",
                activeItem === item.name
                  ? "text-accent"
                  : "text-foreground/60 hover:text-foreground hover:bg-white/5"
              )}
            >
              {activeItem === item.name && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-accent/10 border-b-2 border-accent rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <item.icon
                size={20}
                className={cn(
                  "relative z-10 transition-transform group-hover:scale-110",
                  activeItem === item.name && "animate-pulse"
                )}
              />
              <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest">
                {t(item.name as TranslationKey)}
              </span>
            </a>
          ))}

          <div className="w-px h-8 bg-foreground/10 mx-2" />

          <button
            onClick={toggleLanguage}
            className="relative flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 text-foreground/60 hover:text-foreground hover:bg-white/5 group"
            title={language === 'fr' ? 'Passer en Anglais' : 'Switch to French'}
          >
            <img
              src={language === 'fr' ? 'https://flagcdn.com/fr.svg' : 'https://flagcdn.com/gb.svg'}
              alt={language === 'fr' ? 'Français' : 'English'}
              className="w-5 h-5 rounded-full object-cover relative z-10 transition-transform group-hover:scale-110 border border-white/20 shadow-md"
            />
            <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest">
              {language.toUpperCase()}
            </span>
          </button>
        </div>
      </nav>

      {/* ── MOBILE navbar (< md) ────────────────────────────────────────────── */}
      <div id="mobile-nav" className="fixed top-0 left-0 right-0 z-[100] md:hidden">

        {/* Barre supérieure mobile */}
        <div className="flex items-center justify-between px-4 pt-4 pb-3">

          {/* Bouton langue à gauche */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] bg-gray-950/90 backdrop-blur-xl border border-white/10"
            title={language === 'fr' ? 'Passer en Anglais' : 'Switch to French'}
          >
            <img
              src={language === 'fr' ? 'https://flagcdn.com/fr.svg' : 'https://flagcdn.com/gb.svg'}
              alt={language === 'fr' ? 'Français' : 'English'}
              className="w-5 h-5 rounded-full object-cover border border-white/20"
            />
            <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/70">
              {language.toUpperCase()}
            </span>
          </button>

          {/* Bouton hamburger / fermer à droite */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] bg-gray-950/90 backdrop-blur-xl border border-white/10 text-foreground/80 hover:text-accent transition-colors duration-200"
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Menu déroulant mobile */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="mx-4 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.6)] overflow-hidden bg-gray-950/95 backdrop-blur-xl border border-white/10"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.name, item.href)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    "flex items-center gap-4 px-5 py-4 transition-all duration-200 border-b border-white/5 last:border-b-0",
                    activeItem === item.name
                      ? "text-accent bg-accent/10"
                      : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                  )}
                >
                  <item.icon
                    size={18}
                    className={cn("flex-shrink-0", activeItem === item.name && "animate-pulse")}
                  />
                  <span className="text-sm font-bold uppercase tracking-widest">
                    {t(item.name as TranslationKey)}
                  </span>

                  {activeItem === item.name && (
                    <motion.div
                      layoutId="mobile-pill"
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-accent"
                    />
                  )}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
};