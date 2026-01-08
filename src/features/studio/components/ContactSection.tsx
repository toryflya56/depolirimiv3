import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { COMPANY_INFO, BUSINESS_HOURS, APP_ROUTES } from '../../../lib/constants';
import { isValidEmail } from '../../../lib/utils';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import './animations.css';

const InfoRow: React.FC<{ icon: React.ReactNode; label: string; value: string; href?: string; isVisible: boolean; delay: number }> =
({ icon, label, value, href, isVisible, delay }) => {
  const content = href ? (
    <a href={href} className="text-white hover:text-cyber transition-colors break-all">{value}</a>
  ) : (
    <span className="text-white">{value}</span>
  );

  return (
    <div
      className={`flex items-start space-x-4 fade-in-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-cyber/10 border border-cyber/20">
        {icon}
      </div>
      <div>
        <p className="text-sm text-white/60">{label}</p>
        <p className="font-semibold text-lg">{content}</p>
      </div>
    </div>
  );
};

export const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const [setNode, entry] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const isVisible = entry?.isIntersecting;

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }
    setStatus('loading');
    await new Promise(res => setTimeout(res, 1500));
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="bg-black text-white py-32 sm:py-40 scroll-mt-20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="container mx-auto px-6 md:px-12">
        <div ref={setNode} className="text-center mb-24 md:mb-32">
            <h2 className={`text-5xl md:text-6xl font-serif text-white mb-4 fade-in-up ${isVisible ? 'visible' : ''}`}>
                Get in Touch
            </h2>
            <div className={`h-0.5 mx-auto bg-cyber rounded-full draw-line-h ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-24 md:gap-32 items-start">

          {/* LEFT: Visit the Studio */}
          <div className="space-y-12">
            <h3 className={`text-4xl font-serif text-white text-center fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>Visit the Studio</h3>
            
            <div className="space-y-8">
              <InfoRow icon={<MapPin size={24} className="text-cyber" />} label="Address" value={`${COMPANY_INFO.location.street}, ${COMPANY_INFO.location.city}, ${COMPANY_INFO.location.state} ${COMPANY_INFO.location.zip}`} isVisible={isVisible} delay={600} />
              <InfoRow icon={<Phone size={24} className="text-cyber" />} label="Phone" value={COMPANY_INFO.contact.phone} href={`tel:${COMPANY_INFO.contact.phone}`} isVisible={isVisible} delay={700} />
              <InfoRow icon={<Mail size={24} className="text-cyber" />} label="Email" value={COMPANY_INFO.contact.email} href={`mailto:${COMPANY_INFO.contact.email}`} isVisible={isVisible} delay={800} />
            </div>

            <div className={`fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '900ms' }}>
              <h4 className="text-xl font-semibold text-white mb-6 text-center tracking-widest">OPENING HOURS</h4>
              <ul className="space-y-4 text-sm max-w-sm mx-auto">
                {BUSINESS_HOURS.map((item, i) => (
                  <li key={item.day} className="flex justify-between border-b border-white/10 pb-3 last:border-none">
                    <span className="text-white/70">{item.day}</span>
                    <span className={`font-semibold ${item.hours === 'Closed' ? 'text-red-400' : 'text-white'}`}>{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Join the Club */}
          <div className="text-center">
            <h3 className={`text-4xl font-serif text-white mb-6 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>Join the Club</h3>
            <p className={`text-white/70 mb-10 max-w-xs mx-auto leading-relaxed fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>
              Subscribe for exclusive offers, style inspiration, and priority booking slots.
            </p>
            
            <form onSubmit={handleSubscribe} className={`space-y-4 w-full max-w-sm mx-auto fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-grow w-full px-5 py-3.5 bg-black border-2 border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyber focus:border-cyber transition-all duration-300"
                  aria-label="Email for newsletter"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === 'loading'}
                  loading={status === 'loading'}
                  className="w-full sm:w-auto"
                >
                  {status === 'success' ? 'Subscribed!' : 'Subscribe'}
                </Button>
              </div>
              {status === 'error' && <p className="text-sm text-red-400 mt-2">Please enter a valid email address.</p>}
            </form>
            
            <div className={`mt-12 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '700ms' }}>
              <Button variant="outline" as="link" to={APP_ROUTES.HOME} className="border-white/20 hover:bg-white/10 hover:text-white transition-all duration-300">
                  Customer Support
              </Button>
            </div>
          </div>

        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  );
};
