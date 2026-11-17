import React from 'react';
import {
  MapPin,
  ArrowRight,
  Clock,
  Navigation,
  Sparkles,
  Plane,
  Train,
  CheckCircle2,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { POPULAR_ROUTES } from '../data/routes';
import { openWhatsApp, WHATSAPP_TEMPLATES } from '../utils/whatsapp';

export default function PopularRoutes({ onOpenBooking }) {
  const handleRouteBook = (route) => {
    openWhatsApp(WHATSAPP_TEMPLATES.ROUTE_BOOKING(route.from, route.to, route.price));
  };

  return (
    <section id="routes" className="py-10 sm:py-14 lg:py-18 bg-white relative overflow-hidden border-b border-slate-200/60">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#E6F4F1]/50 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F4F1] text-[#0C614C] text-xs font-bold uppercase tracking-wider mb-2.5 border border-[#0C614C]/25 shadow-sm">
            <Navigation className="w-3.5 h-3.5 text-[#0C614C]" />
            <span>Connecting South Tamil Nadu & Kerala</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-1.5 font-display">
            Popular Travel Destinations
          </h2>

          <div className="text-sm sm:text-lg font-bold text-[#0C614C] font-tamil mb-2.5">
            பிரபலமான பயண வழித்தடங்கள்
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Frequent travel corridors from Tenkasi for railway transfers, international airport connectivity, specialized hospital visits, and scenic pilgrimage tours.
          </p>
        </div>

        {/* 4 Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {POPULAR_ROUTES.map((route) => {
            const hasVerifiedPrice = route.priceVerified;

            return (
              <div
                key={route.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0C614C]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Route Image Banner */}
                  <div className="relative h-40 sm:h-44 overflow-hidden bg-slate-950">
                    <img
                      src={route.image}
                      alt={`${route.from} to ${route.to}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/35 to-transparent"></div>

                    {/* Top Status Badge */}
                    <div className="absolute top-3 right-3">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md border ${
                          hasVerifiedPrice
                            ? 'bg-[#0C614C] text-white border-[#0C614C]/40'
                            : 'bg-white/95 text-slate-800 border-slate-200'
                        }`}
                      >
                        {route.badge}
                      </span>
                    </div>

                    {/* From - To Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                        <span>{route.from}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="text-white font-extrabold text-sm">{route.to}</span>
                      </div>
                      <div className="text-[11px] font-tamil text-emerald-300 font-semibold mt-0.5">
                        {route.tamilTo}
                      </div>
                    </div>
                  </div>

                  {/* Route Details Body */}
                  <div className="p-5">
                    
                    {/* Distance & Duration Strip */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3.5 pb-3 border-b border-slate-100">
                      <span className="flex items-center gap-1 font-bold text-slate-700">
                        <MapPin className="w-3.5 h-3.5 text-[#0C614C]" />
                        {route.distance}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-slate-600">
                        <Clock className="w-3.5 h-3.5 text-[#0C614C]" />
                        {route.approxDuration}
                      </span>
                    </div>

                    {/* Price Block */}
                    <div className="mb-3.5">
                      <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {route.priceType}
                      </div>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-2xl sm:text-3xl font-black text-[#024F45]">
                          {route.price}
                        </span>
                        {hasVerifiedPrice ? (
                          <span className="inline-flex items-center gap-1 text-[11px] text-[#0C614C] font-bold bg-[#E6F4F1] px-2 py-0.5 rounded-full border border-[#0C614C]/20">
                            <CheckCircle2 className="w-3 h-3" />
                            Official
                          </span>
                        ) : (
                          <span className="text-[11px] text-slate-500 font-medium">
                            On Request
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {route.description}
                    </p>

                    {/* Highlights Tags */}
                    <div className="space-y-1.5 mb-2">
                      {route.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700 font-medium">
                          <span className="w-1 h-1 rounded-full bg-[#0C614C] shrink-0 mt-1.5"></span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      if (onOpenBooking) {
                        onOpenBooking({
                          serviceId: route.category === 'station' || route.category === 'airport' ? 'one-way-drop' : route.category === 'regional' ? 'local-trip' : 'outstation-trip',
                          destination: route.to,
                          tripType: route.category === 'regional' || route.id === 'tenkasi-trivandrum' ? 'round-trip' : 'one-way',
                          pickup: route.from || 'Tenkasi',
                          title: `${route.from} → ${route.to} (${route.price})`,
                        });
                      } else {
                        handleRouteBook(route);
                      }
                    }}
                    className="btn-press py-2.5 px-2 rounded-xl bg-[#0B4A3F] hover:bg-[#07362e] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 shadow-sm transition-colors"
                  >
                    <span>Book Route</span>
                  </button>

                  <button
                    onClick={() => handleRouteBook(route)}
                    className="btn-press py-2.5 px-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                    title="Direct WhatsApp Booking"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>WhatsApp</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Outstation Route Inquiry Banner */}
        <div className="mt-14 max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#FAFCFA] border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              Need a Driver for Custom Outstation Travel?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Traveling to Chennai, Coimbatore, Courtallam, Kanyakumari, or Bangalore in your personal car?
            </p>
          </div>
          <button
            onClick={() => openWhatsApp(WHATSAPP_TEMPLATES.GENERAL_INQUIRY())}
            className="btn-press whitespace-nowrap px-5 py-2.5 rounded-full bg-[#0C614C] hover:bg-[#094c3b] text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Get Custom Fare Quote</span>
          </button>
        </div>

      </div>
    </section>
  );
}
