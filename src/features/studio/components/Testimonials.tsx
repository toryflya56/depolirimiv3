import React from 'react';
import { Star } from 'lucide-react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import './animations.css';

interface Testimonial {
  id: string;
  name: string;
  membership: string;
  content: string;
  rating: number;
  avatarSeed: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Michael R.',
    membership: 'MEMBER SINCE 2023',
    content: 'Best fade in Soho. The attention to detail is unmatched. Finally found a barber who understands head shape.',
    rating: 5,
    avatarSeed: 'Michael',
  },
  {
    id: '2',
    name: 'David C.',
    membership: 'FREQUENT CLIENT',
    content: "The AI color match was perfect. The crop I needed was done well and I've been getting compliments.",
    rating: 5,
    avatarSeed: 'David',
  },
  {
    id: '3',
    name: 'James P.',
    membership: 'FIRST VISIT',
    content: 'Walked in for a classic shave. The hot towel and straight razor felt amazing. Left feeling like a new man.',
    rating: 5,
    avatarSeed: 'James',
  },
  {
    id: '4',
    name: 'Alex T.',
    membership: 'MEMBER SINCE 2024',
    content: 'Booking is super easy on their app. The barbers are consistently great and the vibe is always on point.',
    rating: 5,
    avatarSeed: 'Alex',
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial, isVisible: boolean }> = ({ testimonial, isVisible }) => {
  return (
    <div className={`flex-shrink-0 w-[380px] text-center space-y-8 p-8 transition-all duration-500`}>
       <div className="flex items-center justify-center space-x-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={22} 
            className={`transition-all duration-300 ${i < testimonial.rating ? 'text-cyber fill-cyber' : 'text-white/20'}`}
            style={{ transform: isVisible ? 'scale(1)' : 'scale(0)', transitionDelay: `${i * 100 + 300}ms` }}
          />
        ))}
      </div>
      <p className="text-2xl text-white/80 leading-relaxed font-serif italic h-32">
        \"{testimonial.content}\"
      </p>
      <div className="flex items-center justify-center space-x-4 pt-2">
        <img
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.avatarSeed}`}
          alt={testimonial.name}
          className={`w-14 h-14 rounded-full bg-white/10 border-2 border-white/20 transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}
          style={{ transitionDelay: '200ms' }}
        />
        <div>
          <p className="text-white font-semibold text-xl">{testimonial.name}</p>
          <p className="text-white/50 text-sm uppercase tracking-widest">{testimonial.membership}</p>
        </div>
      </div>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  const [setNode, entry] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const isVisible = entry?.isIntersecting;

  return (
    <section className="bg-black py-32 sm:py-40 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-deep-900/5 to-black" />
        <div className="container mx-auto px-4 relative">

            <div ref={setNode} className="text-center mb-20">
                <h2 className={`text-5xl md:text-6xl font-serif text-white mb-4 fade-in-up ${isVisible ? 'visible' : ''}`}>
                    Don't just take our word for it.
                </h2>
                <div className={`h-0.5 mx-auto bg-cyber rounded-full draw-line-h ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }} />
            </div>
            
            <div className={`flex space-x-8 overflow-x-auto pb-12 -mx-4 px-4 snap-x snap-mandatory fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
                {TESTIMONIALS.map((testimonial, index) => (
                    <div key={testimonial.id} className="snap-center transition-opacity duration-500 delay-200">
                        <TestimonialCard testimonial={testimonial} isVisible={isVisible} />
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};
