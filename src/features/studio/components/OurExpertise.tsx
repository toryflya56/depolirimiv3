import React from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import './animations.css';

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

const AnimatedExpertiseItem: React.FC<{ item: typeof EXPERTISE_ITEMS[0]; index: number }> = ({ item, index }) => {
  const [setNode, entry] = useIntersectionObserver({ threshold: 0.3, triggerOnce: true });
  const isVisible = entry?.isIntersecting;

  const itemDelay = 200; // ms

  return (
    <div ref={setNode} className="relative py-12" style={{ marginBottom: '450px' }}>
      <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
        <div 
          className={`fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: `${itemDelay}ms` }}
        >
          <div className="relative w-[70px] h-[70px] flex items-center justify-center mb-8">
            <div className={`absolute inset-0 rounded-full bg-cyber/10 scale-0 transition-transform duration-700 ${isVisible ? 'scale-100' : ''}`} style={{ transitionDelay: `${itemDelay}ms` }}></div>
            <div 
              className={`absolute inset-0 rounded-full border border-cyber/50 scale-0 transition-transform duration-700 ${isVisible ? 'scale-100' : ''}`}
              style={{ transitionDelay: `${itemDelay + 100}ms` }}
            ></div>
            <span 
              className={`text-2xl font-serif text-cyber glow-in ${isVisible ? 'visible' : ''}`}
              style={{
                transitionDelay: `${itemDelay + 200}ms`,
                textShadow: 'var(--cyan-glow-subtle)'
              }}
            >
              0{index + 1}
            </span>
          </div>
        </div>

        <h3 
          className={`text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-200/80 mb-6 transition-all duration-700 hover:text-white fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{
            textShadow: isVisible ? 'var(--cyan-glow-intense)' : 'var(--cyan-glow-subtle)',
            transitionDelay: `${itemDelay + 300}ms`,
          }}
        >
          {item.title}
        </h3>
        <p 
          className={`text-lg text-white/70 leading-relaxed fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{ lineHeight: 1.8, transitionDelay: `${itemDelay + 400}ms`, maxWidth: '560px' }}
        >
          {item.description}
        </p>
      </div>
      {index < EXPERTISE_ITEMS.length - 1 && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-[160px] bg-cyber/40">
            <div className={`h-full bg-cyber/40 draw-line-divider ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${itemDelay + 600}ms` }} />
        </div>
      )}
    </div>
  );
};

const OurExpertise: React.FC = () => {
  const [setNode, entry] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });
  const isVisible = entry?.isIntersecting;

  return (
    <section className="bg-black text-white py-32 sm:py-40">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="container mx-auto px-6 md:px-12">
            <div ref={setNode} className="text-center mb-24 md:mb-32">
                <h2 className={`text-5xl md:text-6xl font-serif text-white mb-4 fade-in-up ${isVisible ? 'visible' : ''}`}>
                    Our Expertise
                </h2>
                <div className={`h-0.5 mx-auto bg-cyber rounded-full draw-line-h ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }} />
            </div>

            <div className="space-y-24 md:space-y-32">
                {EXPERTISE_ITEMS.map((item, index) => (
                    <AnimatedExpertiseItem key={index} item={item} index={index} />
                ))}
            </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  );
};

export default OurExpertise;
