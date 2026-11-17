/**
 * Authoritative Services Configuration for KS ACTING DRIVING SERVICE
 * Based strictly on the official printed tariff poster.
 */

export const SERVICES = [
  {
    id: "minimum-trip",
    title: "Minimum Trip",
    tamilTitle: "குறைந்தபட்ச பயணம்",
    badge: "Quick Booking",
    shortTagline: "Short-duration chauffeur booking",
    duration: "2 Hours Base",
    rate: "₹300",
    rateUnit: "for 2 Hours",
    priceText: "₹300 Starting Tariff",
    iconName: "Clock",
    categoryKey: "MINIMUM TRIP",
    group: "hourly",
    description: "Ideal for brief city errands, doctor appointments, vehicle servicing, function visits, or shifting your car safely across town.",
    features: [
      "2 Hours minimum coverage slot",
      "Prompt driver assignment in Tenkasi",
      "Verified, experienced local chauffeur",
      "Manual and automatic car expertise"
    ],
    pricingPreview: "2 Hours – ₹300",
    rateBreakdown: "Flat ₹300 for 2-hour duration",
    buttonText: "Book Minimum Trip"
  },
  {
    id: "city-local-trip",
    title: "City Local Trip",
    tamilTitle: "நகர உள்ளூர் பயணம்",
    badge: "Within Tenkasi",
    shortTagline: "Within Tenkasi municipal limits",
    duration: "2 to 4+ Hours",
    rate: "₹300 – ₹400",
    rateUnit: "+₹60/addl hour",
    priceText: "From ₹300 (2 hrs)",
    iconName: "Compass",
    categoryKey: "CITY LOCAL TRIP",
    group: "hourly",
    description: "Full chauffeur support for shopping runs, wedding functions, temple visits, or full-day errands entirely within Tenkasi municipal limits.",
    features: [
      "2 Hours – ₹300",
      "3 Hours – ₹350",
      "4 Hours – ₹400",
      "Every additional hour – ₹60 only"
    ],
    pricingPreview: "₹300 (2 hrs) • +₹60/addl hr",
    rateBreakdown: "2h: ₹300 | 3h: ₹350 | 4h: ₹400",
    buttonText: "Book City Local"
  },
  {
    id: "local-trip",
    title: "Local Trip",
    tamilTitle: "அருகிலுள்ள நகரப் பயணம்",
    badge: "Regional Hubs",
    shortTagline: "Connecting nearby towns & districts",
    duration: "2 to 4+ Hours",
    rate: "₹300 – ₹500",
    rateUnit: "+₹60/addl hour",
    priceText: "From ₹300 (2 hrs)",
    iconName: "MapPin",
    categoryKey: "LOCAL TRIP",
    group: "hourly",
    description: "Reliable driver service connecting Tenkasi with nearby destinations like Tirunelveli, Rajapalayam, Sankarankovil, Kadayanallur, and Surandai.",
    features: [
      "2 Hours – ₹300",
      "3 Hours – ₹400",
      "4 Hours – ₹500",
      "Every additional hour – ₹60 only"
    ],
    pricingPreview: "₹300 (2 hrs) • +₹60/addl hr",
    rateBreakdown: "2h: ₹300 | 3h: ₹400 | 4h: ₹500",
    buttonText: "Book Local Trip"
  },
  {
    id: "outstation-trip",
    title: "Outstation Trip",
    tamilTitle: "வெளியூர் பயணம்",
    badge: "Flagship Highway Service",
    shortTagline: "One-day & multi-day outstation journeys",
    duration: "1 Night / 1 Day",
    rate: "₹1,300",
    rateUnit: "/ One Day",
    priceText: "₹1,300 per day",
    iconName: "Navigation",
    categoryKey: "OUTSTATION TRIP",
    featured: true,
    group: "intercity",
    description: "Relax in your own car during long highway journeys. Our professional drivers manage long-distance family tours, temple circuits, business visits, and hill station holidays.",
    features: [
      "₹1,300 per Day (1 Night / 1 Day)",
      "Strict 12 hours driving limit for safety",
      "Food and accommodation extra",
      "Expert highway & night driving skills"
    ],
    pricingPreview: "₹1,300 / One Day (12h driving)",
    rateBreakdown: "₹1,300 / Day • 12h driving only • 1N/1D",
    buttonText: "Book Outstation Trip"
  },
  {
    id: "one-way-drop",
    title: "One-Way Drop",
    tamilTitle: "ஒரு வழி பயணம்",
    badge: "Fixed Corridors",
    shortTagline: "Point-to-point intercity drops",
    duration: "Direct Destination Drop",
    rate: "From ₹500",
    rateUnit: "fixed route fare",
    priceText: "Tirunelveli ₹500 • Madurai ₹1,000",
    iconName: "Milestone",
    categoryKey: "ONE-WAY DROP",
    group: "intercity",
    description: "Heading to a railway junction, airport, or hospital without driving back? Our chauffeur safely drops your vehicle and family at your destination city.",
    features: [
      "Tenkasi → Tirunelveli: ₹500",
      "Tenkasi → Madurai: ₹1,000",
      "Price varies according to destination distance",
      "Extra return transportation charges apply"
    ],
    pricingPreview: "Tirunelveli ₹500 • Madurai ₹1,000",
    rateBreakdown: "Tirunelveli: ₹500 | Madurai: ₹1,000",
    buttonText: "Book One-Way Drop"
  }
];
