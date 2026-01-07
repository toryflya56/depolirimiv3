import React from 'react';
import { SERVICES } from '../data';
import { ServiceCard } from './ServiceCard';

export const ServicesSection: React.FC = () => {
  return (
    <section 
      id="services" 
      className="py-24 relative bg-deep-950 overflow-hidden"
      aria-label="Service Catalog"
    >
      {/* Background Decor (Subtle Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal-section">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight">
            Our Expertise
          </h2>
          <div className="h-1.5 w-24 bg-cyber mx-auto rounded-full shadow-[0_0_15px_rgba(0,224,255,0.5)]" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Experience the fusion of classic barbering traditions and modern precision. 
            Select a service to begin your transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className="reveal-section"
              style={{ transitionDelay: `${index * 100}ms` }} // Staggered animation
            >
              <ServiceCard 
                service={service} 
                className="h-full" // Ensure all cards stretch to same height
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
