import React from 'react';
import { Sparkles, ShieldCheck, Clock, Zap, Phone, CheckCircle2 } from 'lucide-react';
import BookingCard from './BookingCard';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_INFO } from '../data/pricing';
import { openWhatsApp, WHATSAPP_TEMPLATES } from '../utils/whatsapp';

/**
 * Dedicated "Book Now" Section
 * Positioned directly beneath the Hero for high-intent, immediate conversions:
 * Features the interactive Booking Card alongside key booking assurances.
 */
export default function BookNowSection({ onOpenBooking, bookingIntent }) {
  return (
    <section id="book-now" className="py-10 sm:py-14 lg:py-18 bg-white relative overflow-hidden border-b border-slate-200/60 scroll-mt-20">
      
      {/* Subtle ambient glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#E6F4F1]/60 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F4F1] border border-[#0C614C]/25 text-[#0C614C] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0C614C]" />
            <span>Instant Chauffeur Reservation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-1.5 font-display">
            Book Your Acting Driver
          </h2>

          <div className="text-sm sm:text-lg font-bold text-[#0C614C] font-tamil mb-2.5">
            உங்கள் ஆக்டிங் டிரைவரை இப்போதே முன்பதிவு செய்யுங்கள்
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Select your travel requirements below to dispatch an experienced chauffeur in Tenkasi with immediate WhatsApp booking confirmation.
          </p>
        </div>

        {/* Main Grid: Centered Booking Card with Quick Assurance Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Interactive Booking Card Widget */}
          <div className="lg:col-span-7 flex justify-center">
            <BookingCard className="w-full shadow-2xl" bookingIntent={bookingIntent} />
          </div>

          {/* Right Column: Trust Assurances & Quick Booking Benefits */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            
            <div className="bg-[#FAFCFA] p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm">
              <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0C614C]"></span>
                <span>Why Book With KS Acting Drivers?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                We provide reliable, experienced chauffeurs for your personal car across Tenkasi, nearby cities, and outstation trips.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#E6F4F1] text-[#0C614C] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Instant WhatsApp Confirmation
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                      Direct connection with our dispatch team. No login or app download required.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#E6F4F1] text-[#0C614C] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Verified & Uniformed Chauffeurs
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                      Background-verified, professional drivers experienced in manual & automatic vehicles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#E6F4F1] text-[#0C614C] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      100% Transparent Published Tariff
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                      Clear base rates starting from ₹300 (2 hrs) with zero hidden surge charges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#E6F4F1] text-[#0C614C] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      Flexible Hourly & Outstation Options
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                      From brief 2-hour shopping errands to full-day 12-hour outstation family tours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Call / WhatsApp strip */}
              <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-600">Need urgent dispatch?</span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="font-bold text-[#0C614C] hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {COMPANY_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
