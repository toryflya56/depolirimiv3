import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, Scissors, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/helpers/utils';

const steps = [
  { id: 'service', name: 'Service', icon: Scissors },
  { id: 'practitioner', name: 'Practitioner', icon: User },
  { id: 'date', name: 'Date & Time', icon: Calendar },
  { id: 'confirm', name: 'Confirmation', icon: CheckCircle },
];

const services = [
  { name: 'Classic Cut', duration: '45 min', price: '$50' },
  { name: 'Modern Fade', duration: '60 min', price: '$65' },
  { name: 'Beard Trim', duration: '30 min', price: '$30' },
  { name: 'The Full Package', duration: '90 min', price: '$90' },
];

const practitioners = [
  { name: 'Lirimi', specialty: 'Creative Director' },
  { name: 'Alex', specialty: 'Senior Stylist' },
  { name: 'Sam', specialty: 'Lead Barber' },
];

const TimeSlot: React.FC<{ time: string; isSelected: boolean; onSelect: () => void }> = ({ time, isSelected, onSelect }) => (
  <button 
    onClick={onSelect}
    className={cn(
      'px-4 py-2 rounded-lg border transition-all duration-200 w-full text-center',
      isSelected 
        ? 'bg-cyber text-deep-950 border-cyber shadow-lg' 
        : 'bg-deep-900 border-white/10 hover:border-cyber/50 hover:bg-deep-800'
    )}
  >
    {time}
  </button>
);

export const BookingWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selection, setSelection] = useState<any>({});

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  const handlePrev = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const renderStepContent = () => {
    switch (steps[currentStep].id) {
      case 'service':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map(s => (
              <button 
                key={s.name} 
                onClick={() => { setSelection({ ...selection, service: s }); handleNext(); }}
                className={cn(
                  "p-6 rounded-xl border text-left transition-all duration-200 flex items-center justify-between",
                  selection.service?.name === s.name
                    ? 'bg-cyber/10 border-cyber shadow-glow'
                    : 'bg-deep-900/50 border-white/10 hover:border-cyber/50'
                )}
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">{s.name}</h3>
                  <p className="text-sm text-gray-400">{s.duration}</p>
                </div>
                <p className="text-lg font-bold text-cyber">{s.price}</p>
              </button>
            ))}
          </div>
        );
      case 'practitioner':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {practitioners.map(p => (
              <button 
                key={p.name} 
                onClick={() => { setSelection({ ...selection, practitioner: p }); handleNext(); }}
                className={cn(
                  "p-6 rounded-xl border text-center transition-all duration-200",
                  selection.practitioner?.name === p.name
                    ? 'bg-cyber/10 border-cyber shadow-glow'
                    : 'bg-deep-900/50 border-white/10 hover:border-cyber/50'
                )}
              >
                <img src={`https://i.pravatar.cc/150?u=${p.name}`} alt={p.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-white/10"/>
                <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                <p className="text-sm text-cyber">{p.specialty}</p>
              </button>
            ))}
          </div>
        );
      case 'date':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-deep-900/50 p-4 rounded-lg border border-white/10">
              <h3 className="text-white text-lg font-semibold mb-4 text-center">Select Date</h3>
              {/* Dummy Calendar - In a real app, this would be a full calendar component */}
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d} className="text-gray-500 font-bold">{d}</div>)}
                {Array.from({ length: 30 }).map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setSelection({...selection, date: `2024-08-${i+1}`})}
                    className={cn(
                      "p-2 rounded-full aspect-square transition-colors",
                      selection.date === `2024-08-${i+1}`
                        ? 'bg-cyber text-deep-950'
                        : 'hover:bg-cyber/10 text-gray-300'
                    )}
                  >{i + 1}</button>
                ))}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-white text-lg font-semibold mb-4 text-center">Select Time</h3>
              <div className="grid grid-cols-2 gap-3">
                {['10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '4:00 PM', '5:00 PM'].map(t => (
                  <TimeSlot 
                    key={t} 
                    time={t} 
                    isSelected={selection.time === t}
                    onSelect={() => setSelection({ ...selection, time: t })}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      case 'confirm':
        return (
          <div className="text-center bg-deep-900/50 p-8 rounded-2xl border border-white/10">
            <CheckCircle className="text-cyber w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl text-white font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-gray-400 mb-6">An email confirmation has been sent.</p>
            <div className="text-left max-w-sm mx-auto space-y-3 text-gray-300">
              <p><strong className='text-white'>Service:</strong> {selection.service?.name}</p>
              <p><strong className='text-white'>Practitioner:</strong> {selection.practitioner?.name}</p>
              <p><strong className='text-white'>Date:</strong> {selection.date}</p>
              <p><strong className='text-white'>Time:</strong> {selection.time}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center z-10">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                  index <= currentStep ? 'bg-cyber border-cyber text-deep-950' : 'bg-deep-800 border-white/20 text-white'
                )}>
                  <step.icon size={20} />
                </div>
                <p className={cn(
                  "text-xs mt-2 transition-colors",
                  index <= currentStep ? 'text-white' : 'text-gray-500'
                )}>{step.name}</p>
              </div>
              {index < steps.length - 1 && (
                <div className={cn(
                  "flex-1 h-1 transition-colors duration-500 mx-2 -mb-8",
                  index < currentStep ? 'bg-cyber' : 'bg-white/10'
                )} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[300px] flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      {steps[currentStep].id !== 'confirm' &&
        <div className="flex justify-between items-center mt-8">
          <Button variant="secondary" onClick={handlePrev} disabled={currentStep === 0}>
            Back
          </Button>
          <Button 
            onClick={handleNext} 
            disabled={!selection.service || (currentStep === 1 && !selection.practitioner) || (currentStep === 2 && (!selection.date || !selection.time))}
          >
            {currentStep === steps.length - 2 ? 'Confirm Booking' : 'Next'}
          </Button>
        </div>
      }
    </div>
  );
};