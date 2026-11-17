import React from 'react';
import { Phone, MapPin, Car, ArrowUp, MessageSquare } from 'lucide-react';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_INFO } from '../data/pricing';
import { openWhatsApp, WHATSAPP_TEMPLATES } from '../utils/whatsapp';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Popular Routes', href: '#routes' },
    { name: 'Tariff', href: '#tariff' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info Column with Official Logo */}
          <div className="lg:col-span-5">
            <Logo variant="footer" />

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Reliable, background-verified acting driver services to drive your own car for local errands, outstation journeys, and one-way drops in Tenkasi and surrounding destinations.
            </p>

            <div className="text-xs text-slate-400 space-y-1">
              <div><strong className="text-white">Tagline:</strong> {COMPANY_INFO.tagline}</div>
              <div className="font-tamil text-slate-400">{COMPANY_INFO.taglineTamil}</div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0C614C]"></span>
              <span>Quick Navigation</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#0C614C] font-bold">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
              <span>Contact Dispatch</span>
            </h4>

            <div className="space-y-3 text-sm text-slate-300 mb-6">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#0C614C] shrink-0 mt-1" />
                <div>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="font-bold text-white hover:text-[#25D366] transition-colors"
                  >
                    {COMPANY_INFO.phoneFormatted}
                  </a>
                  <span className="block text-xs text-slate-400">Direct booking & inquiries</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0C614C] shrink-0 mt-1" />
                <div>
                  <span className="text-slate-200 font-medium">{COMPANY_INFO.address}</span>
                  <span className="block text-xs text-slate-400">
                    Pincode: {COMPANY_INFO.pincode}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                onClick={() => onOpenBooking()}
                className="btn-press py-3 px-4 rounded-xl bg-[#0B4A3F] hover:bg-[#07362e] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all text-center"
              >
                Book Driver
              </button>

              <button
                onClick={() => openWhatsApp(WHATSAPP_TEMPLATES.GENERAL_INQUIRY())}
                className="btn-press py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 {COMPANY_INFO.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              Tenkasi, Tamil Nadu, India
            </span>
            <button
              onClick={scrollToTop}
              className="btn-press p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
