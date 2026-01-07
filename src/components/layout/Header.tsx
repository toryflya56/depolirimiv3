import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scissors, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { APP_ROUTES } from '../../lib/constants';
import { cn } from '../../lib/utils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 1. PERFORMANCE: Efficient Scroll Listener
  // We only update state if the value actually changes to avoid re-renders.
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup to prevent memory leaks
  }, []);

  // 2. UX: Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Navigation Links Data (Centralized for easy updates)
  const navLinks = [
    { name: 'Home', path: APP_ROUTES.HOME },
    { name: 'Services', path: APP_ROUTES.SERVICES },
    { name: 'Contact', path: APP_ROUTES.CONTACT },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled 
          ? "bg-deep-950/80 backdrop-blur-md border-cyber/10 py-3 shadow-lg" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* BRAND LOGO */}
        <Link 
          to={APP_ROUTES.HOME} 
          className="flex items-center gap-2 group"
          aria-label="Lirimi Studio Home"
        >
          <div className="w-10 h-10 bg-cyber/10 rounded-lg flex items-center justify-center border border-cyber/20 group-hover:border-cyber/50 transition-colors">
            <Scissors className="text-cyber transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" size={20} />
          </div>
          <span className="text-2xl font-serif font-bold text-white tracking-wider">
            LIRIMI
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.path} // Using href for section anchors works better with single-page scroll
              className="text-sm font-medium text-gray-300 hover:text-cyber transition-colors tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
          
          <div className="h-6 w-px bg-white/10 mx-2" /> {/* Divider */}
          
          <Button 
            as="link"
            to={APP_ROUTES.BOOKING} 
            size="sm" 
            variant={isScrolled ? 'primary' : 'outline'}
          >
            Book Now
          </Button>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {/* Uses absolute positioning with a glass effect for modern feel */}
      <div 
        className={cn(
          "absolute top-full left-0 right-0 bg-deep-900/95 backdrop-blur-xl border-b border-cyber/20 overflow-hidden transition-all duration-300 md:hidden",
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
