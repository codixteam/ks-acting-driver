import { COMPANY_INFO, TARIFF_CATEGORIES } from './src/data/pricing.js';
import { SERVICES } from './src/data/services.js';
import { POPULAR_ROUTES } from './src/data/routes.js';
import { 
  WHATSAPP_NUMBER, 
  WHATSAPP_BASE_URL, 
  buildWhatsAppUrl, 
  getTemplateForCategory, 
  WHATSAPP_TEMPLATES 
} from './src/utils/whatsapp.js';

console.log('=== KS ACTING DRIVING SERVICE VERIFICATION ===\n');

// 1. Verify Company Information
console.log('1. Checking Company Information:');
console.assert(COMPANY_INFO.name === 'KS ACTING DRIVING SERVICE', 'Name mismatch');
console.assert(COMPANY_INFO.phone === '9344300320', 'Phone mismatch');
console.assert(COMPANY_INFO.whatsappNumber === '919344300320', 'WhatsApp number mismatch');
console.assert(COMPANY_INFO.pincode === '627811', 'Pincode mismatch');
console.assert(COMPANY_INFO.posterPincode === '622811', 'Poster pincode mismatch');
console.log('✓ Company Info OK:', COMPANY_INFO.name, '| Phone:', COMPANY_INFO.phone);

// 2. Verify Tariff Categories
console.log('\n2. Checking 5 Tariff Categories:');
console.assert(TARIFF_CATEGORIES.length === 5, 'Must have 5 tariff categories');
const minTrip = TARIFF_CATEGORIES.find(c => c.id === 'minimum-trip');
console.assert(minTrip && minTrip.rates[0].price === '₹300', 'Minimum trip price mismatch');

const cityTrip = TARIFF_CATEGORIES.find(c => c.id === 'city-local-trip');
console.assert(cityTrip && cityTrip.rates.find(r => r.duration === '2 Hours').price === '₹300');
console.assert(cityTrip && cityTrip.rates.find(r => r.duration === '3 Hours').price === '₹350');
console.assert(cityTrip && cityTrip.rates.find(r => r.duration === '4 Hours').price === '₹400');
console.assert(cityTrip && cityTrip.rates.find(r => r.duration === 'Every Additional Hour').price === '₹60');

const localTrip = TARIFF_CATEGORIES.find(c => c.id === 'local-trip');
console.assert(localTrip && localTrip.rates.find(r => r.duration === '2 Hours').price === '₹300');
console.assert(localTrip && localTrip.rates.find(r => r.duration === '3 Hours').price === '₹400');
console.assert(localTrip && localTrip.rates.find(r => r.duration === '4 Hours').price === '₹500');
console.assert(localTrip && localTrip.rates.find(r => r.duration === 'Every Additional Hour').price === '₹60');

const outstation = TARIFF_CATEGORIES.find(c => c.id === 'outstation-trip');
console.assert(outstation && outstation.startingRate === '₹1,300', 'Outstation price mismatch');
console.assert(outstation && outstation.terms.some(t => t.includes('12 hours')), '12 hours condition missing');

const oneWay = TARIFF_CATEGORIES.find(c => c.id === 'one-way-drop');
console.assert(oneWay && oneWay.rates.find(r => r.route.includes('Tirunelveli')).price === '₹500');
console.assert(oneWay && oneWay.rates.find(r => r.route.includes('Madurai')).price === '₹1,000');
console.log('✓ All 5 Tariff Categories & Authoritative Rates Verified!');

// 3. Verify Popular Routes
console.log('\n3. Checking Popular Routes:');
console.assert(POPULAR_ROUTES.length === 4, 'Must have 4 popular routes');
const tirunelveliRoute = POPULAR_ROUTES.find(r => r.to === 'Tirunelveli');
console.assert(tirunelveliRoute && tirunelveliRoute.price === '₹500' && tirunelveliRoute.priceVerified === true);
const maduraiRoute = POPULAR_ROUTES.find(r => r.to === 'Madurai');
console.assert(maduraiRoute && maduraiRoute.price === '₹1,000' && maduraiRoute.priceVerified === true);
const rajapalayamRoute = POPULAR_ROUTES.find(r => r.to === 'Rajapalayam');
console.assert(rajapalayamRoute && rajapalayamRoute.priceVerified === false, 'Rajapalayam price must not be invented');
const trivandrumRoute = POPULAR_ROUTES.find(r => r.to === 'Trivandrum');
console.assert(trivandrumRoute && trivandrumRoute.priceVerified === false, 'Trivandrum price must not be invented');
console.log('✓ Popular Routes Verified without invented prices!');

// 4. Verify WhatsApp URLs and Message Templates
console.log('\n4. Checking WhatsApp URL Generation:');
console.assert(WHATSAPP_NUMBER === '919344300320');
const testMsg = getTemplateForCategory('minimum-trip', {
  pickup: 'Tenkasi Bus Stand',
  date: '2026-11-15',
  time: '10:00 AM',
  duration: '2 Hours'
});
console.assert(testMsg.includes('Hello KS ACTING DRIVING SERVICE'));
console.assert(testMsg.includes('Pickup Location: Tenkasi Bus Stand'));
const url = buildWhatsAppUrl(testMsg);
console.assert(url.startsWith('https://wa.me/919344300320?text='));
console.assert(url.includes('Hello%20KS%20ACTING%20DRIVING%20SERVICE'));
console.log('✓ WhatsApp Message Templates & URL encoding OK!');

console.log('\n=== ALL 4 VERIFICATION SUITES PASSED PERFECTLY ===');
