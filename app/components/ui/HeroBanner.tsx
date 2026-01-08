import React from 'react';
import { Button } from './Button';
import { APP_ROUTES } from '@/lib/constants';

interface HeroBannerProps {
    badge?: string;
    title: React.ReactNode;
    subtitle: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ badge, title, subtitle }) => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-[70vh] md:h-[90vh] flex items-center justify-center text-center text-white" style={{backgroundImage: `url('/images/hero-main.jpg')`}}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-4 z-10">
        {badge && (
          <span className="inline-block bg-cyber/10 text-cyber font-semibold px-4 py-2 rounded-full text-sm md:text-base uppercase tracking-widest mb-4">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-4 leading-tight">{title}</h1>
        <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-300 mb-8">{subtitle}</p>
        <Button as="link" to={APP_ROUTES.BOOKING} size="lg" className="animate-pulse">
            Book Your Appointment
        </Button>
      </div>
    </section>
  );
};
