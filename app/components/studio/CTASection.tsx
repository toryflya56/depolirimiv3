import React from 'react';
import { Button } from '@/components/ui/Button';
import { APP_ROUTES } from '@/lib/constants';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-cyber py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-serif text-deep-900">Ready for Your Next Cut?</h2>
        <p className="text-xl text-deep-800 mt-4 max-w-2xl mx-auto">
          Book your appointment today and experience the art of barbering at its finest.
        </p>
        <Button as="link" to={APP_ROUTES.BOOKING} size="lg" className="mt-8 bg-deep-900 text-white hover:bg-deep-800">
          Book an Appointment
        </Button>
      </div>
    </section>
  );
};
