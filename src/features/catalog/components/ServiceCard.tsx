import React from 'react';
import { Service } from '../../../types';
import { formatPrice, cn } from '../../../lib/utils';
import { Button } from '../../../components/ui/Button';
import { Calendar } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className }) => {
  return (
    <div 
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl",
        "bg-deep-900/40 border border-white/5 backdrop-blur-sm", // Glassmorphism base
        "hover:border-cyber/30 hover:shadow-[0_0_30px_rgba(0,224,255,0.1)]", // Hover glow
        "transition-all duration-500 ease-out",
        className
      )}
    >
      {/* 
        SECTION 1: Header (Title & Price)
        - Uses flexbox for alignment
        - Price uses the shared utility formatter
      */}
      <div className="p-6 pb-4 z-10 relative">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-cyber transition-colors duration-300 leading-tight">
            {service.title}
          </h3>
          <div className="flex flex-col items-end">
            <span className="text-xl font-serif text-cyber font-bold drop-shadow-[0_0_5px_rgba(0,224,255,0.5)]">
              {formatPrice(service.price)}
            </span>
            <span className="text-xs text-gray-500 font-medium tracking-wider uppercase mt-1">
              {service.durationMin} Min
            </span>
          </div>
        </div>
      </div>

      {/* 
        SECTION 2: Visual (Image)
        - Absolute positioning for the background effect
        - Scale animation on hover
      */}
      <div className="relative h-64 w-full overflow-hidden mt-2">
        <div className="absolute inset-0 bg-gradient-to-t from-deep-950 via-deep-950/20 to-transparent z-10" />
        <img 
          src={service.image} 
          alt={`Barber service: ${service.title}`}
          loading="lazy"
          className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </div>

      {/* 
        SECTION 3: Details & Action
        - Description sits on top of the image gradient
        - Button links to the booking page
      */}
      <div className="relative z-20 px-6 pb-6 -mt-12">
        <p className="text-gray-300 text-sm leading-relaxed mb-6 border-l-2 border-cyber/50 pl-3 line-clamp-3">
          {service.description}
        </p>
        
        <Button 
          as="link" 
          to="/booking" 
          variant="outline" 
          className="w-full group-hover:bg-cyber group-hover:text-deep-950 border-white/10 group-hover:border-cyber"
          icon={<Calendar size={16} />}
        >
          Book Appointment
        </Button>
      </div>
    </div>
  );
};
