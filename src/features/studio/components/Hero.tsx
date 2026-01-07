import React, { useEffect, useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { APP_ROUTES } from '../../../lib/constants';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Entrance Animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-950">
      
      {/* BACKGROUND LAYER: Subtle Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber/5 rounded-full blur-[150px] animate-pulse" />
      </div>

      {/* CONTENT LAYER */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        
        <div
          className={`transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Overline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber/10 border border-cyber/20 mb-6">
            <span className="text-cyber text-sm font-semibold tracking-wider uppercase">
              EST. 2024
            </span>
          </div>

          {/* H1: Primary Headline */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Mastery in Every Cut
          </h1>

          {/* Subheadline */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Experience the fusion of classic barbering and modern aesthetics. We don’t just cut hair; we sculpt your confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              as="link"
              to={APP_ROUTES.BOOKING} 
              size="lg"
              variant="primary"
              icon={<Calendar size={20} />}
            >
              Book Appointment
            </Button>
            <Button 
              as="link"
              to={APP_ROUTES.SERVICES}
              size="lg"
              variant="ghost"
              className="text-gray-300 hover:text-white"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
