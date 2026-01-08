import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scissors, Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '../ui/Button';
import { APP_ROUTES } from '../../lib/constants';
import { cn } from '../../lib/utils';
import { BookingSummary } from './BookingSummary'; // Import the new BookingSummary component

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingSummaryOpen, setIsBookingSummaryOpen] = useState(false); // Add state for the new sidebar
  const location = useLocation();

  useEffect(() => {
    // Close both sidebars on route change
    setIsMobileMenuOpen(false);
    setIsBookingSummaryOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: APP_ROUTES.HOME },
    { name: 'Services', path: APP_ROUTES.SERVICES },
    { name: 'Contact', path: APP_ROUTES.CONTACT },
  ];

  return (
    <>
      {/* ==========================================
          HEADER
      ========================================== */}
      <header
        className={cn(
          "fixed top-4 z-30 left-4 right-4",
          "max-w-md mx-auto",
          "border border-white/10 rounded-2xl",
          "bg-deep-950/80 backdrop-blur-lg",
          "py-2"
        )}
      >
        <div className="mx-auto px-4 flex items-center justify-between">

          {/* --- Mobile Header --- */}
          <div className="grid grid-cols-3 items-center w-full md:hidden">
            <button
              className="p-2 text-white justify-self-start"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Toggle Navigation Menu"
            >
              <Menu size={24} />
            </button>
            
            <Link to={APP_ROUTES.HOME} className="flex items-center gap-1.5 justify-self-center">
              <Scissors className="text-cyber" size={18} />
              <span className="text-lg font-serif font-bold text-white tracking-wider">
                LIRIMI
              </span>
            </Link>

            <button 
              className="p-2 text-white justify-self-end" 
              onClick={() => setIsBookingSummaryOpen(true)} // Open the booking summary
            >
              <ShoppingBag size={24} />
            </button>
          </div>

          {/* --- Desktop Header --- */}
          <div className="hidden md:flex items-center justify-between w-full">
            <Link
              to={APP_ROUTES.HOME}
              className="flex items-center gap-3 group"
              aria-label="Lirimi Studio Home"
            >
              <Scissors className="text-cyber transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" size={28} />
              <span className="text-2xl font-serif font-bold text-white tracking-wider">
                LIRIMI
              </span>
            </Link>
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.path} className="text-sm font-medium text-gray-300 hover:text-cyber transition-colors tracking-wide uppercase">
                  {link.name}
                </a>
              ))}
              <div className="h-6 w-px bg-white/10 mx-2" />
              <Button as="link" to={APP_ROUTES.BOOKING} size="sm" variant="outline">
                Book Now
              </Button>
              <button 
                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setIsBookingSummaryOpen(true)} // Open the booking summary
              >
                <ShoppingBag size={20} />
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* ==========================================
          MOBILE NAV SIDEBAR (Left)
      ========================================== */}
      
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-deep-950/60 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-72 bg-deep-900 border-r border-cyber/20",
          "transform transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <Link to={APP_ROUTES.HOME} className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              <Scissors className="text-cyber" size={20} />
              <span className="text-xl font-serif font-bold text-white tracking-wider">
                LIRIMI
              </span>
            </Link>
            <button
              className="p-2 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Navigation Menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-grow px-6 py-8 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-lg font-medium text-gray-300 hover:text-cyber py-2 border-l-2 border-transparent hover:border-cyber pl-4 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="px-6 py-6 border-t border-white/10">
            <Button as="link" to={APP_ROUTES.BOOKING} className="w-full justify-center" variant="primary">
              Book Appointment
            </Button>
          </div>
        </div>
      </aside>

      {/* ==========================================
          BOOKING SUMMARY SIDEBAR (Right)
      ========================================== */}
      <BookingSummary 
        isOpen={isBookingSummaryOpen} 
        onClose={() => setIsBookingSummaryOpen(false)} 
      />
    </>
  );
};
