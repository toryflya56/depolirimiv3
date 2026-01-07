import React from 'react';
import { Calendar, Scissors } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { APP_ROUTES, COMPANY_INFO } from '../../../lib/constants';

export const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Welcome to Lirimi Studio"
    >
      {/* 
        LAYER 1: Background Image 
        Using a high-quality Unsplash image that conveys "Premium Barber".
        We use object-position to ensure the barber's focus is visible on mobile.
      */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503951914205-b27cf1254fd9?auto=format&fit=crop&q=80&w=1920" 
          alt="Master Barber at work in a dimly lit, premium studio" 
          className="w-full h-full object-cover object-center opacity-60"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/80 to-deep-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-950/90 via-transparent to-deep-950/90" />
      </div>

      {/* LAYER 2: Content */}
      <div className="container mx-auto px-4 z-10 relative text-center">
        
        {/* Est. Badge */}
        <div className="inline-block mb-6 animate-fade-in opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <span className="px-4 py-1.5 rounded-full border border-cyber/30 bg-cyber/5 text-cyber text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-md">
            Est. {COMPANY_INFO.estYear}
          </span>
        </div>

        {/* Main Headline (H1) */}
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tight animate-fade-in opacity-0"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          Mastery in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber via-white to-cyber bg-[length:200%_auto] animate-slide-left">
            Every Cut
          </span>
        </h1>

        {/* Subheadline */}
        <p 
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed animate-fade-in opacity-0"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          Experience the fusion of classic barbering and modern aesthetics. 
          We don't just cut hair; we sculpt your confidence in the heart of {COMPANY_INFO.location.district}.
        </p>

        {/* Call to Action Buttons */}
        <div 
          className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in opacity-0"
          style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
        >
          <Button 
            to={APP_ROUTES.booking} 
            size="lg" 
            variant="primary"
            icon={<Calendar size={20} />}
            className="w-full md:w-auto min-w-[200px]"
          >
            Book Appointment
          </Button>
          
          <Button 
            href={APP_ROUTES.services} 
            size="lg" 
            variant="secondary"
            icon={<Scissors size={20} />}
            className="w-full md:w-auto min-w-[200px]"
          >
            View Services
          </Button>
        </div>
      </div>

      {/* LAYER 3: Decorative Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block opacity-50">
        <div className="w-6 h-10 border-2 border-cyber/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-cyber rounded-full" />
        </div>
      </div>
    </section>
  );
};
