import type React from 'react';
import { Button } from '@/components/ui/Button';
import { APP_ROUTES } from '@/lib/constants';

export const CTASection: React.FC = () => {
  return (
    <section
      className='relative bg-cover bg-center py-20 md:py-28 text-center text-white'
      style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
    >
      <div className='absolute inset-0 bg-deep-900/80' />
      <div className='relative container mx-auto px-4'>
        <h2 className='text-4xl md:text-5xl font-bold font-serif text-white'>Ready for Your Next Cut?</h2>
        <p className='text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto'>
          Book your appointment today and experience the art of barbering at its finest.
        </p>
        <Button as='link' to={APP_ROUTES.BOOKING} size='lg' variant='primary' className='mt-8'>
          Book an Appointment
        </Button>
      </div>
    </section>
  );
};
