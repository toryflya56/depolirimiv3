import React from 'react';
import HeroBanner from './HeroBanner';

const HeroLanding: React.FC = () => {
  return (
    <HeroBanner 
      badge="EST. 2024"
      title={<>Where Style is <span className="text-cyber">Forged</span>.</>}
      subtitle="We unite timeless techniques with visionary style. This isn't just a haircut—it's the signature of your confidence."
      backgroundImage="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  );
};

export default HeroLanding;
