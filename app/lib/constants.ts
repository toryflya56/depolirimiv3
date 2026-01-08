export const APP_ROUTES = {
  HOME: '/',
  BOOKING: '/booking',
  ABOUT: '/about',
  SERVICES: '/services',
  BARBERS: '/barbers',
  CAREERS: '/careers',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  CONTACT: '/contact',
} as const;

export const COMPANY_INFO = {
  name: "LIRIMI Barber Studio",
  tagline: "Mastery in Every Cut.",
  location: {
    street: "456 Grand Street",
    city: "New York",
    state: "NY",
    zip: "10002",
    googleMapsUrl: "https://maps.app.goo.gl/u3ybYvPA1AT818E29"
  },
  contact: {
    phone: "(212) 555-0123",
    email: "bookings@lirimi.com",
  },
  social: {
    instagram: "https://instagram.com/lirimi_barber_studio",
    twitter: "https://twitter.com/lirimi_barber_studio",
    facebook: "https://facebook.com/lirimi_barber_studio",
  }
};
