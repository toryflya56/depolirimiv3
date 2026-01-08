
import React from 'react';
import { X, ShoppingBag, Calendar, Clock, Scissors } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

interface BookingSummaryProps {
  isOpen: boolean;
  onClose: () => void;
}

// --- MOCK DATA (replace with actual data later) ---
const mockBooking = {
  service: 'Precision Fade & Style',
  duration: '60 min',
  price: '$85.00',
  practitioner: 'Alex "The Alchemist"',
  date: 'Mon, Oct 28',
  time: '2:30 PM',
};
// ----------------------------------------------------


export const BookingSummary: React.FC<BookingSummaryProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* --- Overlay --- */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-deep-950/60 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* --- Sidebar Content --- */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full max-w-md bg-deep-900 border-l border-cyber/20",
          "transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* --- Header --- */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <ShoppingBag className="text-cyber" size={20} />
              <h2 className="text-xl font-serif font-bold text-white tracking-wider">
                Booking Summary
              </h2>
            </div>
            <button
              className="p-2 text-white"
              onClick={onClose}
              aria-label="Close Booking Summary"
            >
              <X size={24} />
            </button>
          </div>

          {/* --- Content (Empty State) --- */}
           {/* <div className="flex-grow flex flex-col items-center justify-center text-center p-8">
                <ShoppingBag size={48} className="text-gray-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-300">Your Cart is Empty</h3>
                <p className="text-sm text-gray-500 mt-1">Select a service to get started.</p>
           </div> */}

           {/* --- Content (With Item) --- */}
           <div className="flex-grow p-6 space-y-6 text-gray-300">
             <div className="glass p-4 rounded-lg">
                <div className='flex justify-between items-start'>
                    <div>
                        <h3 className="font-bold text-lg text-white">{mockBooking.service}</h3>
                        <p className="text-sm text-cyber">{mockBooking.practitioner}</p>
                    </div>
                    <p className="text-lg font-bold text-white">{mockBooking.price}</p>
                </div>
                <div className="border-t border-white/10 my-4" />
                <div className='space-y-3 text-sm'>
                    <div className='flex items-center gap-3'>
                        <Calendar size={16} className='text-cyber/70' />
                        <span>{mockBooking.date}</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Clock size={16} className='text-cyber/70' />
                        <span>{mockBooking.time}</span>
                    </div>
                     <div className='flex items-center gap-3'>
                        <Scissors size={16} className='text-cyber/70' />
                        <span>{mockBooking.duration}</span>
                    </div>
                </div>
             </div>
             {/* Add more items here if needed */}
           </div>


          {/* --- Footer --- */}
          <div className="px-6 py-6 border-t border-white/10">
            <div className='flex justify-between items-center mb-4 text-lg'>
                <span className='font-medium text-gray-300'>Total</span>
                <span className='font-bold text-white text-xl'>{mockBooking.price}</span>
            </div>
            <Button className="w-full justify-center" variant="primary">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};
