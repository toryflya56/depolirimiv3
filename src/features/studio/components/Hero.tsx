import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';
import { APP_ROUTES } from '../../../lib/constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative text-white text-center py-16 px-4 flex items-center justify-center min-h-[calc(100vh-120px)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
      />
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            Book Appointment
          </Button>
          <Link to={APP_ROUTES.SERVICES} className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-300 hover:text-cyber transition-colors uppercase">
            View Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
