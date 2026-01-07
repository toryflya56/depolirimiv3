export const APP_ROUTES = {
  HOME: '/',
  BOOKING: 'booking',
  SERVICES: '/#services',
  CONTACT: '/#contact'
} as const;

export const COMPANY_INFO = {
  name: "LIRIMI Barber Studio",
  tagline: "Where style meets tradition",
  location: {
    street: "123 Main Street",
    district: "Downtown",
    city: "Anytown",
    state: "CA 12345",
    googleMapsUrl: "https://maps.app.goo.gl/u3ybYvPA1AT818E29"
  },
  contact: {
    phone: "123-456-7890",
    email: "contact@lirimi.com",
  },
  social: {
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  }
};

export const BUSINESS_HOURS = [
  { day: 'Monday', hours: '9:00 AM - 7:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM - 7:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM - 7:00 PM' },
  { day: 'Thursday', hours: '9:00 AM - 7:00 PM' },
  { day: 'Friday', hours: '9:00 AM - 7:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 5:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];
