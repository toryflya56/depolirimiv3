import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

// ==========================================
// TYPE DEFINITIONS
// ==========================================

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

interface ButtonAsButton extends BaseButtonProps {
  as?: 'button';
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  to?: never;
}

interface ButtonAsLink extends BaseButtonProps {
  as: 'link';
  to: string;
  onClick?: never;
  type?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

// ==========================================
// VARIANT STYLES (Tailwind Classes)
// ==========================================

const variantStyles: Record<ButtonVariant, string> = {
  primary: 
    'bg-cyber text-deep-950 hover:bg-cyber-hover shadow-lg shadow-cyber/20 ' +
    'active:scale-95 disabled:bg-gray-600 disabled:text-gray-400 disabled:shadow-none',
  
  secondary: 
    'bg-deep-800 text-white hover:bg-deep-900 border border-white/10 ' +
    'active:scale-95 disabled:bg-gray-800 disabled:text-gray-500',
  
  outline: 
    'bg-transparent text-cyber border-2 border-cyber hover:bg-cyber hover:text-deep-950 ' +
    'active:scale-95 disabled:border-gray-600 disabled:text-gray-600',
  
  ghost: 
    'bg-transparent text-white hover:bg-white/10 ' +
    'active:scale-95 disabled:text-gray-600',
  
  danger: 
    'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/20 ' +
    'active:scale-95 disabled:bg-gray-600 disabled:text-gray-400',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

// ==========================================
// COMPONENT
// ==========================================

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'left',
  ...props
}) => {
  
  // Base styles (common to all variants)
  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2',
    'font-semibold tracking-wide uppercase',
    'rounded-lg transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber focus-visible:ring-offset-2 focus-visible:ring-offset-deep-950',
    'disabled:cursor-not-allowed disabled:opacity-50',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    className
  );

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg
      className="animate-spin h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  // Content wrapper (handles icon positioning)
  const content = (
    <>
      {loading && <LoadingSpinner />}
      {!loading && icon && iconPosition === 'left' && icon}
      <span>{children}</span>
      {!loading && icon && iconPosition === 'right' && icon}
    </>
  );

  // ==========================================
  // RENDER: Link vs Button
  // ==========================================

  if (props.as === 'link') {
    return (
      <Link
        to={props.to}
        className={baseStyles}
        aria-disabled={disabled || loading}
        tabIndex={disabled || loading ? -1 : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={disabled || loading}
      className={baseStyles}
      aria-busy={loading}
    >
      {content}
    </button>
  );
};