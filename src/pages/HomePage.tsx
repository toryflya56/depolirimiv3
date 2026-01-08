import React from 'react';
import HeroLanding from '../features/studio/components/HeroLanding';

export const HomePage: React.FC = () => {
  return (
    <div>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-cyber focus:text-deep-950">
        Skip to main content
      </a>
      <main id="main-content">
        <HeroLanding />
      </main>
    </div>
  );
};
