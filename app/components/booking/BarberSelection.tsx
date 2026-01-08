import React, { useState, useEffect } from 'react';
import { useBooking } from '@/hooks/useBooking';
import { Barber } from '@/models/common';
import { getBarbers } from '@/lib/api';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

interface BarberSelectionProps {
  nextStep?: () => void;
  prevStep?: () => void;
}

export const BarberSelection: React.FC<BarberSelectionProps> = ({ nextStep, prevStep }) => {
  const { booking, setBarber } = useBooking();
  const [barbers, setBarbers] = useState<Barber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBarbers = async () => {
      if (!booking.service) return;
      try {
        // This logic might need to be more complex, e.g., filtering barbers by service
        const data = await getBarbers();
        setBarbers(data);
      } catch (error) {
        console.error('Failed to fetch barbers:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBarbers();
  }, [booking.service]);

  const handleSelectBarber = (barber: Barber) => {
    setBarber(barber);
    nextStep?.();
  };

  if (loading) return <div>Loading barbers...</div>; // Replace with a proper skeleton loader

  return (
    <div className="text-center">
      <SectionHeading 
        title="Choose Your Barber"
        subtitle="Select one of our professional barbers."
      />
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {barbers.map(barber => (
          <div key={barber.id} className="bg-deep-800 p-8 rounded-lg border border-deep-700 text-center">
            <img src={barber.imageUrl} alt={barber.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-deep-700" />
            <h3 className="text-2xl font-bold font-serif text-white">{barber.name}</h3>
            <Button onClick={() => handleSelectBarber(barber)} className="mt-6 w-full">
              Select
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Button onClick={prevStep} variant="secondary">Back</Button>
      </div>
    </div>
  );
};
