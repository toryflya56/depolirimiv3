import React, { Suspense } from 'react';
import HeroLanding from '../features/studio/components/HeroLanding';

const OurExpertise = React.lazy(() => import('../features/studio/components/OurExpertise'));
const ServicesSection = React.lazy(() => import('../features/catalog/components/ServicesSection').then(module => ({ default: module.ServicesSection })));
const Testimonials = React.lazy(() => import('../features/studio/components/Testimonials').then(module => ({ default: module.Testimonials })));
const ContactSection = React.lazy(() => import('../features/studio/components/ContactSection').then(module => ({ default: module.ContactSection })));

export const HomePage: React.FC = () => {
  return (
    <div>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-cyber focus:text-deep-950">
        Skip to main content
      </a>
      <main id="main-content">
        <HeroLanding />
        <Suspense fallback={<div className="bg-black text-white text-center py-12">Loading...</div>}>
          <OurExpertise />
          <ServicesSection />
          <Testimonials />
          <ContactSection />
        </Suspense>
      </main>
    </div>
  );
};
