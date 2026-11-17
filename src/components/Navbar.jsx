import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Car } from 'lucide-react';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_INFO } from '../data/pricing';
import { openWhatsApp, WHATSAPP_TEMPLATES } from '../utils/whatsapp';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section tracking
      const sections = ['home', 'services', 'routes', 'tariff', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Popular Routes', href: '#routes', id: 'routes' },
    { name: 'Tariff', href: '#tariff', id: 'tariff' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-subtle border-b border-slate-200/80 py-1.5 sm:py-2'
          : 'bg-white/92 backdrop-blur-md border-b border-slate-200/60 py-2 sm:py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logo & Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center text-left focus:outline-none focus:ring-2 focus:ring-[#0B4A3F]/30 rounded-lg p-0.5 transition-opacity hover:opacity-95"
            aria-label="KS Acting Driving Service Homepage"
          >
            <Logo variant="navbar" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs sm:text-sm transition-all ${
                    isActive
                      ? 'bg-[#0B4A3F] text-white font-medium px-3.5 py-1 rounded-full shadow-sm'
                      : 'text-slate-700 hover:text-[#0B4A3F] font-medium px-2.5 xl:px-3 py-1 rounded-lg'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="btn-press flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-[#0B4A3F] px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm transition-colors"
              title="Call KS Acting Drivers"
            >
              <Phone className="w-3.5 h-3.5 text-[#0B4A3F]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={() => openWhatsApp(WHATSAPP_TEMPLATES.GENERAL_INQUIRY())}
              className="btn-press p-1.5 rounded-lg bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-sm transition-transform hover:scale-105"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="btn-press px-4 py-1.5 rounded-full bg-[#0B4A3F] hover:bg-[#083b32] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm transition-all"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="btn-press px-3 py-1.5 rounded-full bg-[#0B4A3F] text-white text-xs font-semibold shadow-sm"
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn-press p-2 rounded-lg bg-white text-slate-800 border border-slate-200 focus:outline-none shadow-sm"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-4 pb-6 mt-3 animate-fade-in shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#E6F4F1] text-[#0C614C] font-bold border-l-4 border-[#0C614C]'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#0C614C]"></span>}
                </a>
              );
            })}
          </div>

          <div className="mt-5 pt-5 border-t border-slate-200 grid grid-cols-2 gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="btn-press flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 text-slate-900 text-sm font-bold border border-slate-200"
            >
              <Phone className="w-4 h-4 text-[#0C614C]" />
              <span>Call Us</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp(WHATSAPP_TEMPLATES.GENERAL_INQUIRY());
              }}
              className="btn-press flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white text-sm font-bold shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </button>
          </div>

          <div className="mt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn-press w-full py-3.5 px-4 rounded-xl bg-[#0B4A3F] text-white text-sm font-bold uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
            >
              <Car className="w-4 h-4 text-white" />
              <span>Book A Driver Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
