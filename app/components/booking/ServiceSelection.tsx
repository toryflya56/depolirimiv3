import type React from 'react';
import { useState, useEffect } from 'react';
import { useBooking } from '@/hooks/useBooking';
import { type Service } from '@/models/common';
import { getServices } from '@/lib/api';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

interface ServiceSelectionProps {
  nextStep?: () => void;
}

export const ServiceSelection: React.FC<ServiceSelectionProps> = ({ nextStep }) => {
  const { setService } = useBooking();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.error('Failed to fetch services:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const handleSelectService = (service: Service) => {
    setService(service);
    nextStep?.();
  };

  if (loading) return <div>Loading services...</div>; // Replace with a proper skeleton loader

  return (
    <div className='text-center'>
      <SectionHeading title='Choose Your Service' subtitle='Select from our range of expert services.' />
      <div className='grid md:grid-cols-3 gap-8 mt-12'>
        {services.map((service) => (
          <div key={service.id} className='bg-deep-800 p-8 rounded-lg border border-deep-700 text-center'>
            <h3 className='text-2xl font-bold font-serif text-white'>{service.name}</h3>
            <p className='text-gray-400 mt-2'>{service.duration} min</p>
            <p className='text-3xl font-bold text-cyber mt-4'>${service.price}</p>
            <Button onClick={() => handleSelectService(service)} className='mt-6 w-full'>
              Select
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
