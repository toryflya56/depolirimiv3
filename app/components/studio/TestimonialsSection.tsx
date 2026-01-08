import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { MOCK_TESTIMONIALS } from '@/lib/mock-data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '@/models/common';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-deep-900 border border-deep-800 rounded-lg p-8 h-full flex flex-col">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-cyber' : 'text-deep-700'}`}
            fill="currentColor"
          />
        ))}
      </div>
      <blockquote className="text-gray-300 italic text-lg mb-6 flex-grow">
        <p>\"{testimonial.quote}\"</p>
      </blockquote>
      <div className="flex items-center mt-auto">
        <img 
          src={testimonial.customerAvatarUrl} 
          alt={testimonial.customerName} 
          className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-cyber/50"
        />
        <div>
          <p className="font-bold text-white text-lg">{testimonial.customerName}</p>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-24 bg-gray-50 dark:bg-deep-950">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="What Our Clients Say"
          subtitle="Real stories from satisfied customers"
          isAlternativeColor
        />
        <div className="relative mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex space-x-4">
              {MOCK_TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <div className="p-2 h-full">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 md:px-0 left-0">
              <button 
                onClick={scrollPrev} 
                className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-cyber/80 text-white hover:bg-cyber transition-colors duration-300 transform -translate-x-16"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={scrollNext} 
                className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-cyber/80 text-white hover:bg-cyber transition-colors duration-300 transform translate-x-16"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};
