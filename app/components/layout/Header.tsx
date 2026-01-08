import React from 'react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { Menu, ShoppingBag } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className='bg-deep-900/80 backdrop-blur-lg sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-20'>
          <Button as='icon' className='md:hidden'>
            <Menu className='h-6 w-6' />
          </Button>
          <Logo />
          <Button as='icon'>
            <ShoppingBag className='h-6 w-6' />
          </Button>
        </div>
      </div>
    </header>
  );
};
