import React from 'react';
import { CalendarCheck, Shield, Clock, IndianRupee, MapPin, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_INFO } from '../data/pricing';
import { openWhatsApp, WHATSAPP_TEMPLATES } from '../utils/whatsapp';

export default function WhyChooseUs({ onOpenBooking }) {
  const points = [
    {
      title: "Effortless WhatsApp Booking",
      tamilTitle: "எளிய வாட்ஸ்அப் முன்பதிவு",
      description: "Book an acting driver in seconds with a simple WhatsApp message or quick phone call—no complex apps or account creations required.",
      icon: CalendarCheck
    },
    {
      title: "Local & Outstation Reach",
      tamilTitle: "உள்ளூர் & வெளியூர் சேவை",
      description: "From 2-hour shopping runs across Tenkasi to full-day 12-hour interstate tours across Tamil Nadu and Kerala.",
      icon: MapPin
    },
    {
      title: "Flexible Hourly Billing",
      tamilTitle: "நெகிழ்வான கால அளவு",
      description: "Transparent hourly slabs (2h, 3h, 4h, or +₹60/hr) ensuring you pay only for the actual time your driver is assigned.",
      icon: Clock
    },
    {
      title: "100% Published Tariff",
      tamilTitle: "வெளிப்படையான கட்டண விபரம்",
      description: "Fixed rates starting from ₹300 directly from our official schedule. Zero peak surge, midnight surcharges, or hidden fees.",
      icon: IndianRupee
    },
    {
      title: "Direct WhatsApp Dispatch",
      tamilTitle: "நேரடி ஒருங்கிணைப்பு",
      description: "Instantly share live pickup locations, manage stops, and coordinate directly with our central Tenkasi dispatch office.",
      icon: WhatsAppIcon
    },
    {
      title: "Safe & Experienced Chauffeurs",
      tamilTitle: "பாதுகாப்பான அனுபவமிக்க டிரைவர்கள்",
      description: "Courteous, verified drivers skilled in manual & automatic transmissions, night journeys, ghat roads, and family travel conduct.",
      icon: Shield
    }
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-18 bg-white relative overflow-hidden border-b border-slate-200/60">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[350px] bg-[#E6F4F1]/50 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F4F1] text-[#0C614C] text-xs font-bold uppercase tracking-wider mb-3.5 border border-[#0C614C]/25 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0C614C]" />
            <span>Why Choose KS Acting Drivers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-2 font-display">
            The Preferred Choice for Tenkasi Car Owners
          </h2>

          <div className="text-lg sm:text-xl font-bold text-[#0C614C] font-tamil mb-4">
            ஏன் எங்களை தேர்வு செய்ய வேண்டும்?
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We prioritize your family's safety, strict punctuality, and complete pricing honesty for every journey across South Tamil Nadu.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {points.map((pt, idx) => {
            const IconComponent = pt.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAFCFA] rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0C614C]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#E6F4F1] border border-[#0C614C]/20 text-[#0C614C] flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#0C614C] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-1">
                    {pt.title}
                  </h3>
                  <div className="text-xs font-bold text-[#0C614C] font-tamil mb-3">
                    {pt.tamilTitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Tenkasi Dispatch Assurance Strip */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-7 rounded-3xl bg-[#F0FAF7] border border-[#0C614C]/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0C614C] uppercase tracking-wider mb-1.5">
              <MapPin className="w-4 h-4 text-[#0C614C]" />
              <span>Direct Tenkasi Dispatch Hub</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-slate-900 mb-1 font-display">
              Centrally Located in Tenkasi
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              Operating right next to Omni Bus Stand (#6), Tenkasi (627811). Skilled acting drivers ready to reach your doorstep promptly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="btn-press px-6 py-3.5 rounded-2xl bg-[#0B4A3F] hover:bg-[#07362e] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-all"
            >
              Book A Driver
            </button>

            <button
              onClick={() => openWhatsApp(WHATSAPP_TEMPLATES.GENERAL_INQUIRY())}
              className="btn-press px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold shadow-sm flex items-center gap-2 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
