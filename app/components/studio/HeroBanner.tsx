import React from 'react';
import { Button } from '@/components/ui/Button';
import { APP_ROUTES } from '@/lib/constants';

interface HeroBannerProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ badge, title, subtitle }) => {

  return (
    <div className="hero-banner relative text-white text-center py-16 px-4 flex items-center justify-center min-h-[calc(100vh-150px)]">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-950/80 to-deep-950" />

      <div className="relative w-full max-w-sm p-6 space-y-4 rounded-2xl bg-black/20 border border-white/10 shadow-2xl backdrop-blur-lg">
        <div className="flex justify-center">
          <div className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-cyber border border-cyber/50 rounded-full bg-cyber/10">
            {badge}
          </div>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight text-glow" style={{ fontSize: 'clamp(2.25rem, 10vw, 3rem)' }}>
          {title}
        </h1>

        <p className="text-gray-300 max-w-xs mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col gap-3 justify-center pt-4 sm:flex-row sm:items-center sm:gap-4">
          <Button 
            as="link" 
            to={APP_ROUTES.BOOKING} 
            variant="primary" 
            size="lg"
            className="w-full sm:w-auto"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
