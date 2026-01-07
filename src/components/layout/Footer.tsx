import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { COMPANY_INFO, APP_ROUTES } from '../../lib/constants';

const FooterLink: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => (
  <Link to={to} className="text-gray-400 hover:text-white transition-colors">
    {children}
  </Link>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-950 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 text-center">
        
        <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-white tracking-wider mb-4">LIRIMI</h2>
            <div className="flex justify-center gap-6 mb-8">
              <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Instagram size={24}/></a>
              <a href={COMPANY_INFO.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Twitter size={24}/></a>
              <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Facebook size={24}/></a>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12 text-sm">
            <div className="space-y-3 text-center md:text-left">
                <h4 className="font-bold text-white tracking-wide mb-4">About</h4>
                <nav className="flex flex-col space-y-3">
                    <FooterLink to={APP_ROUTES.HOME}>Our Story</FooterLink>
                    <FooterLink to={APP_ROUTES.HOME}>Barbers</FooterLink>
                    <FooterLink to={APP_ROUTES.HOME}>Careers</FooterLink>
                </nav>
            </div>
            <div className="space-y-3 text-center md:text-left">
                <h4 className="font-bold text-white tracking-wide mb-4">Services</h4>
                <nav className="flex flex-col space-y-3">
                    <FooterLink to={APP_ROUTES.SERVICES}>Haircuts</FooterLink>
                    <FooterLink to={APP_ROUTES.SERVICES}>Shaving</FooterLink>
                    <FooterLink to={APP_ROUTES.SERVICES}>Styling</FooterLink>
                </nav>
            </div>
            <div className="space-y-3 text-center md:text-left col-span-2 md:col-span-1">
                <h4 className="font-bold text-white tracking-wide mb-4">Legal</h4>
                <nav className="flex flex-col space-y-3">
                    <FooterLink to={APP_ROUTES.HOME}>Privacy Policy</FooterLink>
                    <FooterLink to={APP_ROUTES.HOME}>Terms of Service</FooterLink>
                    <FooterLink to={APP_ROUTES.HOME}>Cookie Policy</FooterLink>
                </nav>
            </div>
        </div>

        <p className="text-gray-500 text-xs">
          &copy; {currentYear} Lirimi Barber Studio. All rights reserved.
        </p>

      </div>
    </footer>
  );
};
