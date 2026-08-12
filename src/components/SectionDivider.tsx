import React from 'react';

interface SectionDividerProps {
  variant?: 'wave' | 'curve' | 'slant' | 'glow-line' | 'dots-line';
  colorTop?: string; 
  colorBottom?: string;
  flipY?: boolean;
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'glow-line',
  colorBottom = 'text-white dark:text-slate-950',
  flipY = false,
  className = ''
}) => {
  if (variant === 'wave') {
    return (
      <div className={`w-full overflow-hidden leading-none select-none pointer-events-none relative z-10 ${className}`}>
        <svg
          className={`relative block w-full h-8 sm:h-12 md:h-16 ${colorBottom} ${flipY ? 'rotate-180' : ''}`}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    );
  }

  if (variant === 'curve') {
    return (
      <div className={`w-full overflow-hidden leading-none select-none pointer-events-none relative z-10 ${className}`}>
        <svg
          className={`relative block w-full h-6 sm:h-10 md:h-14 ${colorBottom} ${flipY ? 'rotate-180' : ''}`}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    );
  }

  if (variant === 'slant') {
    return (
      <div className={`w-full overflow-hidden leading-none select-none pointer-events-none relative z-10 ${className}`}>
        <svg
          className={`relative block w-full h-8 sm:h-12 md:h-16 ${colorBottom} ${flipY ? 'rotate-180' : ''}`}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M1200 0L0 120V120H1200V0Z"></path>
        </svg>
      </div>
    );
  }

  if (variant === 'dots-line') {
    return (
      <div className={`relative w-full max-w-7xl mx-auto px-4 py-6 sm:py-10 flex items-center justify-center gap-4 ${className}`}>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent" />
        <div className="flex items-center gap-2 opacity-70">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 shadow-xs" />
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-800 to-transparent" />
      </div>
    );
  }

  // Default: 'glow-line'
  return (
    <div className={`relative w-full my-4 sm:my-8 flex items-center justify-center ${className}`}>
      {/* Background Subtle Line */}
      <div className="w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 dark:via-cyan-400/25 to-transparent" />
      
      {/* Glowing Central Accent Marker */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-500 rounded-full blur-[3px] opacity-70" />
        <div className="w-3.5 h-3.5 rotate-45 border-2 border-cyan-400 dark:border-cyan-300 bg-white dark:bg-slate-900 shadow-xs z-10" />
      </div>
    </div>
  );
};

