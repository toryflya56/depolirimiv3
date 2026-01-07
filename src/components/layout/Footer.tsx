import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO, APP_ROUTES, BUSINESS_HOURS } from '../../lib/constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-900 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        {/* GRID LAYOUT: 4 Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: Brand & Bio */}
          <div className="space-y-6">
            <Link to={APP_ROUTES.HOME} className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-cyber/10 rounded-md flex items-center justify-center border border-cyber/20">
                <Scissors className="text-cyber" size={16} />
              </div>
              <span className="text-xl font-serif font-bold text-white tracking-wider">
                LIRIMI
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elevating men's grooming through precision, tradition, and modern aesthetics. 
              {COMPANY_INFO.tagline}.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href={COMPANY_INFO.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyber hover:text-deep-950 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={COMPANY_INFO.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyber hover:text-deep-950 transition-all duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href={COMPANY_INFO.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyber hover:text-deep-950 transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold tracking-wide mb-6">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link to={APP_ROUTES.HOME} className="text-gray-400 hover:text-cyber transition-colors text-sm w-fit">Home</Link>
              <a href={APP_ROUTES.SERVICES} className="text-gray-400 hover:text-cyber transition-colors text-sm w-fit">Services</a>
              <Link to={APP_ROUTES.BOOKING} className="text-gray-400 hover:text-cyber transition-colors text-sm w-fit">Book Appointment</Link>
              <a href={APP_ROUTES.CONTACT} className="text-gray-400 hover:text-cyber transition-colors text-sm w-fit">Contact Us</a>
            </nav>
          </div>

          {/* COLUMN 3: Contact Info */}
          <div>
            <h4 className="text-white font-bold tracking-wide mb-6">Contact</h4>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-cyber shrink-0 mt-0.5" />
                <a 
                  href={COMPANY_INFO.location.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.location.street}<br />
                  {COMPANY_INFO.location.district}, {COMPANY_INFO.location.city}, {COMPANY_INFO.location.state}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-cyber shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-cyber shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </address>
          </div>

          {/* COLUMN 4: Hours */}
          <div>
            <h4 className="text-white font-bold tracking-wide mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              {BUSINESS_HOURS.map((schedule) => (
                <li key={schedule.day} className="flex justify-between text-sm border-b border-white/5 pb-2">
                  <span className="text-gray-400">{schedule.day}</span>
                  <span className="text-white font-medium">{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR: Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-cyber text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-cyber text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
