import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';
import { APP_ROUTES } from '../../../lib/constants';
import { CalendarDays, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div 
      className="relative text-white text-center py-16 px-4 flex items-center justify-center min-h-[calc(100vh-120px)]"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-deep-950/80 to-deep-950"
      />

      {/* Main Content Card */}
      <div className="relative w-full max-w-sm p-6 space-y-4 rounded-2xl bg-black/20 border border-white/10 shadow-2xl backdrop-blur-lg">
        
        {/* EST. 2024 Badge */}
        <div className="flex justify-center">
          <div className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-cyber border border-cyber/50 rounded-full bg-cyber/10">
            EST. 2024
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl font-bold leading-tight text-glow">
          Mastery in <span className="text-cyber">Every</span> Cut
        </h1>

        {/* Sub-headline */}
        <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto">
          Experience the fusion of classic barbering and modern aesthetics. We don’t just cut hair; we sculpt your confidence.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 space-y-3">
          <Button as="link" to={APP_ROUTES.BOOKING} size="lg" className="w-full flex items-center justify-center gap-2">
            <CalendarDays className="h-5 w-5" />
            Book Appointment
          </Button>
          <Link to={APP_ROUTES.SERVICES} className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-300 hover:text-cyber transition-colors uppercase">
            View Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
