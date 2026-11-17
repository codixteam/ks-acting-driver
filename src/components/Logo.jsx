import React from 'react';
import { COMPANY_INFO } from '../data/pricing';

/**
 * Official KS ACTING DRIVING SERVICE Brand Logo Component
 * Sourced directly from the official corporate identity emblem:
 * Features the uniformed chauffeur with keys, bold KS monogram,
 * sleek sedan silhouette, road highway, and bilingual Tamil typography.
 */
export default function Logo({
  variant = 'default',
  className = '',
  imgClassName = '',
  showWordmark = true,
  ...props
}) {
  if (variant === 'navbar') {
    return (
      <div className={`flex items-center gap-2 sm:gap-2.5 ${className}`} {...props}>
        <img
          src="/images/ks-logo.png"
          alt="KS ACTING DRIVING SERVICE Logo"
          width="989"
          height="638"
          className={`h-8 sm:h-9 md:h-10 w-auto object-contain shrink-0 drop-shadow-sm transition-transform duration-200 group-hover:scale-105 ${imgClassName}`}
          loading="eager"
          decoding="async"
        />
        {showWordmark && (
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-display tracking-wider font-black text-slate-900 text-xs sm:text-sm md:text-base leading-tight">
              {COMPANY_INFO.shortName}
            </span>
            <div className="flex items-center gap-1.5 mt-0.5 text-[10px] sm:text-[11px] text-slate-600 font-semibold leading-none">
              <span className="font-tamil font-bold text-slate-700">
                {COMPANY_INFO.tamilName}
              </span>
              <span className="text-slate-300">|</span>
              <span className="uppercase tracking-widest text-[9px] sm:text-[10px] font-bold text-slate-700">
                TENKASI
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`inline-flex flex-col items-center lg:items-start ${className}`} {...props}>
        <div className="relative inline-block p-1.5 sm:p-2 rounded-2xl bg-white/80 backdrop-blur-md border border-pearl-border shadow-subtle group hover:border-champagne/60 transition-all duration-300">
          <img
            src="/images/ks-logo.png"
            alt="KS ACTING DRIVING SERVICE Official Emblem"
            width="989"
            height="638"
            className={`h-16 sm:h-20 lg:h-24 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.02] ${imgClassName}`}
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex flex-col items-start ${className}`} {...props}>
        <div className="p-2 rounded-2xl bg-white border border-pearl-border shadow-subtle mb-4">
          <img
            src="/images/ks-logo.png"
            alt="KS ACTING DRIVING SERVICE"
            width="989"
            height="638"
            className={`h-14 sm:h-16 w-auto object-contain ${imgClassName}`}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    );
  }

  return (
    <img
      src="/images/ks-logo.png"
      alt="KS ACTING DRIVING SERVICE"
      width="989"
      height="638"
      className={`h-12 w-auto object-contain drop-shadow-sm ${imgClassName} ${className}`}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}
