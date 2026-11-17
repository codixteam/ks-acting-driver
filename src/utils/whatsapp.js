/**
 * WhatsApp Integration Utilities
 * Business WhatsApp: 919344300320
 * Authoritative message templates for KS ACTING DRIVING SERVICE.
 */

export const WHATSAPP_NUMBER = "919344300320";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * Builds a direct WhatsApp URL with URL-encoded message text.
 */
export function buildWhatsAppUrl(message) {
  if (!message) return WHATSAPP_BASE_URL;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message.trim())}`;
}

/**
 * Opens WhatsApp in a new browser tab safely.
 */
export function openWhatsApp(message) {
  const url = buildWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Standard pre-filled message templates strictly following the specification.
 */
export const WHATSAPP_TEMPLATES = {
  MINIMUM_TRIP: (data = {}) => {
    const { pickup = "", date = "", time = "", duration = "2 Hours" } = data;
    return `Hello KS ACTING DRIVING SERVICE,

I would like to book a minimum trip driver service.

Pickup Location: ${pickup}
Date: ${date}
Pickup Time: ${time}
Required Duration: ${duration}

Please confirm availability.`;
  },

  CITY_LOCAL_TRIP: (data = {}) => {
    const { pickup = "", date = "", time = "", duration = "2 to 4 Hours" } = data;
    return `Hello KS ACTING DRIVING SERVICE,

I would like to book a city local driver service.

Pickup Location: ${pickup}
Date: ${date}
Pickup Time: ${time}
Duration: ${duration}

Please confirm availability and pricing.`;
  },

  LOCAL_TRIP: (data = {}) => {
    const { from = "Tenkasi", to = "", date = "", time = "", duration = "4 Hours" } = data;
    return `Hello KS ACTING DRIVING SERVICE,

I would like to book a local trip driver service.

From: ${from}
To: ${to}
Date: ${date}
Pickup Time: ${time}
Duration: ${duration}

Please confirm availability and pricing.`;
  },

  OUTSTATION_TRIP: (data = {}) => {
    const { pickup = "", destination = "", travelDate = "", time = "", returnDate = "", notes = "" } = data;
    const notesLine = notes ? `\nAdditional Notes: ${notes}` : "";
    return `Hello KS ACTING DRIVING SERVICE,

I would like to book an outstation driver service.

Pickup Location: ${pickup}
Destination: ${destination}
Travel Date: ${travelDate}
Pickup Time: ${time}
Return Date: ${returnDate}${notesLine}

Please confirm availability and the final fare.`;
  },

  ONE_WAY_DROP: (data = {}) => {
    const { pickup = "Tenkasi", destination = "", travelDate = "", time = "" } = data;
    return `Hello KS ACTING DRIVING SERVICE,

I would like to book a one-way drop service.

Pickup Location: ${pickup}
Destination: ${destination}
Travel Date: ${travelDate}
Pickup Time: ${time}

Please confirm the final fare, including applicable return transportation charges.`;
  },

  ROUTE_BOOKING: (from, to, price) => {
    const priceText = price && price.startsWith("₹") ? ` (Official Tariff: ${price})` : "";
    return `Hello KS ACTING DRIVING SERVICE,

I would like to book a driver for the following travel route:

From: ${from}
To: ${to}${priceText}

Please let me know driver availability and booking details.`;
  },

  GENERAL_INQUIRY: () => {
    return `Hello KS ACTING DRIVING SERVICE,

I would like to inquire about your acting driver services in Tenkasi.

Please share availability and tariff details.`;
  }
};

/**
 * Returns the relevant template for a given service category ID.
 */
export function getTemplateForCategory(categoryId, formData = {}) {
  switch (categoryId) {
    case "minimum-trip":
    case "MINIMUM TRIP":
      return WHATSAPP_TEMPLATES.MINIMUM_TRIP(formData);
    case "city-local-trip":
    case "CITY LOCAL TRIP":
      return WHATSAPP_TEMPLATES.CITY_LOCAL_TRIP(formData);
    case "local-trip":
    case "LOCAL TRIP":
      return WHATSAPP_TEMPLATES.LOCAL_TRIP(formData);
    case "outstation-trip":
    case "OUTSTATION TRIP":
      return WHATSAPP_TEMPLATES.OUTSTATION_TRIP(formData);
    case "one-way-drop":
    case "ONE-WAY DROP":
      return WHATSAPP_TEMPLATES.ONE_WAY_DROP(formData);
    default:
      return WHATSAPP_TEMPLATES.GENERAL_INQUIRY();
  }
}
