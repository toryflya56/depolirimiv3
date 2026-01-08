import React from 'react';
import { HeroBanner } from '@/components/ui/HeroBanner';

const HomePage: React.FC = () => {
  return (
    <div>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-cyber focus:text-deep-950">
        Skip to main content
      </a>
      <main id="main-content">
        <HeroBanner 
        title="Welcome to Lirimi's Barber Studio"
        subtitle="Experience the art of traditional and modern barbering."
        imageUrl="/images/studio/barber-chair.jpeg"
      />
      </main>
    </div>
  );
};

export default HomePage;