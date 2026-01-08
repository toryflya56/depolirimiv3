import React from 'react';
import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-cyber text-deep-900 hover:bg-cyber/90',
  secondary: 'bg-deep-700 text-white hover:bg-deep-600',
  ghost: 'bg-transparent text-cyber hover:bg-cyber/10',
};

const sizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg font-semibold',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button' | 'link';
  to?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
    as = 'button', 
    to, 
    variant = 'primary', 
    size = 'md', 
    children, 
    className = '', 
    ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cyber focus:ring-offset-2 focus:ring-offset-deep-900 disabled:opacity-50 disabled:pointer-events-none';
  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (as === 'link') {
    if (!to) {
      console.error('Button component with "as=link" requires a "to" prop.');
      return null;
    }
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
