import React, { useEffect, useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { APP_ROUTES } from '../../../lib/constants';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-950">
      
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1589382104279-8a7184ade0c0?auto=format&fit=crop&q=80&w=1974)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Layer */}
      <div className={`container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">
          Mastery in Every Cut
        </h1>
        
        <p className="text-gray-300 md:text-lg max-w-lg mx-auto mb-8">
          Experience the fusion of classic barbering and modern aesthetics. We don't just cut hair; we sculpt your confidence.
        </p>

        <div className="w-24 h-px bg-white/30 mb-8"></div>

        <div className="flex flex-col gap-4 w-full max-w-xs">
            <Button 
              as="link" 
              to={APP_ROUTES.BOOKING} 
              size="lg" 
              variant="primary" 
              icon={<Calendar size={20} />}
              fullWidth
            >
                Book Appointment
            </Button>
            <Button 
              as="button" 
              onClick={handleScrollToServices} 
              size="lg" 
              variant="secondary"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              fullWidth
            >
              View Services
            </Button>
        </div>
      </div>
    </section>
  );
};
