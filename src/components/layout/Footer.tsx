import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Scissors } from 'lucide-react';
import { COMPANY_INFO, APP_ROUTES } from '../../lib/constants';

const FooterLink: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => (
  <Link to={to} className="text-sm text-white/70 hover:text-cyber transition-colors duration-300">
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
      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center space-y-12">

        {/* Brand Section */}
        <div>
          <Link to={APP_ROUTES.HOME} className="flex items-center justify-center gap-2 mb-3 transform scale-90" aria-label="Lirimi Studio Home">
            <Scissors className="text-cyber" size={24} />
            <span className="text-xl font-serif font-bold text-white tracking-wider">LIRIMI</span>
          </Link>
          <p className="text-white/70 text-sm max-w-xs font-sans">Sculpting confidence through precision barbering.</p>
        </div>

        {/* Links Section */}
        <nav className="flex flex-col sm:flex-row sm:justify-center gap-8 sm:gap-16 w-full">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white tracking-wide mb-4 text-base">{section.title}</h4>
              <div className="flex flex-col space-y-3">
                {section.links.map((link) => (
                  <FooterLink key={link.text} to={link.to}>{link.text}</FooterLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom section: Copyright + Socials */}
        <div className="pt-8 border-t border-white/10 w-full max-w-xs flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map(({ href, Icon, name }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyber transition-colors duration-300" aria-label={name}>
                <Icon size={20}/>
              </a>
            ))}
          </div>
          <p className="text-white/50 text-xs">
            &copy; {currentYear} Lirimi Barber Studio. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
