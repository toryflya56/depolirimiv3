import type React from 'react';
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
        badge='EST. 2024'
        title={
          <>
            Where <span className='text-cyber'>Style</span> is Forged.
          </>
        }
        subtitle="We unite timeless techniques with visionary style. This isn't just a haircut—it's the signature of your confidence."
      />
      <ServicesSection isHomePage={true} />
      <TeamSection isHomePage={true} />
      <TestimonialsSection />
      <CTASection />
    </PageLayout>
  );
};

export default HomePage;
