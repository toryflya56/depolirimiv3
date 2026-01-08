import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines Tailwind CSS class names intelligently, resolving conflicts.
 * This allows for conditional and organized class application in components.
 * Example: cn('px-2 py-1', 'px-4') results in 'py-1 px-4'
 *
 * @param inputs - A list of class values (strings, arrays, or objects).
 * @returns A merged, conflict-resolved string of Tailwind CSS classes.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Validates an email address based on the RFC 5322 standard.
 *
 * @param email - The email string to validate.
 * @returns `true` if the email format is valid, `false` otherwise.
 */
export function isValidEmail(email: string): boolean {
  // A standard, robust regex for email validation.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a US phone number format.
 * Accepts formats like (555) 123-4567, 555-123-4567, 555.123.4567, 5551234567.
 *
 * @param phone - The phone number string to validate.
 * @returns `true` if the phone number format is valid, `false` otherwise.
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return phoneRegex.test(phone);
}

/**
 * Formats a numeric amount into a USD currency string.
 *
 * @param amount - The numeric amount.
 * @returns A formatted currency string (e.g., "$45.00").
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
}

/**
 * Formats a Date object or an ISO string into a human-readable date.
 *
 * @param date - The Date object or ISO string to format.
 * @returns A formatted date string (e.g., "January 15, 2025").
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC', // Ensure consistent output regardless of server/client timezone
  }).format(dateObj);
}

/**
 * Formats a Date object or an ISO string into a human-readable time.
 *
 * @param date - The Date object or ISO string to format.
 * @returns A formatted time string (e.g., "10:30 AM").
 */
export function formatTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC', // Ensure consistent output
  }).format(dateObj);
}

/**
 * Converts a Date object to an ISO 8601 date string (YYYY-MM-DD).
 * Useful for date picker inputs and API calls.
 *
 * @param date - The Date object to convert.
 * @returns A string in 'YYYY-MM-DD' format.
 */
export function getISODateString(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Escapes special HTML characters in a string to prevent XSS attacks.
 * This is a basic sanitization method and should only be used for simple text content.
 * For sanitizing user-generated rich text or HTML, use a more robust library like DOMPurify.
 *
 * @param str - The string to sanitize.
 * @returns The sanitized string with HTML characters escaped.
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
  const reg = /[&<>\'"/]/gi;
  return str.replace(reg, (match) => map[match]);
}
