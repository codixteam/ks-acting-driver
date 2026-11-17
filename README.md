# KS ACTING DRIVING SERVICE – Premium Driver Booking Website

A modern, mobile-first, automotive-inspired website and booking platform for **KS ACTING DRIVING SERVICE** in Tenkasi, Tamil Nadu. Designed and engineered following Emil Kowalski's UI engineering principles with direct WhatsApp booking integration.

---

## 🚗 Company & Brand Overview

- **Company Name:** KS ACTING DRIVING SERVICE
- **Short Brand Name:** KS ACTING DRIVERS
- **Tamil Brand Name:** ஆக்டிங் டிரைவர் சேவை
- **Tagline:** *Your Journey. Our Responsibility.* (உங்கள் பயணம். எங்கள் பொறுப்பு.)
- **Primary Contact Number:** `+91 93443 00320` (`9344300320`)
- **WhatsApp Dispatch:** `+91 93443 00320` (`919344300320`)
- **Business Address:** #6, Near Omni Bus Stand, Tenkasi, Tamil Nadu, India.
- **Pincode:** `627811` *(Note: The original printed tariff poster displayed 622811. Kept configurable in `src/data/pricing.js` pending production confirmation).*
- **Google Maps Location:** [https://maps.app.goo.gl/bnVmCa1j3VafrNMR9?g_st=awb](https://maps.app.goo.gl/bnVmCa1j3VafrNMR9?g_st=awb)

---

## 📋 Authoritative Driver Tariff Schedule

All rates are strictly based on the official printed tariff schedule:

### 1. Minimum Trip (குறைந்தபட்ச பயணம்)
*Short-duration city errands, medical visits, and vehicle shifting.*
- **2 Hours Base:** ₹300

### 2. City Local Trip (நகர உள்ளூர் பயணம்)
*Driver services within Tenkasi municipal limits (Tenkasi to Tenkasi).*
- **2 Hours:** ₹300
- **3 Hours:** ₹350
- **4 Hours:** ₹400
- **Every Additional Hour:** ₹60 / hr

### 3. Local Trip (அருகிலுள்ள நகரப் பயணம்)
*Driver service connecting Tenkasi to nearby hub cities (Tirunelveli, Rajapalayam, Sankarankovil).*
- **2 Hours:** ₹300
- **3 Hours:** ₹400
- **4 Hours:** ₹500
- **Every Additional Hour:** ₹60 / hr

### 4. Outstation Trip (வெளியூர் பயணம்)
*Full-day outstation driver service for tours, pilgrimages, and interstate journeys.*
- **Rate:** ₹1,300 / One Day (1 Night / 1 Day schedule)
- **Conditions:**
  - Maximum 12 hours driving only per day for passenger safety.
  - Food and accommodation extra (borne or provided by client).
  - Vehicle fuel, tolls, and interstate permits borne by vehicle owner.

### 5. One-Way Drop (ஒரு வழி பயணம்)
*Point-to-point drop services to railway stations, airports, or hospitals.*
- **Tenkasi → Tirunelveli:** ₹500
- **Tenkasi → Madurai:** ₹1,000
- **Conditions:** Rates vary for other destinations; return bus/train transport allowance for the driver is extra.

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) with custom automotive theme palette
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:**
  - Headings & Display: `Cinzel` & `Plus Jakarta Sans`
  - Tamil Script: `Noto Sans Tamil`
  - Body Text: `Plus Jakarta Sans` / `Inter`
- **Animation & Interactions:** Emil Kowalski's motion tokens (`cubic-bezier(0.23, 1, 0.32, 1)`, button `:active` micro-presses, `100dvh` mobile height, composite-only transforms)

---

## 🎨 Design System & Color Palette

- **Primary Navy:** `#173653`
- **Dark Navy:** `#10283F`
- **Maroon Accent:** `#711E27`
- **WhatsApp Green:** `#25D366`
- **Light Surface:** `#F5F7F9`
- **Body Text:** `#263445`
- **Muted Text:** `#718096`

---

## 📱 Emil Kowalski UI Engineering Standards Applied

1. **`emil-design-eng`**:
   - Custom easing curves (`--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`).
   - Button press state feedback (`:active { transform: scale(0.975); }`) at 120ms.
   - Purposeful micro-animations without sluggish delay or layout thrashing.
2. **`mobile-native`**:
   - Gated `:hover` styles using Tailwind's `future.hoverOnlyWhenSupported` (`@media (hover: hover) and (pointer: fine)`).
   - Removed tap highlight flash (`-webkit-tap-highlight-color: transparent`).
   - Prevented iOS auto-zoom by enforcing 16px font size on form controls.
   - Dynamic viewport sizing (`100dvh`) to prevent address bar layout shifts.
   - Generous 44px+ touch targets on all interactive elements.
3. **`animation-performance`**:
   - Strictly composited properties (`transform`, `opacity`).
   - Respects user preference for reduced motion (`prefers-reduced-motion: reduce`).

---

