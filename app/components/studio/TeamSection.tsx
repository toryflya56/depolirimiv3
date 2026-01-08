import React from 'react';
import { BarberCard } from './BarberCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MOCK_BARBERS } from '@/lib/mock-data';

interface TeamSectionProps {
  isHomePage?: boolean;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ isHomePage = false }) => {
  const barbers = MOCK_BARBERS;
  const displayedBarbers = isHomePage ? barbers?.slice(0, 3) : barbers;

  return (
    <section className="py-16 md:py-24 bg-deep-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Talented Barbers" 
          subtitle="Meet the artists behind the blades. Our barbers are skilled professionals dedicated to the craft of men’s grooming."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {displayedBarbers?.map((barber) => (
            <BarberCard key={barber.id} barber={barber} />
          ))}
        </div>
      </div>
    </section>
  );
};
