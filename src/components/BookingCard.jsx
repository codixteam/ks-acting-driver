import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Navigation, Plus, X, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_INFO } from '../data/pricing';
import { openWhatsApp } from '../utils/whatsapp';

/**
 * Interactive Booking Card Widget
 * Simple, elegant, compact, and high-converting:
 * - Direct, effortless native Date & Time pickers (color-scheme: dark)
 * - Zero enlargement, zero clutter
 * - Responds smoothly to "Book Now" / "Book Route" clicks
 */
export default function BookingCard({
  className = '',
  initialTripType = 'one-way',
  bookingIntent = null,
  onBooked,
}) {
  const [tripType, setTripType] = useState(initialTripType); // one-way, round-trip, city-use
  const [pickup, setPickup] = useState('Tenkasi');
  const [destination, setDestination] = useState('');
  const [stops, setStops] = useState([]);
  const [showAddStop, setShowAddStop] = useState(false);
  const [stopInput, setStopInput] = useState('');
  const [selectedServiceBadge, setSelectedServiceBadge] = useState('');
  const [isHighlighted, setIsHighlighted] = useState(false);

  // Helper to format Date object into YYYY-MM-DD
  const formatISO = (d) => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const todayDate = new Date();
  const todayStr = formatISO(todayDate);

  const [date, setDate] = useState(todayStr);
  const [time, setTime] = useState('10:30');

  // React to bookingIntent redirection triggers
  useEffect(() => {
    if (bookingIntent && bookingIntent.timestamp) {
      if (bookingIntent.tripType) setTripType(bookingIntent.tripType);
      if (typeof bookingIntent.destination !== 'undefined') setDestination(bookingIntent.destination);
      if (bookingIntent.pickup) setPickup(bookingIntent.pickup);
      if (bookingIntent.serviceTitle) setSelectedServiceBadge(bookingIntent.serviceTitle);

      setIsHighlighted(true);
      const timer = setTimeout(() => setIsHighlighted(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [bookingIntent]);

  // Format date display for WhatsApp message: "17 Nov 2026"
  const parsedDate = new Date(date + 'T00:00:00');
  const dayNum = isNaN(parsedDate.getDate()) ? '17' : String(parsedDate.getDate());
  const monthYearStr = isNaN(parsedDate.getTime())
    ? 'Nov 2026'
    : parsedDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

  // Format time display (e.g., 10:30 PM)
  const formatTimeDisplay = (time24) => {
    if (!time24) return '10:30 PM';
    const [h, m] = time24.split(':').map(Number);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const hour12 = h % 12 || 12;
    return `${hour12}:${String(m).padStart(2, '0')} ${ampm}`;
  };

  const handleAddStop = () => {
    if (stopInput.trim()) {
      setStops([...stops, stopInput.trim()]);
      setStopInput('');
      setShowAddStop(false);
    }
  };

  const handleRemoveStop = (index) => {
    setStops(stops.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();

    const tripTypeNames = {
      'one-way': 'One Way Drop',
      'round-trip': 'Round Trip (Outstation / Local)',
      'city-use': 'City Use (Local Tenkasi)',
    };

    const stopsText = stops.length > 0 ? `\n*Intermediate Stops:* ${stops.join(', ')}` : '';
    const selectedText = selectedServiceBadge ? `\n*Selected Package / Route:* ${selectedServiceBadge}` : '';

    const message = `*NEW BOOKING REQUEST – ${COMPANY_INFO.name}*
---------------------------------------
*Service:* Professional Acting Driver${selectedText}
*Trip Type:* ${tripTypeNames[tripType]}
*Pickup Location:* ${pickup || 'Tenkasi'}
*Destination:* ${tripType === 'city-use' ? (destination || 'Within Tenkasi city limits') : (destination || '[To Be Confirmed]')}
*Travel Date:* ${dayNum} ${monthYearStr}
*Pickup Time:* ${formatTimeDisplay(time)}${stopsText}
---------------------------------------
Hello KS Acting Drivers, please confirm driver availability and fare for this trip. Thank you!`;

    openWhatsApp(message);
    if (onBooked) onBooked();
  };

  return (
    <div
      className={`relative bg-[#16202A] text-white rounded-3xl p-5 sm:p-6 shadow-2xl border transition-all duration-300 max-w-lg mx-auto w-full ${
        isHighlighted
          ? 'border-emerald-400 ring-2 ring-[#0C614C]/60 shadow-[0_0_30px_rgba(12,97,76,0.35)]'
          : 'border-slate-700/60'
      } ${className}`}
    >
      
      {/* Dynamic Active Service / Route Pill Banner */}
      {selectedServiceBadge && (
        <div className="mb-4 py-2 px-3.5 rounded-2xl bg-[#0B4A3F]/40 border border-[#0C614C] text-emerald-300 text-xs font-semibold flex items-center justify-between shadow-sm animate-fade-in">
          <div className="flex items-center gap-2 truncate">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="truncate">
              Selected Service: <strong className="text-white font-extrabold">{selectedServiceBadge}</strong>
            </span>
          </div>
          <button
            type="button"
            onClick={() => setSelectedServiceBadge('')}
            className="text-slate-400 hover:text-white p-0.5 rounded-md hover:bg-white/10 transition-colors ml-2 shrink-0"
            title="Clear service selection"
            aria-label="Clear service selection"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Trip Type Segmented Control (One Way, Round Trip, City Use) */}
      <div className="bg-[#0D141C] p-1 rounded-xl flex items-center justify-between text-xs font-semibold mb-5 border border-slate-800">
        <button
          type="button"
          onClick={() => setTripType('one-way')}
          className={`flex-1 py-2 text-center rounded-lg transition-all ${
            tripType === 'one-way'
              ? 'bg-[#1E2938] text-white font-bold shadow-sm border border-slate-600/40'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          One Way
        </button>

        <button
          type="button"
          onClick={() => setTripType('round-trip')}
          className={`flex-1 py-2 text-center rounded-lg transition-all ${
            tripType === 'round-trip'
              ? 'bg-[#1E2938] text-white font-bold shadow-sm border border-slate-600/40'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Round Trip
        </button>

        <button
          type="button"
          onClick={() => setTripType('city-use')}
          className={`flex-1 py-2 text-center rounded-lg transition-all ${
            tripType === 'city-use'
              ? 'bg-[#1E2938] text-white font-bold shadow-sm border border-slate-600/40'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          City Use
        </button>
      </div>

      {/* Form Fields Container */}
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* PICKUP LOCATION */}
        <div>
          <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
            PICKUP LOCATION
          </label>
          <div className="relative bg-[#0F161E] rounded-xl border border-slate-700/60 flex items-center px-3.5 py-3 focus-within:border-[#FF5B26] transition-colors">
            <MapPin className="w-4 h-4 text-slate-400 shrink-0 mr-3" />
            <input
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup location in Tenkasi"
              required
              className="bg-transparent text-white placeholder-slate-500 text-sm w-full focus:outline-none"
            />
          </div>
        </div>

        {/* PICKUP DATE & TIME (Clean, Compact, Native Dual Controls) */}
        <div>
          <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
            PICKUP DATE & TIME
          </label>

          <div className="bg-[#0F161E] rounded-xl border border-slate-700/60 p-2 sm:p-2.5 flex items-center justify-between gap-2 focus-within:border-[#FF5B26] transition-colors">
            
            {/* Left Date Picker */}
            <label className="flex items-center gap-2 cursor-pointer flex-1 group hover:bg-slate-800/40 px-2 py-1.5 rounded-lg transition-colors">
              <Calendar className="w-4 h-4 text-slate-400 shrink-0 group-hover:text-[#FF5B26] transition-colors" />
              <input
                type="date"
                value={date}
                min={todayStr}
                onChange={(e) => setDate(e.target.value)}
                onClick={(e) => {
                  try {
                    if (typeof e.currentTarget.showPicker === 'function') {
                      e.currentTarget.showPicker();
                    }
                  } catch (err) {}
                }}
                style={{ colorScheme: 'dark' }}
                className="bg-transparent text-white font-extrabold text-xs sm:text-sm w-full focus:outline-none cursor-pointer"
              />
            </label>

            {/* Vertical Divider */}
            <div className="h-6 w-[1px] bg-slate-700/70 shrink-0"></div>

            {/* Right Time Picker */}
            <label className="flex items-center gap-2 cursor-pointer flex-1 group hover:bg-slate-800/40 px-2 py-1.5 rounded-lg transition-colors">
              <Clock className="w-4 h-4 text-slate-400 shrink-0 group-hover:text-[#FF5B26] transition-colors" />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                onClick={(e) => {
                  try {
                    if (typeof e.currentTarget.showPicker === 'function') {
                      e.currentTarget.showPicker();
                    }
                  } catch (err) {}
                }}
                style={{ colorScheme: 'dark' }}
                className="bg-transparent text-white font-extrabold text-xs sm:text-sm w-full focus:outline-none cursor-pointer"
              />
            </label>

          </div>
        </div>

        {/* Dynamic Stops Display */}
        {stops.length > 0 && (
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              Intermediate Stops
            </span>
            <div className="flex flex-wrap gap-1.5">
              {stops.map((stop, sIdx) => (
                <span
                  key={sIdx}
                  className="inline-flex items-center gap-1.5 bg-[#0D141C] border border-slate-700 text-xs px-2.5 py-1 rounded-lg text-slate-200"
                >
                  <span>{stop}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveStop(sIdx)}
                    className="text-slate-400 hover:text-red-400 p-0.5"
                    aria-label={`Remove stop ${stop}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* + Add Stop Action / Input */}
        <div>
          {showAddStop ? (
            <div className="flex items-center gap-2 bg-[#0F161E] p-1.5 rounded-xl border border-slate-700">
              <input
                type="text"
                value={stopInput}
                onChange={(e) => setStopInput(e.target.value)}
                placeholder="Enter intermediate stop (e.g. Courtallam)"
                className="flex-1 bg-[#0F161E] text-white placeholder-slate-500 text-xs px-3 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-[#FF5B26]"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddStop();
                  }
                }}
              />
              <button
                type="button"
                onClick={handleAddStop}
                className="px-3 py-2 rounded-lg bg-[#FF5B26] text-white text-xs font-bold"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => setShowAddStop(false)}
                className="px-2 py-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white text-xs"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowAddStop(true)}
              className="btn-press inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF5B26] hover:text-[#ff7a4d] px-3 py-1 rounded-lg border border-dashed border-[#FF5B26]/60 hover:border-[#FF5B26] bg-[#FF5B26]/5 transition-all"
            >
              <Plus className="w-3 h-3" />
              <span>Add Stop</span>
            </button>
          )}
        </div>

        {/* DESTINATION */}
        <div>
          <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
            DESTINATION
          </label>
          <div className="relative bg-[#0F161E] rounded-xl border border-slate-700/60 flex items-center px-3.5 py-3 focus-within:border-[#FF5B26] transition-colors">
            <Navigation className="w-4 h-4 text-blue-400 shrink-0 mr-3 -rotate-45" />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder={tripType === 'city-use' ? 'Within Tenkasi local limits' : 'Enter destination (e.g. Tirunelveli, Madurai)'}
              required={tripType !== 'city-use'}
              className="bg-transparent text-white placeholder-slate-500 text-sm w-full focus:outline-none"
            />
          </div>
        </div>

        {/* Primary CTA Button: Book Now */}
        <div className="pt-2">
          <button
            type="submit"
            className="btn-press w-full py-4 px-6 rounded-2xl bg-[#FF5B26] hover:bg-[#E04B15] active:scale-[0.99] text-white font-extrabold text-base tracking-wide shadow-xl shadow-[#FF5B26]/25 transition-all flex items-center justify-center gap-2"
          >
            <span>Book Now</span>
          </button>
        </div>

      </form>

      {/* Floating Circular WhatsApp Button on bottom right corner */}
      <button
        type="button"
        onClick={handleSubmit}
        className="btn-press absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl flex items-center justify-center border-2 border-[#16202A] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 transition-transform hover:scale-110 active:scale-95"
        title="Direct WhatsApp Booking"
        aria-label="Direct WhatsApp Booking"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </button>

    </div>
  );
}
