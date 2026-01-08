import React from 'react';
import HeroBanner from './HeroBanner';

const HeroLanding: React.FC = () => {
  return (
    <HeroBanner 
      badge="EST. 2024"
      title={<>Where Style is <span className="text-cyber">Forged</span>.</>}
      subtitle="We unite timeless techniques with visionary style. This isn't just a haircut—it's the signature of your confidence."
      backgroundImage="/hero-bg.jpg"
    />
  );
};

export default HeroLanding;
