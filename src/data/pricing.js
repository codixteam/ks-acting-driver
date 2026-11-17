/**
 * Authoritative Tariff and Company Information
 * Sourced directly from the official KS ACTING DRIVING SERVICE tariff poster.
 */

export const COMPANY_INFO = {
  name: "KS ACTING DRIVING SERVICE",
  shortName: "KS ACTING DRIVERS",
  tamilName: "ஆக்டிங் டிரைவர் சேவை",
  phone: "9344300320",
  phoneFormatted: "+91 93443 00320",
  whatsappNumber: "919344300320",
  address: "#6, Near Omni Bus Stand, Tenkasi, Tamil Nadu, India.",
  pincode: "627811",
  posterPincode: "622811", // Flagged for confirmation before production
  pincodeNotice: "Standard postal pincode for Tenkasi is 627811 (the original printed poster displayed 622811).",
  googleMapsUrl: "https://maps.app.goo.gl/bnVmCa1j3VafrNMR9?g_st=awb",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.123456789!2d77.3000!3d8.9590!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429bf23456789%3A0xabcdef123456789!2sOmni%20Bus%20Stand%2C%20Tenkasi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  tagline: "Your Journey. Our Responsibility.",
  taglineTamil: "உங்கள் பயணம். எங்கள் பொறுப்பு.",
  description: "Reliable and convenient acting driver services for your local trips, outstation journeys, and one-way travel in Tenkasi and surrounding destinations.",
};

export const TARIFF_CATEGORIES = [
  {
    id: "minimum-trip",
    title: "MINIMUM TRIP",
    tamilTitle: "குறைந்தபட்ச பயணம்",
    badge: "Quick Booking",
    description: "Ideal for brief city errands, medical visits, short appointments, or prompt vehicle shifting.",
    startingRate: "₹300",
    rates: [
      { duration: "2 Hours", price: "₹300", note: "Standard minimum booking duration" }
    ],
    terms: [
      "Minimum booking period is 2 hours",
      "Immediate driver assignment subject to availability",
      "Safe, verified local chauffeurs"
    ]
  },
  {
    id: "city-local-trip",
    title: "CITY LOCAL TRIP",
    tamilTitle: "நகர உள்ளூர் பயணம்",
    badge: "Within Tenkasi",
    description: "Convenient acting driver service within Tenkasi municipal limits (e.g. Tenkasi to Tenkasi shopping, functions, or office commutes).",
    startingRate: "₹300",
    rates: [
      { duration: "2 Hours", price: "₹300", note: "Base trip" },
      { duration: "3 Hours", price: "₹350", note: "Extended local" },
      { duration: "4 Hours", price: "₹400", note: "Half day" },
      { duration: "Every Additional Hour", price: "₹60", note: "Beyond 4 hours" }
    ],
    terms: [
      "Applicable for travel within Tenkasi city limits",
      "Calculated from driver arrival to release time",
      "₹60 per additional hour beyond 4 hours"
    ]
  },
  {
    id: "local-trip",
    title: "LOCAL TRIP",
    tamilTitle: "அருகிலுள்ள நகரப் பயணம்",
    badge: "Nearby Cities",
    description: "Driver service for nearby cities and surrounding hub destinations (e.g. Tirunelveli, Rajapalayam, Sankarankovil).",
    startingRate: "₹300",
    rates: [
      { duration: "2 Hours", price: "₹300", note: "Base slot" },
      { duration: "3 Hours", price: "₹400", note: "Short visit" },
      { duration: "4 Hours", price: "₹500", note: "Standard local trip" },
      { duration: "Every Additional Hour", price: "₹60", note: "Beyond 4 hours" }
    ],
    terms: [
      "Covers nearby hub destinations such as Tirunelveli and Rajapalayam",
      "Punctual and courteous long-route trained drivers",
      "₹60 per additional hour beyond 4 hours"
    ]
  },
  {
    id: "outstation-trip",
    title: "OUTSTATION TRIP",
    tamilTitle: "வெளியூர் பயணம்",
    badge: "1 Night / 1 Day",
    featured: true,
    description: "Full one-day outstation driver service for pilgrimage, family vacations, business travel, and interstate trips.",
    startingRate: "₹1,300",
    priceUnit: "/ One Day",
    rates: [
      { duration: "1 Day (12 hrs driving)", price: "₹1,300", note: "1 Night / 1 Day package" }
    ],
    conditions: [
      "₹1,300 per day (1 Night / 1 Day structure)",
      "Maximum 12 hours of driving per day for safety compliance",
      "Food and accommodation extra (to be provided or borne by client)",
      "Interstate permit/toll costs borne by vehicle owner"
    ],
    terms: [
      "12 hours of driving only per day",
      "Food and accommodation extra",
      "1 Night / 1 Day schedule"
    ]
  },
  {
    id: "one-way-drop",
    title: "ONE-WAY DROP",
    tamilTitle: "ஒரு வழி பயணம்",
    badge: "Station / Airport Drop",
    description: "Dedicated driver service for one-way drops to railway stations, airports, hospitals, or destinations.",
    startingRate: "From ₹500",
    rates: [
      { route: "Tenkasi → Tirunelveli", duration: "One Way", price: "₹500", note: "Direct drop" },
      { route: "Tenkasi → Madurai", duration: "One Way", price: "₹1,000", note: "Direct drop" }
    ],
    conditions: [
      "Pricing varies depending on final destination distance",
      "Extra return transportation charges apply for driver return bus/train fare"
    ],
    terms: [
      "Authoritative rates: Tirunelveli ₹500, Madurai ₹1,000",
      "Return transportation charges for the driver are extra",
      "Other destinations calculated on request"
    ]
  }
];
