import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { COMPANY_INFO, BUSINESS_HOURS } from '../../../lib/constants';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API network latency
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormState('success');
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-deep-900/50 border-t border-white/5"
      aria-label="Contact and Location"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT COLUMN: Info & Context */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-serif text-white mb-6">Visit the Studio</h2>
              <div className="h-1 w-20 bg-cyber rounded-full mb-8" />
              <p className="text-gray-400 text-lg leading-relaxed">
                Located in the heart of {COMPANY_INFO.location.district}. 
                We accept walk-ins based on availability, but booking in advance is highly recommended.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Address Card */}
              <div className="bg-deep-950 p-6 rounded-2xl border border-white/5 flex gap-4">
                <div className="w-12 h-12 bg-cyber/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-cyber" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Location</h4>
                  <address className="text-gray-400 not-italic text-sm">
                    {COMPANY_INFO.location.street}<br />
                    {COMPANY_INFO.location.city}, {COMPANY_INFO.location.state}
                  </address>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-deep-950 p-6 rounded-2xl border border-white/5 flex gap-4">
                <div className="w-12 h-12 bg-cyber/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="text-cyber" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Hours</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    {BUSINESS_HOURS.map((t) => (
                      <li key={t.day} className="flex justify-between w-full gap-4">
                        <span>{t.day.split(' ')[0]}</span>
                        <span className="text-white">{t.hours.replace('10:00 AM - 8:00 PM', '10-8')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Form */}
          <div className="bg-deep-950 p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Success Overlay */}
            {formState === 'success' && (
              <div className="absolute inset-0 z-20 bg-deep-950 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-green-500" size={40} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">Message Sent</h3>
                <p className="text-gray-400">We'll get back to you shortly.</p>
                <Button 
                  variant="outline" 
                  className="mt-8"
                  onClick={() => setFormState('idle')}
                >
                  Send Another
                </Button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <h3 className="text-2xl font-serif text-white mb-6">Get in Touch</h3>
              
              {/* Input Group: Name */}
              <div className="group relative">
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-deep-900 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white outline-none focus:border-cyber transition-all peer placeholder-transparent"
                  placeholder="Your Name"
                />
                <label 
                  htmlFor="name"
                  className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs peer-focus:text-cyber"
                >
                  Full Name
                </label>
              </div>

              {/* Input Group: Email */}
              <div className="group relative">
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-deep-900 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white outline-none focus:border-cyber transition-all peer placeholder-transparent"
                  placeholder="email@example.com"
                />
                <label 
                  htmlFor="email"
                  className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs peer-focus:text-cyber"
                >
                  Email Address
                </label>
              </div>

              {/* Input Group: Message */}
              <div className="group relative">
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  className="w-full bg-deep-900 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white outline-none focus:border-cyber transition-all peer placeholder-transparent resize-none"
                  placeholder="Your Message"
                />
                <label 
                  htmlFor="message"
                  className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs peer-focus:text-cyber"
                >
                  How can we help?
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                isLoading={formState === 'submitting'}
                icon={<Send size={18} />}
              >
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
