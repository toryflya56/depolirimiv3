import React, { useState } from 'react';

interface BookingStepperProps {
  children: React.ReactElement[];
}

export const BookingStepper: React.FC<BookingStepperProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, children.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const activeComponent = React.cloneElement(children[currentStep], {
    nextStep,
    prevStep,
  });

  return (
    <div>
      {/* You might want to add a visual step indicator here */}
      {activeComponent}
    </div>
  );
};
