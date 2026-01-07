import React from 'react';

// ==========================================
// TYPE DEFINITIONS
// ==========================================

interface Brand {
  id: string;
  name: string;
  logo: string;
  category: 'products' | 'tools' | 'partners';
}

// ==========================================
// BRAND CATALOG
// ==========================================

const BRANDS: Brand[] = [
  {
    id: 'wahl',
    name: 'Wahl',
    logo: 'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&q=80&w=200&h=80',
    category: 'tools'
  },
  {
    id: 'andis',
    name: 'Andis',
    logo: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=200&h=80',
    category: 'tools'
  },
  {
    id: 'american-crew',
    name: 'American Crew',
    logo: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&q=80&w=200&h=80',
    category: 'products'
  },
  {
    id: 'baxter',
    name: 'Baxter of California',
    logo: 'https://images.unsplash.com/photo-1585155967849-d5d34fb19de3?auto=format&fit=crop&q=80&w=200&h=80',
    category: 'products'
  },
  {
    id: 'layrite',
    name: 'Layrite',
    logo: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=200&h=80',
    category: 'products'
  },
  {
    id: 'suavecito',
    name: 'Suavecito',
    logo: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=200&h=80',
    category: 'products'
  }
];

// ==========================================
// COMPONENT
// ==========================================

export const TrustedBrands: React.FC = () => {
  return (
    <section className="py-16 bg-deep-900/30 border-y border-white/5">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
            Trusted by Industry Leaders
          </p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
            Premium Products & Tools
          </h2>
        </div>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="group relative flex items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyber/30 transition-all duration-300 hover:scale-105"
            >
              
              {/* Logo Image */}
              <div className="relative w-full h-16 flex items-center justify-center overflow-hidden">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback: Replace broken images with text
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.fallback-text')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'fallback-text text-center text-white font-bold text-sm';
                      fallback.textContent = brand.name;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>

              {/* Tooltip (Optional Enhancement) */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-deep-950 border border-cyber/30 rounded-lg text-cyber text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {brand.name}
              </div>

            </div>
          ))}

        </div>

        {/* Supporting Text */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            We exclusively use professional-grade products and tools from the world's leading brands 
            to ensure every service meets the highest standards of quality and precision.
          </p>
        </div>

        {/* Animated Marquee (Optional Advanced Version) */}
        {/* Uncomment below for infinite scrolling logo effect */}
        {/*
        <div className="relative overflow-hidden mt-12">
          <div className="flex animate-marquee">
            {[...BRANDS, ...BRANDS].map((brand, idx) => (
              <div key={`${brand.id}-${idx}`} className="flex-shrink-0 mx-8">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        */}

      </div>
    </section>
  );
};
