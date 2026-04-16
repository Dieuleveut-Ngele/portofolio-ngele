import React from 'react';
import { motion } from 'motion/react';

export const Background = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Plexus Simulation */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="plexus" width="200" height="200" patternUnits="userSpaceOnUse">
              <motion.circle 
                animate={{ 
                  cx: [10, 30, 10],
                  cy: [10, 40, 10]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                r="1" fill="#E11D48" 
              />
              <motion.circle 
                animate={{ 
                  cx: [180, 150, 180],
                  cy: [40, 70, 40]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                r="1" fill="#E11D48" 
              />
              <motion.circle 
                animate={{ 
                  cx: [80, 110, 80],
                  cy: [180, 150, 180]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                r="1" fill="#E11D48" 
              />
              
              {/* Lines connecting animated points */}
              <motion.path
                animate={{
                  d: [
                    "M 10 10 L 180 40 L 80 180 Z",
                    "M 30 40 L 150 70 L 110 150 Z",
                    "M 10 10 L 180 40 L 80 180 Z"
                  ]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                stroke="#E11D48" strokeWidth="0.5" strokeOpacity="0.1" fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#plexus)" />
        </svg>
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Gradient Glows */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" 
        />
      </div>
    </div>
  );
};
