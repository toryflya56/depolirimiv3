import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * UTILITY: Class Name Merger
 * ===========================
 * Combines Tailwind classes intelligently, resolving conflicts.
 * Example: cn('px-2 py-1', 'px-4') => 'py-1 px-4' (px-4 wins)
 * 
 * @param inputs - Array of class strings or conditional objects
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * VALIDATION: Email Format
 * =========================
 * RFC 5322 compliant email validation
 * 
 * @param email - Email string to validate
 * @returns true if valid email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * VALIDATION: Phone Number (US Format)
 * =====================================
 * Accepts formats: (555) 123-4567, 555-123-4567, 5551234567
 * 
 * @param phone - Phone string to validate
 * @returns true if valid US phone format
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * FORMATTING: Currency
 * ====================
 * Converts number to USD currency format
 * 
 * @param amount - Numeric amount
 * @returns Formatted string like "$45.00"
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

/**
 * FORMATTING: Date to Human Readable
 * ===================================
 * Converts ISO date to readable format
 * 
 * @param date - Date object or ISO string
 * @returns Formatted string like "January 15, 2025"
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

/**
 * SECURITY: Sanitize HTML Input
 * ==============================
 * Prevents XSS by escaping HTML special characters
 * 
 * @param str - Potentially unsafe string
 * @returns Escaped safe string
 */
export function sanitizeHTML(str: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  return str.replace(/[&<>"'/]/g, (char) => map[char]);
}

/**
 * PERFORMANCE: Debounce Function
 * ===============================
 * Delays function execution until after specified time has elapsed
 * since last call. Essential for search inputs, scroll handlers.
 * 
 * @param func - Function to debounce
 * @param wait - Milliseconds to wait
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * ACCESSIBILITY: Generate Unique ID
 * ==================================
 * Creates unique IDs for ARIA labels and form associations
 * 
 * @param prefix - Optional prefix for the ID
 * @returns Unique string like "input-abc123"
 */
export function generateId(prefix: string = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}
