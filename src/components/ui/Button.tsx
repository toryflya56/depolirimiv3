import React from 'react';
import { Link } from 'react-router-dom';
import { Loader2, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

// ==========================================
// TYPES
// ==========================================

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: React.ReactNode;
  href?: string; // If provided, renders as a generic <a>
  to?: string;   // If provided, renders as a React Router <Link>
}

// ==========================================
// COMPONENT
// ==========================================

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  href,
  to,
  disabled,
  ...props
}) => {
  // 1. Base Styles (Applied to all buttons)
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber/50 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

  // 2. Variants (The "Look")
  const variants = {
    primary: "bg-cyber text-deep-950 hover:bg-cyber-hover shadow-[0_0_15px_rgba(0,224,255,0.3)] hover:shadow-[0_0_25px_rgba(0,224,255,0.5)] border border-transparent",
    secondary: "bg-deep-800 text-white hover:bg-deep-900 border border-cyber/20 hover:border-cyber/50",
    outline: "bg-transparent text-cyber border border-cyber hover:bg-cyber/10",
    ghost: "bg-transparent text-gray-400 hover:text-cyber hover:bg-white/5"
  };

  // 3. Sizes (The "Dimensions")
  const sizes = {
    sm: "text-sm px-4 py-2 gap-2",
    md: "text-base px-6 py-3 gap-3",
    lg: "text-lg px-8 py-4 gap-4"
  };

  // Merge classes safely
  const combinedClassName = cn(
    baseStyles, 
    variants[variant], 
    sizes[size], 
    className
  );

  // Content Renderer (Text + Icons)
  const content = (
    <>
      {isLoading && <Loader2 className="animate-spin" size={size === 'sm' ? 14 : 18} />}
      {!isLoading && icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {!isLoading && variant === 'primary' && !icon && (
        <ChevronRight size={16} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
      )}
    </>
  );

  // CASE 1: External Link or Anchor
  if (href) {
    return (
      <a href={href} className={cn(combinedClassName, "group")} role="button">
        {content}
      </a>
    );
  }

  // CASE 2: Internal React Router Link
  if (to) {
    return (
      <Link to={to} className={cn(combinedClassName, "group")}>
        {content}
      </Link>
    );
  }

  // CASE 3: Standard Button
  return (
    <button
      className={cn(combinedClassName, "group")}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {content}
    </button>
  );
};
