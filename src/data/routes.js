/**
 * Popular Travel Destinations from Tenkasi
 * Pricing is strictly listed ONLY for poster-verified routes (Tirunelveli ₹500, Madurai ₹1,000).
 * Other destinations display "Custom Quote via WhatsApp" without invented rates.
 */

export const POPULAR_ROUTES = [
  {
    id: "tenkasi-tirunelveli",
    from: "Tenkasi",
    to: "Tirunelveli",
    tamilTo: "திருநெல்வேலி",
    distance: "~55 km",
    approxDuration: "1 hr 15 mins",
    price: "₹500",
    priceType: "Official One-Way Drop",
    priceVerified: true,
    category: "station",
    badge: "Official Tariff",
    tagline: "Frequent Corridor • Railway & District Hub",
    highlights: ["Tirunelveli Railway Junction", "Government Medical College Hub", "District Collectorate & Courts"],
    description: "The most frequent daily route from Tenkasi. Ideal for passenger railway transfers, hospital visits, and official district appointments.",
    image: "/images/tirunelveli.jpg"
  },
  {
    id: "tenkasi-madurai",
    from: "Tenkasi",
    to: "Madurai",
    tamilTo: "மதுரை",
    distance: "~155 km",
    approxDuration: "3 hrs 15 mins",
    price: "₹1,000",
    priceType: "Official One-Way Drop",
    priceVerified: true,
    category: "airport",
    badge: "Official Tariff",
    tagline: "Airport & Cultural Hub • NH744 Highway",
    highlights: ["Madurai Airport (IXM) Flights", "Meenakshi Amman Temple Darshan", "AIIMS & Super Specialty Hospitals"],
    description: "Crucial highway link for flight departures at Madurai Airport, specialized healthcare at multi-specialty centers, and temple visits.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tenkasi-rajapalayam",
    from: "Tenkasi",
    to: "Rajapalayam",
    tamilTo: "ராஜபாளையம்",
    distance: "~50 km",
    approxDuration: "1 hr",
    price: "Custom Fare",
    priceType: "Local Hourly / Outstation",
    priceVerified: false,
    category: "regional",
    badge: "Hourly / Quoted",
    tagline: "Textile Corridor • Srivilliputhur Route",
    note: "Priced under Local Trip hourly tariff or custom quote. Contact on WhatsApp for exact route fare.",
    highlights: ["Srivilliputhur Temple Corridor", "Textile & Cotton Mills Belt", "Western Ghats Foothills"],
    description: "Frequent local trip corridor for cotton mill trade, family visits, and regional transit along the scenic NH744.",
    image: "/images/rajapalayam.jpg"
  },
  {
    id: "tenkasi-trivandrum",
    from: "Tenkasi",
    to: "Trivandrum",
    tamilTo: "திருவனந்தபுரம்",
    distance: "~110 km",
    approxDuration: "3 hrs",
    price: "Custom Fare",
    priceType: "Interstate Outstation",
    priceVerified: false,
    category: "airport",
    badge: "Interstate Ghats",
    tagline: "Interstate Scenic Ghats • Kerala Capital",
    note: "Interstate route through Shenkottai/Aryankavu ghats. Contact directly on WhatsApp for day package availability.",
    highlights: ["TRV International Airport", "Regional Cancer Centre (RCC)", "Padmanabhaswamy Temple"],
    description: "Scenic Western Ghats mountain corridor connecting Tenkasi to Kerala's capital. Popular for international airport drops and hospital visits.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80"
  }
];
