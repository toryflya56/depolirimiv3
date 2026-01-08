import React from 'react';
import { ServiceCard } from './ServiceCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { APP_ROUTES } from '@/lib/constants';
import { MOCK_SERVICES } from '@/lib/mock-data';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
    isHomePage?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ isHomePage = false }) => {
  const services = MOCK_SERVICES;
  const displayedServices = isHomePage ? services?.slice(0, 4) : services;

  return (
    <section id="services" className="py-20 md:py-28 bg-deep-900">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div className="w-full md:w-3/4 lg:w-1/2">
                <SectionHeading 
                    title="Our Services" 
                    subtitle="From classic cuts to modern styles, we offer a range of services to help you look and feel your best."
                />
            </div>
            {isHomePage && (
                <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                    <Button as="link" to={APP_ROUTES.SERVICES} variant="secondary" size="lg" className="group">
                        View All Services
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedServices?.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
      </div>
    </section>
  );
};
