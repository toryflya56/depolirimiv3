import React, { useEffect } from 'react';
import { BookingWizard } from '@/containers/BookingWizard';
import { COMPANY_INFO } from '@/lib/constants';

export const BookingPage: React.FC = () => {
  
  // SEO: Update Page Title
  useEffect(() => {
    document.title = `Book Appointment | ${COMPANY_INFO.name}`;
    // Reset scroll to top when entering the page
    window.scrollTo(0, 0);
    
    return () => {
      // Cleanup: Reset title when leaving (optional)
      document.title = `${COMPANY_INFO.name} | Premium Cuts`;
    };
  }, []);

  return (
    <main className="min-h-screen bg-deep-950 pt-20 pb-24">
      {/* Background Decor (Subtle focus spotlight) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-cyber/5 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-12 mt-8">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Secure Your Spot
          </h1>
          <div className="h-1 w-24 bg-cyber mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Select your preferred service and time. No payment required until you visit the studio.
          </p>
        </div>

        {/* Feature Injection: The Wizard */}
        <div className="bg-deep-950/50 backdrop-blur-sm border border-white/5 rounded-[2rem] p-4 md:p-8 lg:p-12 shadow-2xl max-w-5xl mx-auto">
          <BookingWizard />
        </div>

        {/* Trust Indicators (Micro-copy) */}
        <div className="text-center mt-12 space-y-2">
          <p className="text-sm text-gray-500 uppercase tracking-wider">
            Secure Booking • Instant Confirmation
          </p>
          <p className="text-xs text-gray-600">
            Cancellation Policy: Please notify us 24 hours in advance.
          </p>
        </div>

      </div>
    </main>
  );
};

export default BookingPage;