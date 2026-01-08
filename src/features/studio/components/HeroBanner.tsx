import React, { useState } from 'react';
import { Button } from '../../../components/ui/Button';
import { APP_ROUTES } from '../../../lib/constants';
import { CalendarDays, ArrowRight } from 'lucide-react';

interface HeroBannerProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  backgroundImage: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ badge, title, subtitle, backgroundImage }) => {
  const [isBooking, setIsBooking] = useState(false);

  const handleBookingClick = () => {
    setIsBooking(true);
    // Simulate a network request
    setTimeout(() => {
      // After the action, you might navigate or reset state
      setIsBooking(false);
    }, 2000); // Example delay
  };

  return (
    <div 
      className="relative text-white text-center py-16 px-4 flex items-center justify-center min-h-[calc(100vh-150px)]"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-deep-950/80 to-deep-950" />

      <div className="relative w-full max-w-sm p-6 space-y-4 rounded-2xl bg-black/20 border border-white/10 shadow-2xl backdrop-blur-lg">
        <div className="flex justify-center">
          <div className="inline-block px-3 py-1 text-[10px] font-semibold tracking-widest text-cyber border border-cyber/50 rounded-xl bg-cyber/10">
            {badge}
          </div>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight text-glow" style={{ fontSize: 'clamp(2.25rem, 10vw, 3rem)' }}>
          {title}
        </h1>

        <p className="text-gray-300 max-w-xs mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col gap-3 justify-center pt-4 sm:flex-row sm:items-center sm:gap-4">
          <Button 
            as="link" 
            to={APP_ROUTES.BOOKING} 
            variant="primary" 
            size="lg" // Use 'lg' for a larger primary button
            className="w-full sm:w-auto"
            onClick={handleBookingClick}
            loading={isBooking}
            icon={<CalendarDays size={20} />}
          >
            Book Appointment
          </Button>
          <Button 
            as="link" 
            to={APP_ROUTES.SERVICES} 
            variant="outline" // Ghost/outline style for secondary action
            size="md"
            className="w-full sm:w-auto"
            iconPosition="right"
            icon={<ArrowRight size={16} />}
          >
            View Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
