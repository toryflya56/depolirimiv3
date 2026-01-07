export const APP_ROUTES = {
  HOME: '/',
  BOOKING: 'booking',
  SERVICES: '/#services',
  CONTACT: '/#contact'
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
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  }
};

export const BUSINESS_HOURS = [
  { day: 'TUE–FRI', hours: '10AM–8PM' },
  { day: 'SAT', hours: '9AM–6PM' },
  { day: 'SUN', hours: '11AM–5PM' },
  { day: 'MON', hours: 'Closed' },
];
