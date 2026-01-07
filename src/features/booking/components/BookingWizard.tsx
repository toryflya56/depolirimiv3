import React, { useState } from 'react';
import { Calendar, Clock, User, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { formatCurrency, isValidEmail, isValidPhone, sanitizeHTML } from '../../../lib/utils';
import { cn } from '../../../lib/utils';

// ==========================================
// TYPE DEFINITIONS
// ==========================================

interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
}

interface BookingData {
  serviceId: string | null;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  notes: string;
}

type WizardStep = 1 | 2 | 3 | 4;

// ==========================================
// MOCK DATA
// ==========================================

const SERVICES: Service[] = [
  { id: 'signature-cut', name: 'Signature Cut', duration: 45, price: 65 },
  { id: 'royal-shave', name: 'Royal Shave', duration: 40, price: 55 },
  { id: 'beard-sculpting', name: 'Beard Sculpting', duration: 30, price: 40 },
  { id: 'executive-package', name: 'Executive Package', duration: 90, price: 140 }
];

// Generate next 14 days of available dates
const generateAvailableDates = (): string[] => {
  const dates: string[] = [];
  const today = new Date();
  
  for (let i = 1; i <= 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date.toISOString().split('T')[0]);
  }
  
  return dates;
};

// Generate time slots (10 AM - 7 PM, 30-min intervals)
const generateTimeSlots = (): string[] => {
  const slots: string[] = [];
  for (let hour = 10; hour <= 19; hour++) {
    for (let minute of [0, 30]) {
      if (hour === 19 && minute === 30) break; // Stop at 7:00 PM
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      slots.push(time);
    }
  }
  return slots;
};

const AVAILABLE_DATES = generateAvailableDates();
const TIME_SLOTS = generateTimeSlots();

// ==========================================
// COMPONENT
// ==========================================

