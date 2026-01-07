import React from 'react';

// Hardcoded here as they are strictly presentational for this component
const BRANDS = [
  { name: 'UZEL', id: 1 },
  { name: 'UPPERCUT', id: 2 },
  { name: 'LAYRITE', id: 3 },
  { name: 'REUZEL', id: 4 },
  { name: 'SUAVECITO', id: 5 },
];

export const TrustedBrands: React.FC = () => {
  return (
    <section 
      className="py-12 bg-deep-900/50 border-y border-white/5"
      aria-label="Trusted Partner Brands"
    >
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-500 font-medium tracking-[0.2em] uppercase mb-8">
          Premium Products Used
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60">
          {BRANDS.map((brand) => (
            <div 
              key={brand.id}
              className="group cursor-default"
            >
              {/* 
                 In a real enterprise app, these would be SVG <img /> tags.
                 For now, we use Typography to simulate premium logos.
              */}
              <span className="text-2xl md:text-3xl font-serif font-bold text-gray-400 group-hover:text-white transition-colors duration-300 select-none">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
