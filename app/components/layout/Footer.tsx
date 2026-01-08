import type React from 'react';
import { Logo } from '@/components/ui/Logo';
import { APP_ROUTES } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className='bg-deep-800 border-t border-deep-700 py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>
          <div>
            <Logo />
            <p className='text-gray-400 mt-4 max-w-xs mx-auto md:mx-0'>
              The premier barber studio for modern and classic hairstyling.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-white text-lg mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <a href={APP_ROUTES.HOME} className='text-gray-400 hover:text-cyber'>
                  Home
                </a>
              </li>
              <li>
                <a href={APP_ROUTES.SERVICES} className='text-gray-400 hover:text-cyber'>
                  Services
                </a>
              </li>
              <li>
                <a href={APP_ROUTES.ABOUT} className='text-gray-400 hover:text-cyber'>
                  About Us
                </a>
              </li>
              <li>
                <a href={APP_ROUTES.BOOKING} className='text-gray-400 hover:text-cyber'>
                  Book Now
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-white text-lg mb-4'>Contact Us</h3>
            <p className='text-gray-400'>123 Barber Street, Styleburg, ST 12345</p>
            <p className='text-gray-400'>contact@lirimi.com</p>
            <p className='text-gray-400'>(123) 456-7890</p>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-deep-700 text-center text-gray-500'>
          <p>&copy; {new Date().getFullYear()} Lirimi Barber Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