export const BookingWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<WizardStep>(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    serviceId: null,
    date: '',
    time: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ==========================================
  // VALIDATION
  // ==========================================

  const validateStep = (step: WizardStep): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1 && !bookingData.serviceId) {
      newErrors.service = 'Please select a service';
    }

    if (step === 2) {
      if (!bookingData.date) newErrors.date = 'Please select a date';
      if (!bookingData.time) newErrors.time = 'Please select a time';
    }

    if (step === 3) {
      if (!bookingData.customerName.trim()) {
        newErrors.name = 'Name is required';
      }
      if (!bookingData.customerEmail.trim()) {
        newErrors.email = 'Email is required';
      } else if (!isValidEmail(bookingData.customerEmail)) {
        newErrors.email = 'Invalid email format';
      }
      if (!bookingData.customerPhone.trim()) {
        newErrors.phone = 'Phone is required';
      } else if (!isValidPhone(bookingData.customerPhone)) {
        newErrors.phone = 'Invalid phone format';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ==========================================
  // NAVIGATION HANDLERS
  // ==========================================

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4) as WizardStep);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1) as WizardStep);
    setErrors({});
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    try {
      // ENTERPRISE TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Booking submitted:', {
        ...bookingData,
        customerName: sanitizeHTML(bookingData.customerName),
        customerEmail: sanitizeHTML(bookingData.customerEmail),
        customerPhone: sanitizeHTML(bookingData.customerPhone),
        notes: sanitizeHTML(bookingData.notes)
      });

      setCurrentStep(4);
    } catch (error) {
      console.error('Booking error:', error);
      setErrors({ submit: 'Booking failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==========================================
  // HELPERS
  // ==========================================

  const selectedService = SERVICES.find(s => s.id === bookingData.serviceId);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = (timeString: string): string => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  // ==========================================
  // STEP INDICATORS
  // ==========================================

  const steps = [
    { num: 1, label: 'Service', icon: Calendar },
    { num: 2, label: 'Date & Time', icon: Clock },
    { num: 3, label: 'Details', icon: User },
    { num: 4, label: 'Confirm', icon: CheckCircle }
  ];

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="w-full">
      
      {/* Progress Indicator */}
      <div className="mb-12">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = currentStep === step.num;
            const isCompleted = currentStep > step.num;
            
            return (
              <React.Fragment key={step.num}>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={cn(
                      'w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all',
                      isActive && 'border-cyber bg-cyber/10 text-cyber scale-110',
                      isCompleted && 'border-cyber bg-cyber text-deep-950',
                      !isActive && !isCompleted && 'border-white/20 text-gray-500'
                    )}
                  >
                    <Icon size={20} />
                  </div>
                  <span
                    className={cn(
                      'text-xs font-semibold transition-colors',
                      (isActive || isCompleted) ? 'text-cyber' : 'text-gray-500'
                    )}
                  >
                    {step.label}
                  </span>
                </div>
                
                {idx < steps.length - 1 && (
                  <div
                    className={cn(
                      'flex-1 h-0.5 mx-2 transition-colors',
                      currentStep > step.num ? 'bg-cyber' : 'bg-white/10'
                    )}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[400px]">
        
        {/* STEP 1: Service Selection */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Choose Your Service
              </h3>
              <p className="text-gray-400">Select the experience you'd like</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {SERVICES.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    setBookingData(prev => ({ ...prev, serviceId: service.id }));
                    setErrors({});
                  }}
                  className={cn(
                    'text-left p-6 rounded-xl border-2 transition-all hover:scale-105',
                    bookingData.serviceId === service.id
                      ? 'border-cyber bg-cyber/10'
                      : 'border-white/10 hover:border-white/30'
                  )}
                >
                  <h4 className="text-white font-bold text-lg mb-2">{service.name}</h4>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{service.duration} minutes</span>
                    <span className="text-cyber text-xl font-bold">
                      {formatCurrency(service.price)}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {errors.service && (
              <p className="text-red-400 text-sm text-center">{errors.service}</p>
            )}
          </div>
        )}

        {/* STEP 2: Date & Time Selection */}
        {currentStep === 2 && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Pick Your Slot
              </h3>
              <p className="text-gray-400">Choose a date and time that works for you</p>
            </div>

            {/* Date Picker */}
            <div>
              <label className="block text-white font-semibold mb-4">Select Date</label>
              <div className="grid grid-cols-7 gap-2">
                {AVAILABLE_DATES.map((date) => {
                  const dateObj = new Date(date);
                  const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
                  const dayNum = dateObj.getDate();
                  
                  return (
                    <button
                      key={date}
                      onClick={() => {
                        setBookingData(prev => ({ ...prev, date }));
                        setErrors(prev => ({ ...prev, date: '' }));
                      }}
                      className={cn(
                        'p-3 rounded-lg border transition-all hover:scale-105',
                        bookingData.date === date
                          ? 'border-cyber bg-cyber/10 text-cyber'
                          : 'border-white/10 text-gray-400 hover:border-white/30'
                      )}
                    >
                      <div className="text-xs">{dayName}</div>
                      <div className="text-lg font-bold">{dayNum}</div>
                    </button>
                  );
                })}
              </div>
              {errors.date && (
                <p className="text-red-400 text-sm mt-2">{errors.date}</p>
              )}
            </div>

            {/* Time Picker */}
            <div>
              <label className="block text-white font-semibold mb-4">Select Time</label>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-2 max-h-64 overflow-y-auto custom-scrollbar">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    onClick={() => {
                      setBookingData(prev => ({ ...prev, time }));
                      setErrors(prev => ({ ...prev, time: '' }));
                    }}
                    className={cn(
                      'p-3 rounded-lg border text-sm font-semibold transition-all hover:scale-105',
                      bookingData.time === time
                        ? 'border-cyber bg-cyber/10 text-cyber'
                        : 'border-white/10 text-gray-400 hover:border-white/30'
                    )}
                  >
                    {formatTime(time)}
                  </button>
                ))}
              </div>
              {errors.time && (
                <p className="text-red-400 text-sm mt-2">{errors.time}</p>
              )}
            </div>
          </div>
        )}

        {/* STEP 3: Customer Details */}
        {currentStep === 3 && (
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                Your Information
              </h3>
              <p className="text-gray-400">We'll use this to confirm your appointment</p>
            </div>

            <div>
              <label htmlFor="customerName" className="block text-white font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="customerName"
                value={bookingData.customerName}
                onChange={(e) => {
                  setBookingData(prev => ({ ...prev, customerName: e.target.value }));
                  setErrors(prev => ({ ...prev, name: '' }));
                }}
                className={cn(
                  'w-full px-4 py-3 bg-deep-900 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber',
                  errors.name ? 'border-red-500' : 'border-white/10'
                )}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="customerEmail" className="block text-white font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="customerEmail"
                value={bookingData.customerEmail}
                onChange={(e) => {
                  setBookingData(prev => ({ ...prev, customerEmail: e.target.value }));
                  setErrors(prev => ({ ...prev, email: '' }));
                }}
                className={cn(
                  'w-full px-4 py-3 bg-deep-900 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber',
                  errors.email ? 'border-red-500' : 'border-white/10'
                )}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="customerPhone" className="block text-white font-semibold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="customerPhone"
                value={bookingData.customerPhone}
                onChange={(e) => {
                  setBookingData(prev => ({ ...prev, customerPhone: e.target.value }));
                  setErrors(prev => ({ ...prev, phone: '' }));
                }}
                className={cn(
                  'w-full px-4 py-3 bg-deep-900 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber',
                  errors.phone ? 'border-red-500' : 'border-white/10'
                )}
                placeholder="(555) 123-4567"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="notes" className="block text-white font-semibold mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                id="notes"
                value={bookingData.notes}
                onChange={(e) => setBookingData(prev => ({ ...prev, notes: e.target.value }))}
                rows={4}
                className="w-full px-4 py-3 bg-deep-900 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber resize-none"
                placeholder="Any specific requests or preferences..."
              />
            </div>
          </div>
        )}

        {/* STEP 4: Confirmation */}
        {currentStep === 4 && (
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-cyber/10 border-2 border-cyber rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="text-cyber" size={40} />
            </div>

            <div>
              <h3 className="text-3xl font-serif font-bold text-white mb-4">
                Booking Confirmed!
              </h3>
              <p className="text-gray-400 text-lg">
                We've sent a confirmation email to {bookingData.customerEmail}
              </p>
            </div>

            <div className="bg-deep-900/50 border border-white/10 rounded-2xl p-8 text-left space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-gray-400">Service:</span>
                <span className="text-white font-bold">{selectedService?.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-gray-400">Date:</span>
                <span className="text-white font-bold">{formatDate(bookingData.date)}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-gray-400">Time:</span>
                <span className="text-white font-bold">{formatTime(bookingData.time)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Price:</span>
                <span className="text-cyber text-2xl font-bold">
                  {formatCurrency(selectedService?.price || 0)}
                </span>
              </div>
            </div>

            <p className="text-gray-500 text-sm">
              Please arrive 5 minutes early. Cancellations must be made 24 hours in advance.
            </p>

            <Button
              as="button"
              onClick={() => window.location.hash = '/'}
              variant="outline"
            >
              Return to Home
            </Button>
          </div>
        )}

      </div>

      {/* Navigation Buttons */}
      {currentStep < 4 && (
        <div className="flex justify-between mt-12 pt-8 border-t border-white/10">
          <Button
            as="button"
            onClick={handleBack}
            variant="ghost"
            disabled={currentStep === 1}
            icon={<ArrowLeft size={20} />}
            iconPosition="left"
          >
            Back
          </Button>

          {currentStep < 3 ? (
            <Button
              as="button"
              onClick={handleNext}
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Continue
            </Button>
          ) : (
            <Button
              as="button"
              onClick={handleSubmit}
              loading={isSubmitting}
              icon={<CheckCircle size={20} />}
              iconPosition="right"
            >
              Confirm Booking
            </Button>
          )}
        </div>
      )}

    </div>
  );
};
