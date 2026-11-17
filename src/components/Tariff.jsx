import React, { useState } from 'react';
import { ShieldCheck, Info, ArrowRight, CheckCircle2, Sparkles, Clock, MapPin, Compass } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { TARIFF_CATEGORIES, COMPANY_INFO } from '../data/pricing';
import { openWhatsApp, WHATSAPP_TEMPLATES } from '../utils/whatsapp';

export default function Tariff({ onOpenBooking }) {
  // Simple 3-tab filter: all, hourly/local, outstation/one-way
  const [activeFilter, setActiveFilter] = useState('all');

  const handleWhatsAppBooking = (catId) => {
    switch (catId) {
      case 'minimum-trip':
        openWhatsApp(WHATSAPP_TEMPLATES.MINIMUM_TRIP());
        break;
      case 'city-local-trip':
        openWhatsApp(WHATSAPP_TEMPLATES.CITY_LOCAL_TRIP());
        break;
      case 'local-trip':
        openWhatsApp(WHATSAPP_TEMPLATES.LOCAL_TRIP());
        break;
      case 'outstation-trip':
        openWhatsApp(WHATSAPP_TEMPLATES.OUTSTATION_TRIP());
        break;
      case 'one-way-drop':
        openWhatsApp(WHATSAPP_TEMPLATES.ONE_WAY_DROP());
        break;
      default:
        openWhatsApp(WHATSAPP_TEMPLATES.GENERAL_INQUIRY());
    }
  };

  const filteredCategories = TARIFF_CATEGORIES.filter((category) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'hourly') {
      return ['minimum-trip', 'city-local-trip', 'local-trip'].includes(category.id);
    }
    if (activeFilter === 'outstation') {
      return ['outstation-trip', 'one-way-drop'].includes(category.id);
    }
    return true;
  });

  return (
    <section id="tariff" className="py-10 sm:py-14 lg:py-18 bg-[#FAFCFA] relative overflow-hidden border-b border-slate-200/60">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[350px] bg-[#E6F4F1]/60 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F4F1] border border-[#0C614C]/25 text-[#0C614C] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#0C614C]" />
            <span>Official Tariff Rates</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-1.5 font-display">
            Driver Tariff Schedule
          </h2>

          <div className="text-sm sm:text-lg font-bold text-[#0C614C] font-tamil mb-2.5">
            எங்கள் டிரைவர் கட்டண விவரம்
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Transparent, published rates directly from our official tariff schedule. No hidden calculations or surge pricing—just straightforward driving charges for your personal car.
          </p>

          {/* Simple Segment Filter */}
          <div className="flex items-center justify-center gap-1.5 mt-5 sm:mt-6 p-1 bg-slate-200/70 rounded-2xl max-w-md mx-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#0B4A3F] text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              All ({TARIFF_CATEGORIES.length})
            </button>
            <button
              onClick={() => setActiveFilter('hourly')}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === 'hourly'
                  ? 'bg-[#0B4A3F] text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Hourly & Local (3)
            </button>
            <button
              onClick={() => setActiveFilter('outstation')}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === 'outstation'
                  ? 'bg-[#0B4A3F] text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Outstation & Drops (2)
            </button>
          </div>
        </div>

        {/* Polished Tariff Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredCategories.map((category) => {
            const isOutstation = category.id === 'outstation-trip';
            const isOneWay = category.id === 'one-way-drop';
            const isCityLocal = category.id === 'city-local-trip';

            return (
              <div
                key={category.id}
                className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 ${
                  isOutstation || isCityLocal
                    ? 'border-[#0C614C]/40 ring-1 ring-[#0C614C]/20 shadow-md'
                    : 'border-slate-200/90 shadow-sm hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Category Top Badge & Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-900">
                      {category.title}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                        isOutstation || isCityLocal
                          ? 'bg-[#E6F4F1] text-[#0C614C] border border-[#0C614C]/25'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {category.badge}
                    </span>
                  </div>

                  {/* Tamil Subheading */}
                  <div className="text-sm font-bold text-[#0C614C] font-tamil mb-3">
                    {category.tamilTitle}
                  </div>

                  {/* Clean Starting Price Badge */}
                  <div className="bg-[#F7FAF9] rounded-2xl p-4 border border-slate-200/80 mb-5">
                    <div className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-0.5">
                      {isOutstation ? 'Standard Package' : 'Starting Rate'}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        {category.startingRate}
                      </span>
                      <span className="text-xs font-bold text-[#0C614C]">
                        {isOutstation ? '/ 1 Night 1 Day (12h)' : isOneWay ? 'direct drop' : 'base slot'}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {category.description}
                  </p>

                  {/* Polished Rates Table / Breakdown */}
                  <div className="mb-5 bg-slate-50 rounded-2xl p-3 border border-slate-200/70">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-2 px-1">
                      {isOneWay ? 'Destination & Rate' : 'Duration Breakdown'}
                    </div>
                    
                    <div className="space-y-1.5">
                      {category.rates.map((rate, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-center justify-between py-2 px-3 rounded-xl bg-white border border-slate-200/60 text-xs sm:text-sm"
                        >
                          <div>
                            <span className="font-bold text-slate-800">
                              {rate.duration || rate.route}
                            </span>
                            {rate.note && (
                              <span className="block text-[11px] text-slate-500">
                                {rate.note}
                              </span>
                            )}
                          </div>
                          <span className="font-black text-[#0B4A3F] text-sm sm:text-base">
                            {rate.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Simplified Terms / Highlights */}
                  <div className="space-y-1.5 mb-6 text-xs text-slate-600 bg-white rounded-xl p-2.5 border border-slate-100">
                    {category.terms.map((term, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0C614C] shrink-0 mt-0.5" />
                        <span className="leading-snug">{term}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenBooking(category.id)}
                    className="btn-press py-2.5 px-3 rounded-xl bg-[#0B4A3F] hover:bg-[#07362e] text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-1 shadow-sm transition-all"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleWhatsAppBooking(category.id)}
                    className="btn-press py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Polished Notice Strip */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-3xl bg-[#F0FAF7] border border-[#0C614C]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#0C614C] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm text-slate-700">
              <span className="font-extrabold text-slate-900">Official Schedule Note:</span>{' '}
              All rates represent driver service charges only. Vehicle fuel, road tolls, interstate taxes, and parking fees are borne by the vehicle owner.
              <span className="block text-slate-500 text-xs mt-1">
                Central Office: #6, Near Omni Bus Stand, Tenkasi – 627811.
              </span>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenBooking({ serviceId: 'outstation-trip', tripType: 'round-trip', destination: 'Custom Tour / Multi-Day Outstation', title: 'Custom Tour Quote' })}
              className="btn-press w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0B4A3F] hover:bg-[#07362e] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm transition-all"
            >
              Request Custom Quote
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
