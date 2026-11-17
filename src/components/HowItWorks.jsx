import React from 'react';
import { MousePointerClick, MessageSquare, FileText, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { openWhatsApp, WHATSAPP_TEMPLATES } from '../utils/whatsapp';

export default function HowItWorks({ onOpenBooking }) {
  const steps = [
    {
      number: "01",
      title: "SELECT YOUR TRIP",
      tamilTitle: "சேவையை தேர்ந்தெடுக்கவும்",
      description: "Choose from Minimum Trip (2 hrs), City Local, Local Trip, Outstation (1D/1N), or One-Way Drop according to your travel schedule.",
      icon: MousePointerClick
    },
    {
      number: "02",
      title: "CONNECT VIA WHATSAPP",
      tamilTitle: "வாட்ஸ்அப் மூலம் தொடர்பு",
      description: "Tap any WhatsApp button or use our quick form to initiate an instant chat with our Tenkasi dispatch desk.",
      icon: MessageSquare
    },
    {
      number: "03",
      title: "SHARE TRIP DETAILS",
      tamilTitle: "பயண விவரங்களை பகிரவும்",
      description: "Provide your pickup point in Tenkasi, travel destination, scheduled date, pickup time, and expected journey duration.",
      icon: FileText
    },
    {
      number: "04",
      title: "DRIVER ARRIVES PROMPTLY",
      tamilTitle: "டிரைவர் வருகை உறுதி",
      description: "Our verified, experienced chauffeur arrives at your doorstep on time to drive your personal car safely and smoothly.",
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-18 bg-[#FAFCFA] relative overflow-hidden border-b border-slate-200/60">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E6F4F1]/60 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F4F1] border border-[#0C614C]/25 text-[#0C614C] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0C614C]" />
            <span>Simple 4-Step Process</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-1.5 font-display">
            How Driver Booking Works
          </h2>

          <div className="text-sm sm:text-lg font-bold text-[#0C614C] font-tamil mb-2.5">
            முன்பதிவு செய்வது எப்படி?
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Hiring an experienced acting driver in Tenkasi is effortless. Follow these four quick steps to confirm your chauffeur.
          </p>
        </div>

        {/* 4 Steps Grid with Connector Line */}
        <div className="relative">
          {/* Subtle horizontal connector on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-0.5 bg-slate-200 -translate-y-8 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0C614C]/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl sm:text-4xl font-black text-[#0B4A3F] font-display">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#E6F4F1] text-[#0C614C] border border-[#0C614C]/20 flex items-center justify-center shadow-sm group-hover:bg-[#0C614C] group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base font-extrabold text-slate-900 mb-1">
                      {step.title}
                    </h3>
                    <div className="text-xs font-bold text-[#0C614C] font-tamil mb-3">
                      {step.tamilTitle}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400">
                    <span>Step {idx + 1} of 4</span>
                    <span className="w-2 h-2 rounded-full bg-[#0C614C]/40 group-hover:bg-[#0C614C] transition-colors"></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA prompt */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-center">
          <button
            onClick={() => onOpenBooking()}
            className="btn-press inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0B4A3F] hover:bg-[#07362e] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-[#0B4A3F]/20 transition-all"
          >
            <span>Start Booking Process</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => openWhatsApp(WHATSAPP_TEMPLATES.GENERAL_INQUIRY())}
            className="btn-press inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#25D366]/20 transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
