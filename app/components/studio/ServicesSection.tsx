import React from 'react';
import { ServiceCard } from './ServiceCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { APP_ROUTES } from '@/lib/constants';
import { MOCK_SERVICES } from '@/lib/mock-data';

interface ServicesSectionProps {
    isHomePage?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ isHomePage = false }) => {
  const services = MOCK_SERVICES;
  const displayedServices = isHomePage ? services?.slice(0, 4) : services;

  return (
    <section id="services" className="py-16 md:py-24 bg-deep-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Services" 
          subtitle="From classic cuts to modern styles, we offer a range of services to help you look and feel your best."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {displayedServices?.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        {isHomePage && (
            <div className="text-center mt-12">
                <Button as="link" to={APP_ROUTES.SERVICES} variant="secondary" size="lg">
                    View All Services
                </Button>
            </div>
        )}
      </div>
    </section>
  );
};
