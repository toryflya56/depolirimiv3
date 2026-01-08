import type React from 'react';
import { BarberCard } from './BarberCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MOCK_BARBERS } from '@/lib/mock-data';
import { Button } from '@/components/ui/Button';
import { APP_ROUTES } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

interface TeamSectionProps {
  isHomePage?: boolean;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ isHomePage = false }) => {
  const barbers = MOCK_BARBERS;
  const displayedBarbers = isHomePage ? barbers?.slice(0, 3) : barbers;

  return (
    <section className='py-20 md:py-28 bg-deep-950'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-16'>
          <div className='w-full md:w-3/4 lg:w-1/2'>
            <SectionHeading
              title='Our Talented Barbers'
              subtitle='Meet the artists behind the blades. Our barbers are skilled professionals dedicated to the craft of men’s grooming.'
            />
          </div>
          {isHomePage && (
            <div className='mt-4 md:mt-0 md:ml-6 flex-shrink-0'>
              <Button as='link' to={APP_ROUTES.BARBERS} variant='secondary' size='lg' className='group'>
                Meet The Team
                <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
              </Button>
            </div>
          )}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {displayedBarbers?.map((barber) => (
            <BarberCard key={barber.id} barber={barber} />
          ))}
        </div>
      </div>
    </section>
  );
};
