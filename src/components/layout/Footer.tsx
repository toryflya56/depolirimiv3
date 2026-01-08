import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Scissors } from 'lucide-react';
import { COMPANY_INFO, APP_ROUTES } from '../../lib/constants';

const FooterLink: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => (
  <Link to={to} className="text-sm text-gray-400 hover:text-white transition-colors">
    {children}
  </Link>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: COMPANY_INFO.social.instagram, Icon: Instagram, name: 'Instagram' },
    { href: COMPANY_INFO.social.twitter, Icon: Twitter, name: 'Twitter' },
    { href: COMPANY_INFO.social.facebook, Icon: Facebook, name: 'Facebook' },
  ];

  const footerSections = [
    {
      title: 'About',
      links: [
        { text: 'Our Story', to: APP_ROUTES.HOME },
        { text: 'The Barbers', to: APP_ROUTES.HOME },
        { text: 'Careers', to: APP_ROUTES.HOME },
      ]
    },
    {
      title: 'Services',
      links: [
        { text: 'Haircuts & Fades', to: APP_ROUTES.SERVICES },
        { text: 'Classic Shaves', to: APP_ROUTES.SERVICES },
        { text: 'Color & Styling', to: APP_ROUTES.SERVICES },
      ]
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', to: APP_ROUTES.HOME },
        { text: 'Terms of Service', to: APP_ROUTES.HOME },
      ]
    }
  ];

  return (
    <footer className="bg-deep-950 border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        
        {/* Top section: Brand + Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Branding */}
          <div className="md:col-span-1">
             <Link to={APP_ROUTES.HOME} className="flex items-center gap-2 mb-3" aria-label="Lirimi Studio Home">
              <Scissors className="text-cyber" size={24} />
              <span className="text-xl font-serif font-bold text-white tracking-wider">LIRIMI</span>
            </Link>
            <p className="text-gray-400 text-sm">Sculpting confidence through precision barbering.</p>
          </div>

          {/* Spacer for alignment on medium screens */}
          <div className="hidden md:block"></div>

          {/* Links */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-white tracking-wide mb-4 uppercase text-sm">{section.title}</h4>
                <nav className="flex flex-col space-y-3">
                  {section.links.map((link) => (
                    <FooterLink key={link.text} to={link.to}>{link.text}</FooterLink>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section: Copyright + Socials */}
        <div className="pt-8 border-t border-white/10 flex flex-col-reverse gap-6 md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} Lirimi Barber Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map(({ href, Icon, name }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label={name}>
                <Icon size={20}/>
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
