import React from 'react';
import { Logo } from '@/components/ui/Logo';
import { Navigation } from './Navigation';
import { Button } from '@/components/ui/Button';
import { APP_ROUTES } from '@/lib/constants';

export const Header: React.FC = () => {
  return (
    <header className="bg-deep-900/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Logo />
          <Navigation />
          <Button as="link" to={APP_ROUTES.BOOKING} className="hidden md:flex">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};