## 🚀 Running the Project Locally

### 1. Prerequisites
- Node.js (v18+ recommended; tested on v24.18)
- npm or yarn

### 2. Installation
```bash
# Clone the repository (if not already local)
git clone <repo-url>
cd ks_acting_driving_website

# Install dependencies
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The application will be running at [http://localhost:3000/](http://localhost:3000/).

### 4. Build for Production
```bash
npm run build
```
Creates an optimized, production-ready bundle in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🚀 Deployment (GitHub & Vercel)

### Option A: Deploy to Vercel via GitHub (Recommended)

1. **Initialize Git & Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for KS Acting Driving Service"
   git branch -M main
   git remote add origin https://github.com/<your-username>/ks_acting_driving_website.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Log in to [Vercel Dashboard](https://vercel.com).
   - Click **"Add New Project"** → **"Import Git Repository"**.
   - Select your `ks_acting_driving_website` repository.
   - Vercel automatically detects **Vite**:
     - **Build Command:** `vite build` (or `npm run build`)
     - **Output Directory:** `dist`
     - **Install Command:** `npm install`
   - Click **Deploy**. Your website will be live with free global CDN and automatic SSL!

### Option B: Deploy Directly with Vercel CLI

```bash
# Install Vercel CLI globally (if not installed)
npm install -g vercel

# Deploy directly from terminal
vercel

# Deploy to production
vercel --prod
```

The repository includes a ready-to-use [`vercel.json`](./vercel.json) configured with:
- SPA routing rewrite (`/(.*)` → `/index.html`)
- Immutable static asset caching (`Cache-Control: public, max-age=31536000, immutable`)
- Security response headers (`X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`)

---

## 📂 Project Architecture

```
ks_acting_driving_website/
├── public/
│   ├── favicon.svg             # Chauffeur/steering-wheel custom SVG emblem
│   └── videos/
│       └── hero-driving.mp4    # Local offline highway driving video loop
├── src/
│   ├── assets/                 # Static images & local assets
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky responsive header with mobile drawer
│   │   ├── Hero.jsx            # Cinematic video background & CTA section
│   │   ├── About.jsx           # Business background, location & principles
│   │   ├── Services.jsx        # 5 official tariff services grid
│   │   ├── Tariff.jsx          # Complete interactive driver tariff & tables
│   │   ├── PopularRoutes.jsx   # 4 key travel destinations from Tenkasi
│   │   ├── HowItWorks.jsx      # 4-step booking workflow
│   │   ├── WhyChooseUs.jsx     # Value proposition & trust pillars
│   │   ├── Contact.jsx         # Direct Call, WhatsApp & Google Maps embed
│   │   ├── Footer.jsx          # Brand links, Tamil details & copyright
│   │   ├── FloatingWhatsAppButton.jsx # Persistent floating WhatsApp button
│   │   └── BookingModal.jsx    # Interactive WhatsApp booking form
│   ├── data/
│   │   ├── pricing.js          # Authoritative company data & tariff tables
│   │   ├── services.js         # Service category descriptions & rates
│   │   └── routes.js           # Verified routes & custom quote corridors
│   ├── utils/
│   │   └── whatsapp.js         # URL generation & pre-filled message templates
│   ├── App.jsx                 # Main layout & modal controller
│   ├── index.css               # Tailwind & Emil Kowalski motion tokens
│   └── main.jsx                # Application root entry
├── index.html                  # SEO, meta tags, and Google Fonts
├── tailwind.config.js          # Custom theme tokens & mobile hover settings
├── vite.config.js              # Vite bundler configuration
└── package.json                # Project dependencies and build scripts
```

---

## 💬 WhatsApp Integration Details

All booking buttons and forms construct standard URL-encoded WhatsApp messages sent directly to `919344300320`.

### Message Formats:
- **Minimum Trip:** Includes pickup address, date, time, and 2-hour duration.
- **City Local:** Includes pickup, date, time, and expected duration.
- **Local Trip:** Includes from/to, date, time, and duration.
- **Outstation Trip:** Includes destination, dates, pickup time, return date, and vehicle notes.
- **One-Way Drop:** Includes pickup, destination, date, and time.
- **Popular Routes:** Fast-lane route reservation with official tariff quote.

---

## 📝 Pre-Production Verification Checklist

- [x] All 5 service categories aligned with official tariff poster.
- [x] Minimum Trip starting at ₹300 (2 hrs).
- [x] Outstation Trip at ₹1,300/day (12 hrs driving).
- [x] One-Way Drop: Tirunelveli (₹500), Madurai (₹1,000).
- [x] Tamil typography rendered with `Noto Sans Tamil`.
- [x] Interactive booking modal with form validation and live WhatsApp message preview.
- [x] Direct Call Now (`tel:9344300320`) and Google Maps directions link.
- [!] **Pincode Confirmation:** Current code displays `627811` with a footnote pointing out the poster's printed `622811`. Confirm with the business owner prior to printing physical marketing materials.
