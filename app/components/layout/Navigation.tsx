import React from 'react';
import { NavLink } from 'react-router-dom';
import { APP_ROUTES } from '@/lib/constants';

const navLinks = [
  { name: 'Home', to: APP_ROUTES.HOME },
  { name: 'Services', to: APP_ROUTES.SERVICES },
  { name: 'Our Team', to: APP_ROUTES.ABOUT },
  { name: 'Contact', to: APP_ROUTES.CONTACT },
];

export const Navigation: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.to}
          className={({ isActive }) =>
            `font-medium text-gray-300 hover:text-cyber transition-colors ${
              isActive ? 'text-cyber' : ''
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};
