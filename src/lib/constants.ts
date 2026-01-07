/**
 * GLOBAL CONSTANTS & CONFIGURATION
 * ================================
 * Single Source of Truth for static app data.
 */

export const COMPANY_INFO = {
  name: 'LIRIMI Barber Studio',
  tagline: 'Mastery in Every Cut',
  estYear: '2024',
  location: {
    street: '1284 Glass Street',
    district: 'Soho',
    city: 'New York',
    state: 'NY',
    googleMapsUrl: 'https://maps.google.com/?q=1284+Glass+Street+Soho+NYC'
  },
  contact: {
    phone: '+1 (555) 123-4567',
    email: 'bookings@lirimi.com',
    supportUrl: '/support'
  },
  social: {
    instagram: 'https://instagram.com/lirimi_studio',
    twitter: 'https://twitter.com/lirimi_studio',
    facebook: 'https://facebook.com/lirimi_studio'
  }
} as const;

export const APP_ROUTES = {
  home: '/',
  booking: '/booking',
  services: '/#services',
  contact: '/#contact',
  about: '/#about'
} as const;

export const BUSINESS_HOURS = [
  { day: 'Mon - Fri', hours: '10:00 AM - 8:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Sunday', hours: 'Closed' }
] as const;
