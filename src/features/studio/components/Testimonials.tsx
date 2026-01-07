import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '../../../lib/utils';

// ==========================================
// TYPE DEFINITIONS
// ==========================================

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  date: string;
}

// ==========================================
// TESTIMONIALS DATA
// ==========================================

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marcus Johnson',
    role: 'Business Executive',
    content: 'LIRIMI transformed my weekly grooming routine into an experience I actually look forward to. The attention to detail is unmatched, and the atmosphere makes you feel like royalty. Best barbershop in NYC, hands down.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    date: '2025-01-02'
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Creative Director',
    content: 'I've been to countless barbers across Manhattan, but LIRIMI stands alone. The precision of the cut, the quality of products, and the genuine care from the staff create an experience worth every penny. My go-to for over a year now.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    date: '2024-12-28'
  },
  {
    id: '3',
    name: 'James Rodriguez',
    role: 'Fashion Photographer',
    content: 'The Executive Package is pure indulgence. From the moment you walk in, you're treated to a level of service that rivals the finest spas. The hot towel shave alone is worth the visit. This is grooming elevated to art.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    date: '2024-12-15'
  },
  {
    id: '4',
    name: 'Alex Thompson',
    role: 'Tech Entrepreneur',
    content: 'Found LIRIMI through a colleague and never looked back. The booking system is seamless, the barbers are true masters of their craft, and the results speak for themselves. Professional, precise, and consistently excellent.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    date: '2024-12-10'
  },
  {
    id: '5',
    name: 'Michael Foster',
    role: 'Investment Banker',
    content: 'In a city full of options, LIRIMI has earned my loyalty. The signature cut is perfection every time, and the barbers actually listen to what you want. It's rare to find this combination of skill, consistency, and hospitality.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    date: '2024-11-30'
  }
];

// ==========================================
// COMPONENT
// ==========================================

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => 
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-deep-950 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber/10 border border-cyber/20 mb-4">
            <Star className="text-cyber" size={16} fill="currentColor" />
            <span className="text-cyber text-sm font-semibold tracking-wider uppercase">
              Client Reviews
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Trusted by Professionals
          </h2>
          
          <div className="h-1 w-24 bg-cyber mx-auto rounded-full mb-6" />
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from clients who've experienced the LIRIMI difference
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          
          {/* Testimonial Card */}
          <div 
            className="relative bg-deep-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col justify-between"
            role="region"
            aria-live="polite"
            aria-label="Customer testimonials"
          >
            
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote size={80} className="text-cyber" />
            </div>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={cn(
                    "transition-colors",
                    i < currentTestimonial.rating 
                      ? "text-cyber fill-cyber" 
                      : "text-gray-600"
                  )}
                />
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="mb-8">
              <p className="text-white text-lg md:text-xl leading-relaxed italic">
                "{currentTestimonial.content}"
              </p>
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <img
                src={currentTestimonial.avatar}
                alt={`${currentTestimonial.name}'s avatar`}
                className="w-16 h-16 rounded-full border-2 border-cyber/30 bg-deep-800"
                loading="lazy"
              />
              <div>
                <p className="text-white font-bold text-lg">
                  {currentTestimonial.name}
                </p>
                <p className="text-gray-400 text-sm">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>

          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-8 mt-8">
            
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-cyber hover:text-cyber transition-all hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={cn(
                    "transition-all rounded-full",
                    index === currentIndex
                      ? "w-8 h-3 bg-cyber"
                      : "w-3 h-3 bg-white/20 hover:bg-white/40"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : "false"}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-cyber hover:text-cyber transition-all hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>

          </div>

          {/* Auto-play Indicator */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-gray-500 text-xs hover:text-cyber transition-colors"
              aria-label={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
            >
              {isAutoPlaying ? "● Auto-playing" : "○ Paused"} • Click to {isAutoPlaying ? "pause" : "resume"}
            </button>
          </div>

        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            Join hundreds of satisfied clients
          </p>
          <div className="flex items-center justify-center gap-2 text-cyber">
            <div className="flex -space-x-2">
              {TESTIMONIALS.slice(0, 4).map((testimonial) => (
                <img
                  key={testimonial.id}
                  src={testimonial.avatar}
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-deep-950"
                  loading="lazy"
                />
              ))}
            </div>
            <span className="text-white font-semibold">
              5,000+ Happy Clients
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
