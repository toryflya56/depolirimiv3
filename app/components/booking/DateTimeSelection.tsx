import React, { useState } from 'react';
import { useBooking } from '@/hooks/useBooking';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
// You will need a Calendar and Time Picker component
// For simplicity, let's use a placeholder for now.

interface DateTimeSelectionProps {
  nextStep?: () => void;
  prevStep?: () => void;
}

export const DateTimeSelection: React.FC<DateTimeSelectionProps> = ({ nextStep, prevStep }) => {
  const { booking, setDateTime } = useBooking();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      const [hours, minutes] = selectedTime.split(':').map(Number);
      const finalDateTime = new Date(selectedDate);
      finalDateTime.setHours(hours, minutes);
      setDateTime(finalDateTime);
      nextStep?.();
    } else {
      alert('Please select a date and time.');
    }
  };

  return (
    <div className="text-center">
      <SectionHeading 
        title="Select Date & Time"
        subtitle={`You're booking with ${booking.barber?.name} for a ${booking.service?.name}.`}
      />
      <div className="mt-12 max-w-lg mx-auto">
        {/* Placeholder for Calendar - you would replace this with a real calendar component */}
        <div className="bg-deep-800 p-8 rounded-lg border border-deep-700 mb-8">
          <p className="text-white">[Calendar Component Placeholder]</p>
          <input type="date" onChange={(e) => setSelectedDate(new Date(e.target.value))} className="bg-deep-700 text-white p-2 rounded w-full mt-4"/>
        </div>
        {/* Placeholder for Time Slots */}
        <div className="bg-deep-800 p-8 rounded-lg border border-deep-700">
          <p className="text-white mb-4">[Time Slot Picker Placeholder]</p>
          <div className="grid grid-cols-3 gap-4">
            {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00'].map(time => (
              <Button 
                key={time} 
                variant={selectedTime === time ? 'primary' : 'secondary'}
                onClick={() => setSelectedTime(time)}>
                {time}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <Button onClick={prevStep} variant="secondary">Back</Button>
        <Button onClick={handleConfirm} disabled={!selectedDate || !selectedTime}>Confirm</Button>
      </div>
    </div>
  );
};
