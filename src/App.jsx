import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookNowSection from './components/BookNowSection';
import Services from './components/Services';
import Tariff from './components/Tariff';
import PopularRoutes from './components/PopularRoutes';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState('minimum-trip');

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const [bookingIntent, setBookingIntent] = useState({
    serviceId: 'minimum-trip',
    tripType: 'one-way',
    destination: '',
    pickup: 'Tenkasi',
    serviceTitle: '',
    timestamp: 0,
  });

  const handleOpenBooking = (serviceData = 'minimum-trip') => {
    let serviceId = 'minimum-trip';
    let tripType = 'city-use';
    let destination = '';
    let pickup = 'Tenkasi';
    let serviceTitle = '';

    if (typeof serviceData === 'string') {
      serviceId = serviceData;
      switch (serviceData) {
        case 'minimum-trip':
          tripType = 'city-use';
          destination = 'Tenkasi Local (2 Hours)';
          serviceTitle = 'Minimum Trip (2 Hours - ₹300)';
          break;
        case 'city-local-trip':
          tripType = 'city-use';
          destination = 'Within Tenkasi local limits';
          serviceTitle = 'City Local Trip (From ₹300)';
          break;
        case 'local-trip':
          tripType = 'round-trip';
          destination = 'Nearby Cities (Tirunelveli / Rajapalayam)';
          serviceTitle = 'Local Trip (From ₹300)';
          break;
        case 'outstation-trip':
          tripType = 'round-trip';
          destination = 'Outstation Tour (1 Night / 1 Day)';
          serviceTitle = 'Outstation Day Trip (₹1,300/day)';
          break;
        case 'one-way-drop':
          tripType = 'one-way';
          destination = 'Tirunelveli / Madurai';
          serviceTitle = 'One-Way Drop (From ₹500)';
          break;
        default:
          tripType = 'one-way';
          destination = '';
          serviceTitle = 'Acting Driver Booking';
      }
    } else if (typeof serviceData === 'object' && serviceData !== null) {
      serviceId = serviceData.serviceId || 'one-way-drop';
      tripType = serviceData.tripType || (serviceId === 'outstation-trip' || serviceId === 'local-trip' ? 'round-trip' : serviceId === 'city-local-trip' || serviceId === 'minimum-trip' ? 'city-use' : 'one-way');
      destination = serviceData.destination || '';
      pickup = serviceData.pickup || 'Tenkasi';
      serviceTitle = serviceData.title || serviceData.serviceTitle || (serviceData.destination ? `${serviceData.destination} Trip` : 'Acting Driver Booking');
    }

    setBookingIntent({
      serviceId,
      tripType,
      destination,
      pickup,
      serviceTitle,
      timestamp: Date.now(),
    });

    // Smoothly redirect / scroll down to the on-page #book-now section
    const target = document.getElementById('book-now');
    if (target) {
      const navOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFCFA] text-slate-800 selection:bg-[#0B4A3F] selection:text-white flex flex-col">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 1. Cinematic Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Dedicated Book Now Section (Immediate Conversion) */}
        <BookNowSection onOpenBooking={handleOpenBooking} bookingIntent={bookingIntent} />

        {/* 3. Five Service Categories */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 4. Popular Travel Destinations (Positioned Above Tariff) */}
        <PopularRoutes onOpenBooking={handleOpenBooking} />

        {/* 5. Complete Driver Tariff Section */}
        <Tariff onOpenBooking={handleOpenBooking} />

        {/* 6. About Business Section (Credibility & Authentic Chauffeur) */}
        <About onOpenBooking={handleOpenBooking} />

        {/* 7. How Booking Works (4 Steps) */}
        <HowItWorks onOpenBooking={handleOpenBooking} />

        {/* 8. Why Choose Us */}
        <WhyChooseUs onOpenBooking={handleOpenBooking} />

        {/* 9. Contact & Map Location */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsAppButton />

      {/* Dynamic Interactive WhatsApp Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialServiceId={selectedServiceId}
      />
    </div>
  );
}
