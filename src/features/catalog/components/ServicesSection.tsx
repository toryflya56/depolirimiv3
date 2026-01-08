import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../../lib/constants';
import { Service } from '../../../types';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import '../../studio/components/animations.css';

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
  const [setNode, entry] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const isVisible = entry?.isIntersecting;

  return (
    <section id="services" className="bg-deep-950 text-white py-32 sm:py-40 scroll-mt-16">
      <div className="container mx-auto px-6 md:px-12">
        <div ref={setNode} className="text-center mb-24">
          <h2 className={`text-5xl md:text-6xl font-serif text-white mb-4 fade-in-up ${isVisible ? 'visible' : ''}`}>
            Signature Services
          </h2>
          <div className={`h-0.5 mx-auto bg-cyber rounded-full draw-line-h ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`fade-in-up ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 150 + 400}ms` }}
            >
              <Link to={`${APP_ROUTES.BOOKING}?service=${service.id}`} className="block group">
                <ServiceCard service={service} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
