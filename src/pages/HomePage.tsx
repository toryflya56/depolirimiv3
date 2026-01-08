import React from 'react';
import { Hero } from '../features/studio/components/Hero';
import { TrustedBrands } from '../features/studio/components/TrustedBrands';
import { ServicesSection } from '../features/catalog/components/ServicesSection';
import { Testimonials } from '../features/studio/components/Testimonials';
import { ContactSection } from '../features/studio/components/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto">
      <Hero />
      <ServicesSection />
      <TrustedBrands />
      <Testimonials />
      <ContactSection />
    </div>
  );
};
