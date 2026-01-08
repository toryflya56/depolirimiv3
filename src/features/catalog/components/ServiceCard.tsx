import React from 'react';
import { Service } from '../../../types';
import { formatCurrency, cn } from '../../../lib/utils';
import { Button } from '../../../components/ui/Button';
import { Calendar, Clock } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className }) => {
  return (
    <div
      className={cn(
        'group relative overflow-hidden',
        'transition-all duration-500 ease-in-out',
        className
      )}
    >
      {/* Image and Overlay */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={service.image}
          alt={`Service: ${service.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-900 via-deep-900/70 to-transparent" />
      </div>

      {/* Content Area */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        
        {/* Visible Content */}
        <div>
        <h3 
          className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-200/80 mb-6 transition-all duration-700 text-glow"
          style={{
            textShadow: 'var(--cyan-glow-subtle)',
          }}
        >
          {service.title}
        </h3>
          <p className="text-white/70 mt-2 leading-relaxed h-[3.25rem]">
            {service.description}
          </p>
        </div>

        {/* Hover-reveal Content */}
        <div className="mt-6 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
          <div className="flex items-center justify-between border-t border-cyber/30 pt-4">
            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-cyber" />
              <span className="text-sm text-white/80 font-medium">{service.durationMin} Min</span>
            </div>
            <span className="text-2xl font-serif text-cyber font-bold">
              {formatCurrency(service.price)}
            </span>
          </div>

          <Button
            as="link"
            to="/booking"
            variant="primary"
            className="w-full mt-5"
            icon={<Calendar size={16} />}
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};
