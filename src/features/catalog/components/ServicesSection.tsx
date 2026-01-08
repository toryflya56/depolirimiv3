import React from 'react';
import { ServiceCard } from './ServiceCard'; // Use the ServiceCard component
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../../lib/constants';
import { Service } from '../../../types'; // Use the shared Service type

// Update the data structure to match the Service type
const SERVICES: Service[] = [
  {
    id: 'executive-cut',
    title: 'The Executive Cut',
    description: 'Precision scissor cut tailored to your head shape, finished with a hot towel styling.',
    price: 55,
    currency: 'USD',
    durationMin: 45,
    image: '/executive-cut.jpg',
  },
  {
    id: 'royal-shave',
    title: 'Royal Shave',
    description: 'Traditional straight razor shave with pre-shave oil, hot foam, and cold towel finish.',
    price: 45,
    currency: 'USD',
    durationMin: 30,
    image: '/royal-shave.jpg',
  },
  {
    id: 'beard-sculpting',
    title: 'Beard Sculpting',
    description: 'Detailed beard trimming and shaping, including line-up and conditioning treatment.',
    price: 35,
    currency: 'USD',
    durationMin: 25,
    image: '/beard-sculpting.jpg',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="-mt-20 pt-20 pb-20 bg-deep-950 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Our Expertise
          </h2>
        </div>

        {/* Use a grid to display the ServiceCard components */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link to={`${APP_ROUTES.BOOKING}?service=${service.id}`} key={service.id} className="block group">
              <ServiceCard service={service} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
