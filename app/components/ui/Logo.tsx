import type React from 'react';
import { Scissors } from 'lucide-react';
import { APP_ROUTES } from '@/lib/constants';

export const Logo: React.FC = () => {
  return (
    <a
      href={APP_ROUTES.HOME}
      className='flex items-center space-x-2 text-2xl font-bold font-serif text-white hover:text-cyber transition-colors'
    >
      <Scissors className='h-6 w-6 text-cyber' />
      <span>LIRIMI</span>
    </a>
  );
};
