import React from 'react';
import { Star } from 'lucide-react';

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

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="flex-shrink-0 w-[320px] bg-deep-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4">
      <div className="flex items-center space-x-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < testimonial.rating ? 'text-cyber fill-cyber' : 'text-gray-600'} 
          />
        ))}
      </div>
      <p className="text-white/90 leading-relaxed h-24">{testimonial.content}</p>
      <div className="flex items-center space-x-3 pt-2">
        <img
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.avatarSeed}`}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full bg-deep-800 border-2 border-white/10"
        />
        <div>
          <p className="text-white font-semibold">{testimonial.name}</p>
          <p className="text-gray-400 text-xs uppercase tracking-wider">{testimonial.membership}</p>
        </div>
      </div>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-deep-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12">
          Don't just take our word for it.
        </h2>
        
        <div className="flex space-x-6 overflow-x-auto pb-8 -mx-4 px-4 scrollbar-thin scrollbar-thumb-cyber/50 scrollbar-track-deep-900/50">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
          {/* Add a spacer at the end for better scroll feel */}
          <div className="flex-shrink-0 w-1"></div>
        </div>

      </div>
    </section>
  );
};
