import React from 'react';
import  HeroBanner  from "@/components/studio/HeroBanner";

const HeroLanding: React.FC = () => {
  return (
    <HeroBanner 
      badge="New York's Premier Barber Studio"
      title={<>Where <span className="text-cyber">Style</span> &amp; <span className="text-cyber">Precision</span> Meet</>}
      subtitle="Experience the art of traditional barbering with a modern twist. Book your appointment today and discover a new level of grooming."
    />
  );
};

export default HeroLanding;
