import React from 'react';
import {
  Clock,
  Compass,
  MapPin,
  Navigation,
  Milestone,
  ArrowRight,
  Check,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { SERVICES } from '../data/services';
import { openWhatsApp, WHATSAPP_TEMPLATES } from '../utils/whatsapp';

export default function Services({ onOpenBooking }) {
  const renderIcon = (name) => {
    switch (name) {
      case 'Clock':
        return <Clock className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6" />;
      case 'Navigation':
        return <Navigation className="w-6 h-6" />;
      case 'Milestone':
        return <Milestone className="w-6 h-6" />;
      default:
        return <Clock className="w-6 h-6" />;
    }
  };

  const handleDirectWhatsApp = (service) => {
    switch (service.id) {
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

  // Group into Hourly Local (3) vs Intercity & Long Distance (2)
  const hourlyServices = SERVICES.filter((s) => s.group === 'hourly');
  const intercityServices = SERVICES.filter((s) => s.group === 'intercity');

  return (
    <section id="services" className="py-10 sm:py-14 lg:py-18 bg-[#F8FAF9] relative overflow-hidden border-b border-slate-200/60">
      
      {/* Ambient background decoration */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#E6F4F1]/70 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#0C614C]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#0C614C] text-xs font-bold uppercase tracking-wider mb-2.5 border border-slate-200/80 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0C614C]" />
            <span>5 Authoritative Service Categories</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-1.5 font-display">
            Our Acting Driver Services
          </h2>

          <div className="text-sm sm:text-lg font-bold text-[#0C614C] font-tamil mb-2.5">
            எங்கள் ஆக்டிங் டிரைவர் சேவைகள்
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Transparent, published driver tariffs for every journey type — whether you need a chauffeur for 2 hours within Tenkasi city or a full-day highway outstation tour.
          </p>
        </div>

        {/* ----------------- GROUP 1: Hourly City & Regional Trips (3-Card Grid) ----------------- */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2 mb-4 sm:mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0C614C]"></span>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
              Hourly City & Regional Trips (2h, 3h, 4h + ₹60/hr)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {hourlyServices.map((service) => (
              <div
                key={service.id}
                className="flex flex-col justify-between rounded-3xl bg-white p-5 sm:p-6 transition-all duration-300 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0C614C]/50 group relative"
              >
                <div>
                  {/* Card Header: Icon & Duration Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#E6F4F1] text-[#0C614C] border border-[#0C614C]/25 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#0C614C] group-hover:text-white transition-all duration-300">
                      {renderIcon(service.iconName)}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200/60">
                      {service.duration}
                    </span>
                  </div>

                  {/* Title & Tamil Subtitle */}
                  <h3 className="text-xl font-black text-slate-900 mb-0.5 tracking-tight">
                    {service.title}
                  </h3>
                  <div className="text-xs font-bold text-[#0C614C] font-tamil mb-3">
                    {service.tamilTitle}
                  </div>

                  {/* Pricing Callout Box */}
                  <div className="p-3 rounded-xl bg-[#FAFCFA] border border-slate-200/80 mb-4">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-black text-[#024F45]">
                        {service.rate}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {service.rateUnit}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                      {service.rateBreakdown}
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-[#0C614C] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="btn-press py-2.5 px-3 rounded-xl bg-[#0B4A3F] hover:bg-[#07362e] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 shadow-sm transition-colors"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleDirectWhatsApp(service)}
                    className="btn-press py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                    title="Direct WhatsApp Booking"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>WhatsApp</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ----------------- GROUP 2: Long Distance & Destination Drops (2 Wide Featured Cards) ----------------- */}
        <div>
          <div className="flex items-center gap-2 mb-4 sm:mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0C614C]"></span>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
              Long-Distance Outstation & Point-to-Point Drops
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
            {intercityServices.map((service) => {
              const isFlagship = service.featured;
              return (
                <div
                  key={service.id}
                  className={`lg:col-span-6 flex flex-col justify-between rounded-3xl p-5 sm:p-7 transition-all duration-300 relative ${
                    isFlagship
                      ? 'bg-gradient-to-br from-white via-white to-[#F0F9F6] border-2 border-[#0C614C] shadow-xl'
                      : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0C614C]/50'
                  }`}
                >
                  {/* Flagship Badge */}
                  {isFlagship && (
                    <div className="absolute -top-3 right-6 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0C614C] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>Most Popular Highway Service</span>
                    </div>
                  )}

                  <div>
                    {/* Header: Icon & Duration */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-13 h-13 rounded-2xl flex items-center justify-center shadow-sm p-3 ${
                          isFlagship
                            ? 'bg-[#0C614C] text-white'
                            : 'bg-[#E6F4F1] text-[#0C614C] border border-[#0C614C]/25'
                        }`}
                      >
                        {renderIcon(service.iconName)}
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200/60">
                        {service.duration}
                      </span>
                    </div>

                    {/* Title & Tamil Subtitle */}
                    <h3 className="text-2xl font-black text-slate-900 mb-0.5 tracking-tight">
                      {service.title}
                    </h3>
                    <div className="text-xs font-bold text-[#0C614C] font-tamil mb-4">
                      {service.tamilTitle}
                    </div>

                    {/* Rate Callout Box */}
                    <div className="p-3.5 rounded-xl bg-[#FAFCFA] border border-slate-200/80 mb-4">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl sm:text-3xl font-black text-[#024F45]">
                          {service.rate}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {service.rateUnit}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600 font-medium mt-0.5">
                        {service.rateBreakdown}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Feature Bullets */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 pt-4 border-t border-slate-100">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <Check className="w-4 h-4 text-[#0C614C] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => onOpenBooking(service.id)}
                      className={`btn-press py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-colors ${
                        isFlagship
                          ? 'bg-[#0B4A3F] hover:bg-[#07362e] text-white shadow-md'
                          : 'bg-[#0B4A3F] hover:bg-[#07362e] text-white'
                      }`}
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleDirectWhatsApp(service)}
                      className="btn-press py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
                      title="Direct WhatsApp Booking"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>WhatsApp Book</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
