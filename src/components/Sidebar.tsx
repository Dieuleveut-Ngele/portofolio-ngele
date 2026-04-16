import React from 'react';
import { motion } from 'motion/react';

const badges = ["React.js", "Next.js", "Tailwind", "SQL Server", "Node.js", "TypeScript", "Framer Motion"];

export const Sidebar = () => {
  return (
    <aside className="glass-immersive rounded-[20px] p-8 flex flex-col justify-between h-full">
      <div className="hero-text">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[2.5rem] leading-[1.1] font-extrabold mb-3"
        >
          Dieuleveut<br />Ngele
        </motion.h1>
        
        <p className="text-accent-purple font-semibold text-[12px] uppercase tracking-[1px] mb-6">
          Full-Stack Developer & Designer
        </p>
        
        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          Expert en écosystèmes modernes (React/Next) et architecte SQL Server. Je fusionne l'esthétique du design et la rigueur du code.
        </p>
        
        <div className="flex flex-wrap gap-2 mt-5">
          {badges.map((badge) => (
            <span 
              key={badge}
              className="bg-white/[0.05] border border-border-subtle px-[10px] py-[4px] rounded-md text-[11px] text-text-secondary font-mono"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
      
      <div className="pt-10">
        <div className="text-[11px] opacity-50 mb-2 uppercase tracking-wider">Localisation</div>
        <div className="text-sm">Kinshasa, RDC / Remote</div>
      </div>
    </aside>
  );
};
