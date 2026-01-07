import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scissors, Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '../ui/Button';
import { APP_ROUTES } from '../../lib/constants';
import { cn } from '../../lib/utils';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // UX: Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: APP_ROUTES.HOME },
    { name: 'Services', path: APP_ROUTES.SERVICES },
    { name: 'Contact', path: APP_ROUTES.CONTACT },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-deep-950/90 backdrop-blur-md border-b border-white/5 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* MOBILE MENU TOGGLE */}
        <button
          className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* BRAND LOGO - Centered */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link 
            to={APP_ROUTES.HOME} 
            className="flex items-center gap-2 group"
            aria-label="Lirimi Studio Home"
          >
            <Scissors className="text-cyber" size={22} />
            <span className="text-2xl font-serif font-bold text-white tracking-wider">
              LIRIMI
            </span>
          </Link>
        </div>

        {/* CART/BOOKING LINK */}
        <Link to={APP_ROUTES.BOOKING}>
          <div className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
             <ShoppingBag size={24} />
          </div>
        </Link>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div 
        className={cn(
          "absolute top-full left-0 right-0 bg-deep-900/95 backdrop-blur-xl border-b border-cyber/20 overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-[400px] py-6" : "max-h-0 py-0"
        )}
      >
        <nav className="container mx-auto px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-lg font-medium text-gray-200 hover:text-cyber py-2 border-l-2 border-transparent hover:border-cyber pl-4 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 mt-2">
            <Button as="link" to={APP_ROUTES.BOOKING} className="w-full justify-center">
              Book Appointment
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
