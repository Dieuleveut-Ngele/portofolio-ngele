import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Mail, Linkedin, Instagram, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const contactMethods = [
  { name: 'WhatsApp', desc: 'Disponible pour des échanges rapides', icon: MessageCircle, color: 'text-green-500', href: 'https://wa.me/243824045533' },
  { name: 'Email', desc: 'Pour toute demande professionnelle', icon: Mail, color: 'text-red-500', href: 'mailto:Dieuleveutngele@gmail.com' },
  { name: 'LinkedIn', desc: 'Connectons-nous professionnellement', icon: Linkedin, color: 'text-blue-500', href: '#' },
  { name: 'Instagram', desc: 'Suivez mon actualité', icon: Instagram, color: 'text-pink-500', href: '#' },
];

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-12 md:py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-accent/20 text-xs font-bold text-accent mb-6"
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            {t('contact.badge')}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            {t('contact.title')}
          </motion.h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.name}
                href={method.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 flex items-center justify-between group hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className={`p-4 rounded-2xl bg-white/5 ${method.color} group-hover:scale-110 transition-transform`}>
                    <method.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{method.name}</h4>
                    <p className="text-sm text-foreground/50">{method.desc}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all">
                  <Calendar size={18} />
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-display font-black mb-2">{t('contact.schedule')}</h3>
                <p className="text-sm text-foreground/50">{t('contact.schedule_desc')}</p>
              </div>
              <div className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold">
                {t('contact.available')}
              </div>
            </div>
            
            <div className="flex-1 bg-white/5 rounded-2xl border border-white/10 overflow-hidden min-h-[400px] flex flex-col items-center justify-center p-8">
              <Calendar size={48} className="mx-auto mb-6 text-accent/50" />
              <p className="text-foreground/80 mb-8 max-w-sm mx-auto text-center leading-relaxed text-sm md:text-base">
                {t('contact.calendly')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <a 
                  href="https://wa.me/243824045533?text=Bonjour,%20j'aimerais%20planifier%20un%20rendez-vous." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-105 transition-all"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
                <a 
                  href="mailto:dieuleveutngele@gmail.com?subject=Demande%20de%20rendez-vous" 
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-xl shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:scale-105 transition-all"
                >
                  <Mail size={20} />
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[150px] -z-10" />
    </section>
  );
};
