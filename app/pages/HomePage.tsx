import React from 'react';
import HeroLanding from '@/components/studio/HeroLanding';
import { ServicesSection } from '@/components/studio/ServicesSection';
import { TeamSection } from '@/components/studio/TeamSection';
import { TestimonialsSection } from '@/components/studio/TestimonialsSection';
import { CTASection } from '@/components/studio/CTASection';
import { PageLayout } from '@/components/layout/PageLayout';

const HomePage: React.FC = () => {
  return (
    <PageLayout>
        <HeroLanding />
        <ServicesSection isHomePage={true} />
        <TeamSection isHomePage={true} />
        <TestimonialsSection />
        <CTASection />
    </PageLayout>
  );
};

export default HomePage;
