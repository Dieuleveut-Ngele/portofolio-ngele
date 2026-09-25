import React from 'react';

/**
 * Fond animé du portfolio.
 *
 * Performance : le pattern SVG est statique (plus d'animation d'attributs
 * cx/cy/d qui forçaient un repaint complet à chaque frame). Le mouvement
 * est assuré par des animations CSS sur `transform`/`opacity`, compositées
 * GPU. Les blobs gardent la classe `blur-[120px]` : ils restent masqués
 * sur mobile via la media query de index.css, et tout est désactivé
 * si l'utilisateur préfère réduire les animations.
 */
export const Background = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Plexus — dérive lente et boucle sans couture (pattern de 200px) */}
      <div className="absolute -inset-[210px] opacity-20 plexus-drift">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="plexus" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#E11D48" />
              <circle cx="180" cy="40" r="1" fill="#E11D48" />
              <circle cx="80" cy="180" r="1" fill="#E11D48" />
              <path
                d="M 10 10 L 180 40 L 80 180 Z"
                stroke="#E11D48"
                strokeWidth="0.5"
                strokeOpacity="0.1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#plexus)" />
        </svg>
      </div>

      {/* Noise Overlay — asset local (plus de requête externe) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('/noise.svg')]" />

      {/* Gradient Glows — pulsation compositée (transform/opacity uniquement) */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="blob-pulse-a absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="blob-pulse-b absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
};
