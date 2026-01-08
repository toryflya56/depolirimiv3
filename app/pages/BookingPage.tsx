import type React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { BookingProvider } from '@/hooks/useBooking';
import { BookingStepper } from '@/components/booking/BookingStepper';
import { ServiceSelection } from '@/components/booking/ServiceSelection';
import { BarberSelection } from '@/components/booking/BarberSelection';
import { DateTimeSelection } from '@/components/booking/DateTimeSelection';
import { Confirmation } from '@/components/booking/Confirmation';

const BookingPage: React.FC = () => {
  return (
    <PageLayout>
      <BookingProvider>
        <div className='container mx-auto px-4 py-16'>
          <BookingStepper>
            <ServiceSelection />
            <BarberSelection />
            <DateTimeSelection />
            <Confirmation />
          </BookingStepper>
        </div>
      </BookingProvider>
    </PageLayout>
  );
};

export default BookingPage;
