import React, { useState } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { openWhatsApp, WHATSAPP_TEMPLATES } from '../utils/whatsapp';

export default function FloatingWhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    openWhatsApp(WHATSAPP_TEMPLATES.GENERAL_INQUIRY());
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {/* Dismissible tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200 text-xs font-bold animate-fade-in">
          <span>Need a driver in Tenkasi? Chat on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-700 ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleClick}
        className="btn-press group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-glow-whatsapp flex items-center justify-center border-2 border-white/40 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 transition-all hover:scale-105"
        aria-label="Chat with KS Acting Drivers on WhatsApp"
        title="Book Acting Driver via WhatsApp"
      >
        {/* Breathing ripple */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none group-hover:hidden"></span>

        <WhatsAppIcon className="w-8 h-8 text-white relative z-10" />

        {/* Online status indicator dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-white"></span>
      </button>
    </div>
  );
}
