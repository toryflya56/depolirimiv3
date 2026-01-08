import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { COMPANY_INFO, BUSINESS_HOURS, APP_ROUTES } from '../../../lib/constants';
import { isValidEmail } from '../../../lib/utils';

const InfoRow: React.FC<{ icon: React.ReactNode; label: string; value: string; href?: string }> = 
({ icon, label, value, href }) => {
  const content = href ? (
    <a href={href} className="text-white hover:text-cyber transition-colors break-all">{value}</a>
  ) : (
    <span className="text-white">{value}</span>
  );

  return (
    <div className="flex items-start space-x-4">
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-cyber/10 border border-cyber/20">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="font-semibold">{content}</p>
      </div>
    </div>
  );
};

export const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    await new Promise(res => setTimeout(res, 1000));
    setStatus('success');
  };

  return (
    <section id="contact" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Get in Touch
          </h2>
          <div className="h-1 w-24 bg-cyber mx-auto rounded-full" />
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-cyber/20 rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT: Visit the Studio */}
            <div className="space-y-8">
              <h3 className="text-3xl font-serif font-bold text-white text-center">Visit the Studio</h3>
              
              <InfoRow icon={<MapPin size={20} className="text-cyber" />} label="Address" value={`${COMPANY_INFO.location.street}, ${COMPANY_INFO.location.city}, ${COMPANY_INFO.location.state} ${COMPANY_INFO.location.zip}`} />
              <InfoRow icon={<Phone size={20} className="text-cyber" />} label="Phone" value={COMPANY_INFO.contact.phone} href={`tel:${COMPANY_INFO.contact.phone}`} />
              <InfoRow icon={<Mail size={20} className="text-cyber" />} label="Email" value={COMPANY_INFO.contact.email} href={`mailto:${COMPANY_INFO.contact.email}`} />

              <div>
                <h4 className="text-xl font-semibold text-white mb-4 text-center">OPENING HOURS</h4>
                <ul className="space-y-2 text-sm max-w-sm mx-auto">
                  {BUSINESS_HOURS.map(item => (
                    <li key={item.day} className="flex justify-between border-b border-white/10 pb-2 last:border-none">
                      <span className="text-gray-400">{item.day}</span>
                      <span className={`font-semibold ${item.hours === 'Closed' ? 'text-red-400' : 'text-white'}`}>{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT: Join the Club */}
            <div className="bg-black/20 border border-white/10 rounded-2xl p-8 flex flex-col justify-center text-center items-center">
              <h3 className="text-3xl font-serif font-bold text-white mb-4">Join the Club</h3>
              <p className="text-gray-400 mb-6 max-w-xs">
                Subscribe for exclusive offers and priority booking slots.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-4 w-full max-w-sm">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="flex-grow w-full px-4 py-3 bg-deep-950 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyber transition-all"
                    aria-label="Email for newsletter"
                  />
                  <Button 
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === 'loading'}
                    loading={status === 'loading'}
                  >
                    {status === 'success' ? 'Subscribed!' : 'Subscribe'}
                  </Button>
                </div>
                {status === 'error' && <p className="text-sm text-red-400">Please enter a valid email.</p>}
              </form>
              
              <div className="mt-8">
                <Button variant="outline" as="link" to={APP_ROUTES.HOME} >
                    Support
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
