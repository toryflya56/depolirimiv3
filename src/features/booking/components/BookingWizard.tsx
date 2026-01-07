import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Service, Appointment, AppointmentStatus } from '../../../types';
import { SERVICES } from '../../catalog/data';
import { Button } from '../../../components/ui/Button';
import { formatPrice, cn } from '../../../lib/utils';
import { ServiceCard } from '../../catalog/components/ServiceCard';

// LOGIC: Mock Time Slots Generator (Business Logic)
const generateTimeSlots = () => {
  return ['10:00', '11:00', '12:00', '13:30', '14:30', '15:30', '16:30', '17:30', '18:30'];
};

type BookingStep = 'service' | 'datetime' | 'details' | 'confirmation';

export const BookingWizard: React.FC = () => {
  // STATE MANAGEMENT
  const [step, setStep] = useState<BookingStep>('service');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // SCROLL TO TOP on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  // VALIDATION LOGIC
  const canAdvance = () => {
    if (step === 'service') return !!selectedService;
    if (step === 'datetime') return !!selectedDate && !!selectedTime;
    if (step === 'details') return formData.name && formData.email && formData.phone;
    return false;
  };

  const handleNext = () => {
    if (step === 'service') setStep('datetime');
    else if (step === 'datetime') setStep('details');
    else if (step === 'details') handleSubmit();
  };

  const handleBack = () => {
    if (step === 'datetime') setStep('service');
    else if (step === 'details') setStep('datetime');
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API Call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStep('confirmation');
    setIsSubmitting(false);
  };

  // --- RENDER HELPERS ---

  const renderProgress = () => {
    const steps = ['Service', 'Date & Time', 'Details', 'Done'];
    const currentIdx = ['service', 'datetime', 'details', 'confirmation'].indexOf(step);

    return (
      <div className="flex justify-between mb-12 relative max-w-2xl mx-auto">
        {/* Progress Bar Background */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full z-0" />
        
        {/* Active Progress Line */}
        <div 
          className="absolute top-1/2 left-0 h-1 bg-cyber -translate-y-1/2 rounded-full z-0 transition-all duration-500" 
          style={{ width: `${(currentIdx / 3) * 100}%` }}
        />

        {steps.map((label, idx) => (
          <div key={label} className="relative z-10 flex flex-col items-center gap-2">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border-2",
              idx <= currentIdx 
                ? "bg-deep-950 border-cyber text-cyber shadow-[0_0_10px_rgba(0,224,255,0.4)]" 
                : "bg-deep-900 border-white/10 text-gray-500"
            )}>
              {idx + 1}
            </div>
            <span className={cn(
              "text-xs uppercase tracking-wider font-medium transition-colors",
              idx <= currentIdx ? "text-white" : "text-gray-600"
            )}>
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  };

  // STEP 1: SERVICE SELECTION
  if (step === 'service') {
    return (
      <div className="animate-fade-in">
        {renderProgress()}
        <div className="text-center mb-12">
          <h2 className="text-3xl text-white font-serif mb-4">Select a Service</h2>
          <p className="text-gray-400">Choose your preferred grooming experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc) => (
            <div 
              key={svc.id}
              onClick={() => setSelectedService(svc)}
              className={cn(
                "cursor-pointer transition-all duration-300 rounded-3xl overflow-hidden border-2 relative group",
                selectedService?.id === svc.id 
                  ? "border-cyber shadow-[0_0_30px_rgba(0,224,255,0.2)] scale-105 bg-deep-900" 
                  : "border-transparent opacity-80 hover:opacity-100 hover:border-white/10 hover:bg-deep-900/50"
              )}
            >
              <div className="h-40 overflow-hidden">
                <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-bold mb-2">{svc.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-cyber font-serif font-bold">{formatPrice(svc.price)}</span>
                  <span className="text-gray-500 text-sm">{svc.durationMin} min</span>
                </div>
              </div>
              {selectedService?.id === svc.id && (
                <div className="absolute top-4 right-4 bg-cyber text-deep-950 p-1 rounded-full shadow-lg">
                  <CheckCircle size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-end">
          <Button onClick={handleNext} disabled={!selectedService} size="lg">Next Step</Button>
        </div>
      </div>
    );
  }

  // STEP 2: DATE & TIME
  if (step === 'datetime') {
    return (
      <div className="animate-fade-in">
        {renderProgress()}
        <div className="text-center mb-12">
          <h2 className="text-3xl text-white font-serif mb-4">Schedule Appointment</h2>
          <p className="text-gray-400">Availability for {selectedService?.title}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Mock Calendar Input */}
          <div className="space-y-4">
            <label className="text-white font-medium block">Select Date</label>
            <input 
              type="date" 
              className="w-full bg-deep-900 border border-white/10 p-4 rounded-xl text-white focus:border-cyber outline-none"
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Time Slots */}
          <div className="space-y-4">
            <label className="text-white font-medium block">Select Time</label>
            <div className="grid grid-cols-3 gap-3">
              {generateTimeSlots().map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={cn(
                    "py-3 rounded-lg border text-sm font-medium transition-all",
                    selectedTime === time 
                      ? "bg-cyber text-deep-950 border-cyber font-bold" 
                      : "bg-deep-900 text-gray-400 border-white/10 hover:border-white/30"
                  )}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between max-w-4xl mx-auto">
          <Button variant="ghost" onClick={handleBack} icon={<ChevronLeft size={16} />}>Back</Button>
          <Button onClick={handleNext} disabled={!selectedDate || !selectedTime} size="lg">Next Step</Button>
        </div>
      </div>
    );
  }

  // STEP 3: DETAILS
  if (step === 'details') {
    return (
      <div className="animate-fade-in">
        {renderProgress()}
        <div className="text-center mb-12">
          <h2 className="text-3xl text-white font-serif mb-4">Your Details</h2>
          <p className="text-gray-400">Finalize your booking securely.</p>
        </div>

        <div className="max-w-xl mx-auto bg-deep-900/50 p-8 rounded-3xl border border-white/5">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Full Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-deep-950 border border-white/10 rounded-xl p-4 text-white focus:border-cyber outline-none"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Phone Number</label>
              <input 
                type="tel" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-deep-950 border border-white/10 rounded-xl p-4 text-white focus:border-cyber outline-none"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Email Address</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-deep-950 border border-white/10 rounded-xl p-4 text-white focus:border-cyber outline-none"
                placeholder="john@example.com"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between max-w-xl mx-auto">
          <Button variant="ghost" onClick={handleBack} icon={<ChevronLeft size={16} />}>Back</Button>
          <Button 
            onClick={handleSubmit} 
            disabled={!canAdvance()} 
            isLoading={isSubmitting} 
            size="lg"
            className="w-full ml-4"
          >
            Confirm Booking
          </Button>
        </div>
      </div>
    );
  }

  // STEP 4: SUCCESS
  return (
    <div className="animate-fade-in text-center py-12">
      <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
        <CheckCircle size={48} className="text-green-500" />
      </div>
      <h2 className="text-4xl font-serif text-white mb-4">Booking Confirmed!</h2>
      <p className="text-gray-400 max-w-md mx-auto mb-12 text-lg">
        Thank you, {formData.name}. Your appointment for <strong>{selectedService?.title}</strong> on <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> has been secured.
      </p>
      <Button to="/" variant="primary" size="lg">Return Home</Button>
    </div>
  );
};
