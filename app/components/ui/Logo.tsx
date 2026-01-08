import React from 'react';
import { APP_ROUTES } from '@/lib/constants';

export const Logo: React.FC = () => {
  return (
    <a href={APP_ROUTES.HOME} className="text-2xl font-bold font-serif text-white hover:text-cyber transition-colors">
      Lirimi <span className="text-cyber">.</span>
    </a>
  );
};
