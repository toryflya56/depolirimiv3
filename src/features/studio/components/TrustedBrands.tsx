import React from 'react';

const PARTNERS = ['REUZEL', 'UPPERCUT', 'LAYRITE', 'SUAVECITO'];

export const TrustedBrands: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
            Trusted Products & Partners
          </h2>
        </div>

        <div className="flex justify-center items-center space-x-8 md:space-x-16 lg:space-x-24">
          {PARTNERS.map((name) => (
            <div key={name} className="text-center">
              <span className="text-xl md:text-2xl font-bold text-gray-400/80 tracking-widest font-serif filter grayscale contrast-120 opacity-80">
                {name}
              </span>
            </div>
          ))}
        </div>
    </section>
  );
};
