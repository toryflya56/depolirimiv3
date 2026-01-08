import React from 'react';
import { HeroBanner } from '@/components/ui/HeroBanner';
import { ServicesSection } from '@/components/studio/ServicesSection';
import { TeamSection } from '@/components/studio/TeamSection';
import { TestimonialsSection } from '@/components/studio/TestimonialsSection';
import { CTASection } from '@/components/studio/CTASection';
import { PageLayout } from '@/components/layout/PageLayout';

const HomePage: React.FC = () => {
  return (
    <PageLayout>
      <HeroBanner 
        badge="New York's Premier Barber Studio"
        title={<>Where <span className="text-cyber">Style</span> &amp; <span className="text-cyber">Precision</span> Meet</>}
        subtitle="Experience the art of traditional barbering with a modern twist. Book your appointment today and discover a new level of grooming."
      />
      <ServicesSection isHomePage={true} />
      <TeamSection isHomePage={true} />
      <TestimonialsSection />
      <CTASection />
    </PageLayout>
  );
};

export default HomePage;
