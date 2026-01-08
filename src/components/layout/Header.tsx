import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scissors, Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '../ui/Button';
import { APP_ROUTES } from '../../lib/constants';
import { cn } from '../../lib/utils';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: APP_ROUTES.HOME },
    { name: 'Services', path: APP_ROUTES.SERVICES },
    { name: 'Contact', path: APP_ROUTES.CONTACT },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-4 z-50 left-4 right-4", // Inset from sides
          "max-w-md mx-auto", // Centered and max-width
          "border border-white/10 rounded-full",
          "bg-deep-950/80 backdrop-blur-lg",
          "py-2"
        )}
      >
        <div className="mx-auto px-4 flex items-center justify-between">

          {/* Mobile Header Layout: 3-column grid for robust alignment */}
          <div className="grid grid-cols-3 items-center w-full md:hidden">
            <button
              className="p-2 text-white justify-self-start" // Align left
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <Link to={APP_ROUTES.HOME} className="flex items-center gap-1.5 justify-self-center"> {/* Align center */}
              <Scissors className="text-cyber" size={18} />
              <span className="text-lg font-serif font-bold text-white tracking-wider">
                LIRIMI
              </span>
            </Link>

            <button className="p-2 text-white justify-self-end"> {/* Align right */}
              <ShoppingBag size={24} />
            </button>
          </div>

          {/* Desktop Header Layout */}
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
              <button className="text-white p-2 hover:bg-white/10 rounded-full transition-colors">
                <ShoppingBag size={20} />
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "fixed top-[72px] left-0 right-0 bg-deep-900/95 backdrop-blur-xl border-b border-cyber/20 overflow-hidden transition-all duration-300 md:hidden",
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
            <Button as="link" to={APP_ROUTES.BOOKING} className="w-full justify-center" variant="primary">
              Book Appointment
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};
