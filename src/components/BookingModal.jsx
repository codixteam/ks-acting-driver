import React from 'react';
import { X } from 'lucide-react';
import BookingCard from './BookingCard';

/**
 * Modal wrapper for the interactive Booking Card
 * Triggered from any "Book Now" CTA across the site (Navbar, Hero, Services, Tariff, Footer)
 */
export default function BookingModal({ isOpen, onClose, initialServiceId }) {
  if (!isOpen) return null;

  const categoryMap = {
    'minimum-trip': { category: 'taxi', tripType: 'city-use' },
    'city-local-trip': { category: 'taxi', tripType: 'city-use' },
    'local-trip': { category: 'taxi', tripType: 'round-trip' },
    'outstation-trip': { category: 'self-drive', tripType: 'round-trip' },
    'one-way-drop': { category: 'taxi', tripType: 'one-way' },
  };

  const mapping = (initialServiceId && categoryMap[initialServiceId]) || {
    category: 'taxi',
    tripType: 'one-way',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg my-8 animate-scale-up">
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="btn-press absolute -top-3.5 -right-3.5 z-30 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 shadow-2xl transition-all"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* The Exact Booking Card from User Design */}
        <BookingCard
          initialTripType={mapping.tripType}
          onBooked={onClose}
        />
      </div>
    </div>
  );
}
