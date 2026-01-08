import React from 'react';

const OurExpertise: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-deep-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-deep-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-cyber">Precision Haircuts</h3>
            <p className="text-gray-300">Our stylists are masters of their craft, delivering precision haircuts that are tailored to your unique style and features.</p>
          </div>
          <div className="bg-deep-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-cyber">Vibrant Color</h3>
            <p className="text-gray-300">From subtle highlights to bold new looks, our colorists use the latest techniques to create stunning, long-lasting results.</p>
          </div>
          <div className="bg-deep-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-cyber">Luxury Treatments</h3>
            <p className="text-gray-300">Indulge in our range of luxury treatments, designed to nourish, repair, and revitalize your hair.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
