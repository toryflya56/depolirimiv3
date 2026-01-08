import React from 'react';
import { formatCurrency } from '../../../lib/utils';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../../lib/constants';

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const SERVICES: Service[] = [
  {
    id: 'executive-cut',
    name: 'The Executive Cut',
    description: 'Precision scissor cut tailored to your head shape, finished with a hot towel styling.',
    price: 55,
    imageUrl: 'https://images.unsplash.com/photo-1563291885-2275807353b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'royal-shave',
    name: 'Royal Shave',
    description: 'Traditional straight razor shave with pre-shave oil, hot foam, and cold towel finish.',
    price: 45,
    imageUrl: 'https://images.unsplash.com/photo-1566386574259-2c70a80a5a3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'beard-sculpting',
    name: 'Beard Sculpting',
    description: 'Detailed beard trimming and shaping, including line-up and conditioning treatment.',
    price: 35,
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8024a48979d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-deep-950 scroll-mt-16">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Our Expertise
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {SERVICES.map((service) => (
            <Link to={`${APP_ROUTES.BOOKING}?service=${service.id}`} key={service.id} className="block group">
              <article className="bg-deep-900/40 rounded-2xl overflow-hidden border border-white/10 hover:border-cyber/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyber/10">
                <div className="md:flex">

                  <div className="md:w-1/2 relative overflow-hidden">
                    <img 
                      src={service.imageUrl}
                      alt={`Image for ${service.name}`}
                      className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <div className="md:w-1/2 p-6 flex flex-col justify-center relative">
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-2xl font-serif font-bold text-white">
                          {service.name}
                        </h3>
                        <span className="text-2xl font-bold text-cyber ml-4">
                          {formatCurrency(service.price)}
                        </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                </div>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
