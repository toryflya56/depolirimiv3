import React from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface Review {
  id: number;
  author: string;
  role: string;
  rating: number; // 1-5
  text: string;
  date: string;
}

// Mock Data (In a real app, this comes from Google Reviews API)
const REVIEWS: Review[] = [
  {
    id: 1,
    author: "James Sterling",
    role: "Regular Client",
    rating: 5,
    text: "Best fade in Soho. The attention to detail is unmatched. Finally found a barber who understands head shape and texture.",
    date: "2 days ago"
  },
  {
    id: 2,
    author: "Marcus Chen",
    role: "Executive",
    rating: 5,
    text: "The Royal Shave is an absolute necessity. It's not just a haircut; it's 45 minutes of pure relaxation. The hot towel service is top-tier.",
    date: "1 week ago"
  },
  {
    id: 3,
    author: "David Miller",
    role: "First-time Visitor",
    rating: 5,
    text: "Walked in looking for a change, walked out feeling like a new man. The styling advice was spot on. Worth every penny.",
    date: "3 weeks ago"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section 
      className="py-24 bg-deep-950 relative overflow-hidden"
      aria-label="Customer Reviews"
    >
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Client Stories
          </h2>
          <div className="h-1 w-20 bg-cyber/50 mx-auto rounded-full" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <figure 
              key={review.id}
              className={cn(
                "glass p-8 rounded-2xl border border-white/5 relative hover:-translate-y-2 transition-transform duration-300",
                "flex flex-col h-full justify-between"
              )}
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-6 right-6 text-cyber/10" size={48} />

              <div>
                {/* Star Rating */}
                <div className="flex gap-1 mb-6" aria-label={`Rated ${review.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={cn(
                        "fill-current", 
                        i < review.rating ? "text-cyber" : "text-gray-700"
                      )} 
                    />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-300 leading-relaxed mb-8 relative z-10">
                  "{review.text}"
                </blockquote>
              </div>

              {/* Author Info */}
              <figcaption className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyber to-deep-900 flex items-center justify-center text-deep-950 font-bold text-lg">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{review.author}</div>
                  <div className="text-cyber/70 text-xs uppercase tracking-wider">{review.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
};
