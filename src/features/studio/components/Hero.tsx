import React, { useEffect, useState } from 'react';
import { ChevronDown, Scissors, Award, Clock } from 'lucide-react';
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
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url(https://picsum.photos/1920/1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-950/90 via-deep-950/70 to-deep-950" />
      </div>

      {/* CONTENT LAYER */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        
        {/* Main Headline */}
        <div
          className={`transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Overline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber/10 border border-cyber/20 mb-6">
            <Scissors className="text-cyber" size={16} />
            <span className="text-cyber text-sm font-semibold tracking-wider uppercase">
              Premium Barbering Since 2024
            </span>
          </div>

          {/* H1: Primary Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Mastery in
            <br />
            <span className="text-cyber">Every Cut</span>
          </h1>

          {/* Subheadline */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Where traditional craftsmanship meets modern precision. 
            Experience grooming elevated to an art form in the heart of Soho, NYC.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              as="link"
              to={APP_ROUTES.BOOKING} 
              size="lg"
              variant="primary"
              icon={<Scissors size={20} />}
            >
              Book Appointment
            </Button>
            <Button 
              as="button"
              onClick={handleScrollToServices}
              size="lg"
              variant="outline"
            >
              Explore Services
            </Button>
          </div>

          {/* Trust Indicators (Social Proof) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            
            {/* Indicator 1: Experience */}
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyber/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-cyber/10 flex items-center justify-center">
                <Award className="text-cyber" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">15+</p>
                <p className="text-sm text-gray-400">Years Combined Experience</p>
              </div>
            </div>

            {/* Indicator 2: Clients */}
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyber/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-cyber/10 flex items-center justify-center">
                <Scissors className="text-cyber" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">5,000+</p>
                <p className="text-sm text-gray-400">Satisfied Clients</p>
              </div>
            </div>

            {/* Indicator 3: Response Time */}
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyber/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-cyber/10 flex items-center justify-center">
                <Clock className="text-cyber" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
              </div>
            </div>

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
