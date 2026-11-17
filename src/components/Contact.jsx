import React from 'react';
import { MapPin, Phone, Navigation, Clock, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_INFO } from '../data/pricing';
import { openWhatsApp, WHATSAPP_TEMPLATES } from '../utils/whatsapp';

export default function Contact() {
  return (
    <section id="contact" className="py-10 sm:py-14 lg:py-18 bg-[#FAFCFA] relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-[#E6F4F1]/60 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F4F1] border border-[#0C614C]/25 text-[#0C614C] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#0C614C]" />
            <span>Visit or Connect</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-2 font-display">
            Get In Touch
          </h2>

          <div className="text-lg sm:text-xl font-bold text-[#0C614C] font-tamil mb-4">
            தொடர்பு கொள்ளவும்
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Ready to hire an acting driver or have questions regarding outstation schedules and rates? Reach out to our Tenkasi dispatch office anytime.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Business Details & 3 Primary CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300">
            <div>
              <div className="text-xs font-black text-[#0C614C] uppercase tracking-wider mb-2">
                Business Dispatch Office
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-1 font-display">
                {COMPANY_INFO.name}
              </h3>
              <div className="text-sm font-bold text-[#0C614C] font-tamil mb-6">
                {COMPANY_INFO.tamilName}
              </div>

              {/* Address details */}
              <div className="space-y-3.5 mb-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F4F1] border border-[#0C614C]/20 flex items-center justify-center text-[#0C614C] shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Address
                    </div>
                    <div className="text-sm font-extrabold text-slate-800 mt-0.5 leading-snug">
                      {COMPANY_INFO.address}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Pincode: <strong className="text-slate-900">{COMPANY_INFO.pincode}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F4F1] border border-[#0C614C]/20 flex items-center justify-center text-[#0C614C] shrink-0 mt-0.5 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Primary Phone
                    </div>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-base font-black text-slate-900 hover:text-[#0C614C] transition-colors block mt-0.5"
                    >
                      {COMPANY_INFO.phoneFormatted}
                    </a>
                    <div className="text-xs text-slate-500">
                      Direct voice calls for instant driver dispatch
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5 shadow-sm">
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      WhatsApp Dispatch
                    </div>
                    <div className="text-sm font-extrabold text-slate-900 mt-0.5">
                      +91 {COMPANY_INFO.phone}
                    </div>
                    <div className="text-xs text-slate-500">
                      Share pickup locations and travel timings instantly
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The 3 Specific Mandatory CTAs */}
            <div className="space-y-2.5 pt-5 border-t border-slate-100">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn-press w-full py-3.5 px-4 rounded-2xl bg-[#0B4A3F] hover:bg-[#07362e] text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW: {COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={() => openWhatsApp(WHATSAPP_TEMPLATES.GENERAL_INQUIRY())}
                className="btn-press w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WHATSAPP US</span>
              </button>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press w-full py-3.5 px-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200 shadow-sm transition-all"
              >
                <Navigation className="w-4 h-4 text-[#0C614C]" />
                <span>GET DIRECTIONS (GOOGLE MAPS)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Location Card & Visual Map Preview */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm bg-white min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]">
            {/* Map Top Bar */}
            <div className="p-4 bg-white border-b border-slate-200/80 text-slate-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0C614C]" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  Omni Bus Stand, Tenkasi Location
                </span>
              </div>
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#0C614C] hover:underline"
              >
                Open in Google Maps App
              </a>
            </div>

            {/* Embedded Interactive Map Frame */}
            <div className="relative flex-1 w-full min-h-[220px] sm:min-h-[300px] lg:min-h-[360px] bg-slate-100">
              <iframe
                title="KS Acting Drivers Location Map"
                src="https://maps.google.com/maps?q=Omni+Bus+Stand,+Tenkasi,+Tamil+Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Map Footnote Banner */}
            <div className="p-4 bg-[#F7FAF9] border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
              <span>Conveniently located near Omni Bus Stand, Tenkasi.</span>
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0C614C] hover:underline ml-2 shrink-0"
              >
                Get Directions →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
