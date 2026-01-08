import type React from 'react';
import { useBooking } from '@/hooks/useBooking';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

interface ConfirmationProps {
  prevStep?: () => void;
}

export const Confirmation: React.FC<ConfirmationProps> = ({ prevStep }) => {
  const { booking, resetBooking } = useBooking();

  const handleConfirmBooking = () => {
    // Here you would typically make an API call to save the booking
    console.log('Booking confirmed:', booking);
    alert('Booking successful! A confirmation has been sent to your email.');
    resetBooking();
    // Maybe redirect to a success page or home
  };

  if (!booking.service || !booking.barber || !booking.dateTime) {
    return (
      <div className='text-center'>
        <p>Booking details are incomplete. Please start over.</p>
        <Button onClick={resetBooking} className='mt-4'>
          Start Over
        </Button>
      </div>
    );
  }

  return (
    <div className='text-center max-w-lg mx-auto'>
      <SectionHeading title='Confirm Your Booking' subtitle='Please review your booking details below.' />
      <div className='bg-deep-800 p-8 rounded-lg border border-deep-700 mt-12 text-left space-y-4'>
        <div>
          <p className='text-gray-400'>Service</p>
          <p className='text-white text-xl font-semibold'>{booking.service.name}</p>
        </div>
        <div>
          <p className='text-gray-400'>Barber</p>
          <p className='text-white text-xl font-semibold'>{booking.barber.name}</p>
        </div>
        <div>
          <p className='text-gray-400'>Date & Time</p>
          <p className='text-white text-xl font-semibold'>{booking.dateTime.toLocaleString()}</p>
        </div>
        <div>
          <p className='text-gray-400'>Price</p>
          <p className='text-white text-2xl font-bold text-cyber'>${booking.service.price}</p>
        </div>
      </div>
      <div className='mt-8 flex justify-center gap-4'>
        <Button onClick={prevStep} variant='secondary'>
          Back
        </Button>
        <Button onClick={handleConfirmBooking}>Confirm & Book</Button>
      </div>
    </div>
  );
};
