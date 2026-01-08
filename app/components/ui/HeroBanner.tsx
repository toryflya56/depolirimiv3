import type React from 'react';
import { Button } from './Button';
import { APP_ROUTES } from '@/lib/constants';
import { Calendar, ArrowRight } from 'lucide-react';

interface HeroBannerProps {
  badge?: string;
  title: React.ReactNode;
  subtitle: string;
  imageUrl?: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ badge, title, subtitle, imageUrl }) => {
  return (
    <section className='relative bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-[80vh] flex items-center justify-center text-center text-white py-20 md:py-28'>
      <div className='absolute inset-0 bg-black/70' />
      <div className='relative container mx-auto px-4 z-10 flex flex-col items-center'>
        {badge && (
          <span className='inline-block bg-cyber/10 text-cyber font-semibold px-4 py-2 rounded-full text-sm md:text-base uppercase tracking-widest mb-6'>
            {badge}
          </span>
        )}
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-4 leading-tight max-w-4xl'>{title}</h1>
        <p className='text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-300 mb-10'>{subtitle}</p>
        <div className='flex flex-col sm:flex-row gap-4 w-full max-w-sm mx-auto'>
          <Button as='link' to={APP_ROUTES.BOOKING} size='lg' className='w-full'>
            Book Appointment <Calendar className='ml-2 h-5 w-5' />
          </Button>
          <Button as='link' to={APP_ROUTES.SERVICES} variant='ghost' size='lg' className='w-full'>
            View Services <ArrowRight className='ml-2 h-5 w-5' />
          </Button>
        </div>
      </div>
    </section>
  );
};
