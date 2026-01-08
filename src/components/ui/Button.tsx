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
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  type?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

// ==========================================
// VARIANT STYLES (Tailwind Classes)
// ==========================================

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-cyber text-deep-950 font-bold shadow-[0_0_20px_rgba(0,212,255,0.4)] ' +
    'hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] ' +
    'active:scale-95 disabled:bg-gray-600 disabled:text-gray-400 disabled:shadow-none',
  
  secondary: 
    'bg-deep-800 text-white hover:bg-deep-700 border border-white/10 ' +
    'active:scale-95 disabled:bg-gray-800 disabled:text-gray-500',
  
  outline: 
    'bg-transparent text-white border-2 border-cyber/30 ' +
    'hover:bg-cyber/10 hover:border-cyber hover:text-cyber ' +
    'active:scale-95 disabled:border-gray-600 disabled:text-gray-600',
  
  ghost: 
    'bg-transparent text-white hover:bg-white/10 ' +
    'active:scale-95 disabled:text-gray-600',
  
  danger: 
    'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/20 ' +
    'active:scale-95 disabled:bg-gray-600 disabled:text-gray-400',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-3.5 text-lg',
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
  
  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2.5',
    'font-semibold tracking-wider',
    'rounded-md',
    'transition-all duration-300 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber focus-visible:ring-offset-2 focus-visible:ring-offset-deep-950',
    'disabled:cursor-not-allowed disabled:opacity-60',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    loading && 'cursor-wait',
    className
  );

  const LoadingSpinner = () => (
    <svg
      className="animate-spin h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const content = (
    <>
      {loading && <LoadingSpinner />}
      {!loading && icon && iconPosition === 'left' && icon}
      <span className={cn('truncate', loading && 'opacity-0')}>{children}</span>
      {!loading && icon && iconPosition === 'right' && icon}
    </>
  );

  if (props.as === 'link') {
    const { to, onClick } = props as ButtonAsLink;
    return (
      <Link
        to={to}
        className={baseStyles}
        aria-disabled={disabled || loading}
        tabIndex={disabled || loading ? -1 : undefined}
        onClick={(e) => {
          if (disabled || loading) {
            e.preventDefault();
            return;
          }
          if (onClick) {
            onClick(e);
          }
        }}
      >
        {content}
      </Link>
    );
  }

  const { onClick, type } = props as ButtonAsButton;
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseStyles}
      aria-busy={loading}
    >
      {content}
    </button>
  );
};
