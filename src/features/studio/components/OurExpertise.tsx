import React from 'react';

const EXPERTISE_ITEMS = [
  {
    title: 'Precision Haircuts',
    description: 'Our stylists are masters of their craft, delivering precision haircuts that are tailored to your unique style and features.',
  },
  {
    title: 'Vibrant Color',
    description: 'From subtle highlights to bold new looks, our colorists use the latest techniques to create stunning, long-lasting results.',
  },
  {
    title: 'Luxury Treatments',
    description: 'Indulge in our range of luxury treatments, designed to nourish, repair, and revitalize your hair.',
  },
];

const OurExpertise: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Our Expertise
          </h2>
          <div className="h-1 w-24 bg-cyber mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {EXPERTISE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-cyber/20 rounded-2xl p-8 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyber/20"
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyber to-white text-transparent bg-clip-text">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
