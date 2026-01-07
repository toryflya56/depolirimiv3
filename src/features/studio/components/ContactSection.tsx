import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { COMPANY_INFO, BUSINESS_HOURS } from '../../../lib/constants';
import { isValidEmail, isValidPhone, sanitizeHTML } from '../../../lib/utils';

// ==========================================
// TYPE DEFINITIONS
// ==========================================

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

// ==========================================
// COMPONENT
// ==========================================

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // ==========================================
  // VALIDATION LOGIC
  // ==========================================

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ==========================================
  // EVENT HANDLERS
  // ==========================================

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({ name: true, email: true, phone: true, message: true });

    if (!validateForm()) {
      return;
    }

    setStatus('loading');

    try {
      // ENTERPRISE TODO: Replace with actual API endpoint
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Log sanitized data (production: send to backend)
      console.log('Form submitted:', {
        name: sanitizeHTML(formData.name),
        email: sanitizeHTML(formData.email),
        phone: sanitizeHTML(formData.phone),
        message: sanitizeHTML(formData.message)
      });

      setStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setStatus('idle');
        setTouched({});
      }, 3000);

    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      
      // Reset error status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <section id="contact" className="py-24 bg-deep-900/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber/10 border border-cyber/20 mb-4">
            <Mail className="text-cyber" size={16} />
            <span className="text-cyber text-sm font-semibold tracking-wider uppercase">
              Get In Touch
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Visit Us or Reach Out
          </h2>
          
          <div className="h-1 w-24 bg-cyber mx-auto rounded-full mb-6" />
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Questions about our services? Want to schedule a consultation? 
            We're here to help.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* LEFT COLUMN: Contact Information */}
          <div className="space-y-8">
            
            {/* Location Card */}
            <div className="bg-deep-950/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyber/10 border border-cyber/20 flex items-center justify-center shrink-0">
                  <MapPin className="text-cyber" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Visit Our Studio</h3>
                  <address className="not-italic text-gray-400 mb-4">
                    {COMPANY_INFO.location.street}<br />
                    {COMPANY_INFO.location.district}, {COMPANY_INFO.location.city}, {COMPANY_INFO.location.state}
                  </address>
                  
                    href={COMPANY_INFO.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyber text-sm font-semibold hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-deep-950/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyber/10 border border-cyber/20 flex items-center justify-center shrink-0">
                  <Phone className="text-cyber" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Call Us</h3>
                  
                    href={`tel:${COMPANY_INFO.contact.phone}`}
                    className="text-gray-400 hover:text-cyber transition-colors text-lg"
                  >
                    {COMPANY_INFO.contact.phone}
                  </a>
                  <p className="text-gray-500 text-sm mt-2">
                    Available during business hours
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-deep-950/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyber/10 border border-cyber/20 flex items-center justify-center shrink-0">
                  <Mail className="text-cyber" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Email Us</h3>
                  
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="text-gray-400 hover:text-cyber transition-colors break-all"
                  >
                    {COMPANY_INFO.contact.email}
                  </a>
                  <p className="text-gray-500 text-sm mt-2">
                    We respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-deep-950/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyber/10 border border-cyber/20 flex items-center justify-center shrink-0">
                  <Clock className="text-cyber" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-4">Business Hours</h3>
                  <ul className="space-y-2">
                    {BUSINESS_HOURS.map((schedule, idx) => (
                      <li key={idx} className="flex justify-between text-sm border-b border-white/5 pb-2 last:border-0">
                        <span className="text-gray-400">{schedule.day}</span>
                        <span className="text-white font-medium">{schedule.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="bg-deep-950/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  className={`w-full px-4 py-3 bg-deep-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyber transition-all ${
                    touched.name && errors.name 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-white/10'
                  }`}
                  placeholder="John Doe"
                  aria-invalid={touched.name && !!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {touched.name && errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  className={`w-full px-4 py-3 bg-deep-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyber transition-all ${
                    touched.email && errors.email 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-white/10'
                  }`}
                  placeholder="john@example.com"
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {touched.email && errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={() => handleBlur('phone')}
                  className={`w-full px-4 py-3 bg-deep-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyber transition-all ${
                    touched.phone && errors.phone 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-white/10'
                  }`}
                  placeholder="(555) 123-4567"
                  aria-invalid={touched.phone && !!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {touched.phone && errors.phone && (
                  <p id="phone-error" className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  rows={5}
                  className={`w-full px-4 py-3 bg-deep-900 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyber transition-all resize-none ${
                    touched.message && errors.message 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-white/10'
                  }`}
                  placeholder="Tell us how we can help you..."
                  aria-invalid={touched.message && !!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {touched.message && errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                disabled={status === 'loading'}
                loading={status === 'loading'}
                icon={status === 'success' ? <CheckCircle size={20} /> : <Send size={20} />}
                variant={status === 'success' ? 'secondary' : 'primary'}
              >
                {status === 'loading' && 'Sending...'}
                {status === 'success' && 'Message Sent!'}
                {status === 'error' && 'Try Again'}
                {status === 'idle' && 'Send Message'}
              </Button>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start gap-3">
                  <CheckCircle className="text-green-400 shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-green-400 font-semibold">Message received!</p>
                    <p className="text-green-300/80 text-sm mt-1">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
                  <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-red-400 font-semibold">Something went wrong</p>
                    <p className="text-red-300/80 text-sm mt-1">
                      Please try again or contact us directly at {COMPANY_INFO.contact.phone}
                    </p>
                  </div>
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
