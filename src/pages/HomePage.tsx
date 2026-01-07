import React, { useEffect } from 'react';
import { Hero } from '../features/studio/components/Hero';
import { ServicesSection } from '../features/catalog/components/ServicesSection';
import { TrustedBrands } from '../features/studio/components/TrustedBrands';
import { Testimonials } from '../features/studio/components/Testimonials';
import { ContactSection } from '../features/studio/components/ContactSection';

export const HomePage: React.FC = () => {
  
  // SCROLL ANIMATION ENGINE
  // Adds the 'active' class to elements when they scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: Unobserve after revealing to prevent re-triggering
          // observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the item is visible
      rootMargin: "0px 0px -50px 0px" // Offset slightly to trigger before bottom
    });

    const hiddenElements = document.querySelectorAll('.reveal-section');
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup to prevent memory leaks on page change
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-deep-950">
      
      {/* 1. Hero (First Paint - No Animation Delay) */}
      <Hero />
      
      {/* 2. Services Catalog */}
      <div className="reveal-section transition-all duration-1000 ease-out">
        <ServicesSection />
      </div>
      
      {/* 3. Social Proof (Brands) */}
      <div className="reveal-section transition-all duration-1000 ease-out delay-100">
        <TrustedBrands />
      </div>
      
      {/* 4. Reviews */}
      <div className="reveal-section transition-all duration-1000 ease-out delay-100">
        <Testimonials />
      </div>
      
      {/* 5. Lead Generation (Contact) */}
      <div className="reveal-section transition-all duration-1000 ease-out">
        <ContactSection />
      </div>

    </main>
  );
};
