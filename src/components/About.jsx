import React from 'react';
import { MapPin, Phone, ShieldCheck, CheckCircle2, Car, Clock, Award, Navigation } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_INFO } from '../data/pricing';
import { openWhatsApp, WHATSAPP_TEMPLATES } from '../utils/whatsapp';

export default function About({ onOpenBooking }) {
  return (
    <section id="about" className="py-10 sm:py-14 lg:py-18 bg-white relative overflow-hidden border-b border-slate-200/60">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[400px] bg-[#E6F4F1]/50 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Chauffeur & Vehicle Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-50 group">
              <img
                src="/images/ks-driver-car.jpg"
                alt="KS Acting Driver with car in Tenkasi"
                className="w-full h-[260px] sm:h-[340px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

              {/* Floating Top Badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-2 text-[11px] sm:text-xs font-bold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-[#0C614C] animate-pulse"></span>
                <span>24/7 Verified Chauffeur Service</span>
              </div>

              {/* Bottom Glass Location Card */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-5 rounded-2xl border border-slate-200/80 text-slate-900 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0C614C] flex items-center justify-center shrink-0 text-white shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                      Business Office
                    </div>
                    <div className="text-xs sm:text-base font-extrabold text-slate-900 leading-tight">
                      #6, Near Omni Bus Stand, Tenkasi
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#0C614C] font-bold mt-0.5">
                      Pincode: {COMPANY_INFO.pincode}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clear, Focused Narrative */}
          <div className="lg:col-span-7">
            
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F4F1] border border-[#0C614C]/25 text-[#0C614C] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#0C614C]" />
              <span>About KS Acting Drivers</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-1.5 font-display">
              Your Car. Our Professional Driver.
            </h2>

            {/* Tamil Subheading */}
            <div className="text-sm sm:text-lg font-bold text-[#0C614C] font-tamil mb-3 sm:mb-4">
              உங்கள் காரில் பாதுகாப்பான, வசதியான பயணம்
            </div>

            {/* Concise Story Body */}
            <p className="text-slate-700 text-xs sm:text-base leading-relaxed mb-3">
              <strong className="text-slate-900 font-bold">KS ACTING DRIVING SERVICE</strong> provides reliable, background-verified acting drivers to operate <strong className="text-slate-900">your personal vehicle</strong> across Tenkasi, neighboring towns, and outstation corridors.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
              Whether you need an experienced driver for a few hours of city shopping, medical emergencies, a family wedding, or a multi-day holiday pilgrimage, enjoy the ride while our skilled drivers manage the roads and traffic safely.
            </p>

            {/* 4 Simple & Polished Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-4 rounded-2xl bg-[#F7FAF9] border border-slate-200/80 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0C614C] shrink-0 shadow-sm mt-0.5">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Your Own Car Specialists</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Experienced with all manual & automatic transmission cars, sedans, and SUVs.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7FAF9] border border-slate-200/80 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0C614C] shrink-0 shadow-sm mt-0.5">
                  <Navigation className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Local & Highway Routes</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Well-versed with Tenkasi bypasses, ghat sections, and highway corridors.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7FAF9] border border-slate-200/80 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0C614C] shrink-0 shadow-sm mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Flexible Time Slots</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    From 2-hour quick local errands starting at ₹300 to full-day 12-hour outstation trips.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7FAF9] border border-slate-200/80 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0C614C] shrink-0 shadow-sm mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Central Tenkasi Hub</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Located near Omni Bus Stand (#6) for rapid chauffeur assignment and pickup.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="btn-press px-6 py-3.5 rounded-2xl bg-[#0B4A3F] hover:bg-[#07362e] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md shadow-[#0B4A3F]/20 transition-all"
              >
                Book A Driver Now
              </button>

              <button
                onClick={() => openWhatsApp(WHATSAPP_TEMPLATES.GENERAL_INQUIRY())}
                className="btn-press flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#25D366]/20 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Message on WhatsApp</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn-press flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#0C614C]" />
                <span>{COMPANY_INFO.phoneFormatted}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
