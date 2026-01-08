import React from 'react';
import { HeroLanding } from '../features/studio/components/HeroLanding';
import { TrustedBrands } from '../features/studio/components/TrustedBrands';
import { ServicesSection } from '../features/catalog/components/ServicesSection';
import { Testimonials } from '../features/studio/components/Testimonials';
import { ContactSection } from '../features/studio/components/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-cyber focus:text-deep-950">
        Skip to main content
      </a>
      <main id="main-content">
        <HeroLanding />
        <ServicesSection />
        <TrustedBrands />
        <Testimonials />
        <ContactSection />
      </main>
    </div>
  );
};
