import React, { useEffect, useState } from 'react';
import { ChevronDown, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { APP_ROUTES } from '../../../lib/constants';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Entrance Animation (Delayed for smooth page load)
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to services section
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-950">
      
      {/* BACKGROUND LAYER: Gradient Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* BACKGROUND IMAGE: Barber Shop Ambiance */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1622288432454-2415494c3943?q=80&w=1974&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-950/80 via-deep-950/60 to-deep-950" />
      </div>

      {/* CONTENT LAYER */}
      <div className={`container mx-auto px-4 relative z-10 flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Glassmorphism Card */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto">
            
            <div className="inline-block bg-white/10 text-cyber text-sm font-semibold px-4 py-1 rounded-full mb-6">EST. 2024</div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
                Mastery in <span className="text-cyber">Every Cut</span>
            </h1>
            
            <p className="text-gray-300 md:text-lg max-w-md mx-auto mb-8">
                Experience the fusion of classic barbering and modern aesthetics. We don't just cut hair; we sculpt your confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  as="button" 
                  onClick={handleScrollToServices} 
                  size="lg" 
                  variant="outline"
                >
                  <span className="flex items-center gap-2">
                    View Services
                    <ArrowRight size={20} />
                  </span>
                </Button>
            </div>
        </div>
      </div>

      {/* SCROLL INDICATOR (Animated Chevron) */}
      <button
        onClick={handleScrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-cyber transition-colors animate-bounce"
        aria-label="Scroll to services section"
      >
        <ChevronDown size={32} />
      </button>

    </section>
  );
};
