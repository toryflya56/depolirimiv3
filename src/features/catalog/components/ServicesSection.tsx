import React, { useState } from 'react';
import { Scissors, Sparkles, Brush, Crown, Check } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { APP_ROUTES } from '../../../lib/constants';
import { formatCurrency } from '../../../lib/utils';

// ==========================================
// TYPE DEFINITIONS
// ==========================================

interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // minutes
  price: number;
  icon: React.ReactNode;
  features: string[];
  popular?: boolean;
}

// ==========================================
// SERVICE CATALOG DATA
// ==========================================

const SERVICES: Service[] = [
  {
    id: 'signature-cut',
    name: 'Signature Cut',
    description: 'Precision haircut with consultation, wash, and style. Our master barbers analyze your face shape and hair texture to deliver a cut that enhances your natural features.',
    duration: 45,
    price: 65,
    icon: <Scissors className="text-cyber" size={28} />,
    features: [
      'Personalized consultation',
      'Premium hair wash',
      'Precision cutting technique',
      'Hot towel treatment',
      'Styling with premium products'
    ],
    popular: true
  },
  {
    id: 'royal-shave',
    name: 'Royal Shave',
    description: 'Traditional hot towel shave with pre-shave oil, premium lather, and post-shave balm. Experience the lost art of straight razor mastery.',
    duration: 40,
    price: 55,
    icon: <Crown className="text-cyber" size={28} />,
    features: [
      'Hot towel preparation',
      'Pre-shave oil treatment',
      'Straight razor technique',
      'Post-shave moisturizer',
      'Complimentary face massage'
    ]
  },
  {
    id: 'beard-sculpting',
    name: 'Beard Sculpting',
    description: 'Expert beard trimming and shaping with oil conditioning. Whether you want a full beard, goatee, or designer stubble, we craft it perfectly.',
    duration: 30,
    price: 40,
    icon: <Brush className="text-cyber" size={28} />,
    features: [
      'Beard analysis & consultation',
      'Precision trimming',
      'Edge detailing',
      'Conditioning treatment',
      'Styling guidance'
    ]
  },
  {
    id: 'executive-package',
    name: 'Executive Package',
    description: 'Complete grooming experience: haircut, shave, beard trim, and facial treatment. The ultimate transformation for the modern gentleman.',
    duration: 90,
    price: 140,
    icon: <Sparkles className="text-cyber" size={28} />,
    features: [
      'Full signature haircut',
      'Royal hot towel shave',
      'Beard sculpting & conditioning',
      'Deep cleansing facial',
      'Scalp massage',
      'Complimentary beverage'
    ],
    popular: true
  }
];

// ==========================================
// COMPONENT
// ==========================================

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 bg-deep-950 scroll-mt-20">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber/10 border border-cyber/20 mb-4">
            <Scissors className="text-cyber" size={16} />
            <span className="text-cyber text-sm font-semibold tracking-wider uppercase">
              Our Services
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Crafted Experiences
          </h2>
          
          <div className="h-1 w-24 bg-cyber mx-auto rounded-full mb-6" />
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From classic cuts to modern styles, each service is a testament to our dedication 
            to the craft and your satisfaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className={`
                relative group cursor-pointer
                bg-deep-900/50 backdrop-blur-sm 
                border rounded-2xl overflow-hidden
                transition-all duration-300 hover:scale-105
                ${selectedService === service.id 
                  ? 'border-cyber shadow-lg shadow-cyber/20' 
                  : 'border-white/10 hover:border-cyber/50'
                }
              `}
              onClick={() => setSelectedService(
                selectedService === service.id ? null : service.id
              )}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedService(
                    selectedService === service.id ? null : service.id
                  );
                }
              }}
              aria-expanded={selectedService === service.id}
            >
              
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-cyber text-deep-950 text-xs font-bold rounded-full uppercase tracking-wide">
                    Popular
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className="p-6">
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-cyber/10 border border-cyber/20 flex items-center justify-center mb-4 group-hover:border-cyber/50 transition-colors">
                  {service.icon}
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Metadata: Duration & Price */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                  <span className="text-gray-500 text-sm">
                    {service.duration} min
                  </span>
                  <span className="text-cyber text-xl font-bold">
                    {formatCurrency(service.price)}
                  </span>
                </div>

                {/* Features (Expandable) */}
                <div 
                  className={`
                    overflow-hidden transition-all duration-300
                    ${selectedService === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="text-cyber shrink-0 mt-0.5" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  className="w-full text-center text-cyber text-sm font-semibold py-2 border border-cyber/30 rounded-lg hover:bg-cyber/10 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.hash = APP_ROUTES.booking;
                  }}
                >
                  {selectedService === service.id ? 'Book This Service' : 'View Details'}
                </button>

              </div>
            </article>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button 
            as="link"
            to={APP_ROUTES.booking}
            size="lg"
            variant="primary"
          >
            Book Your Service
          </Button>
          <p className="text-gray-500 text-sm mt-4">
            Walk-ins welcome, but appointments recommended
          </p>
        </div>

      </div>
    </section>
  );
};
