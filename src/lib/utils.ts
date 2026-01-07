/**
 * UTILITY FUNCTIONS
 * =================
 * Helper functions for formatting, validation, and styling.
 */

/**
 * Formats a number into a price string.
 * Uses Intl.NumberFormat for robust internationalization.
 * @example formatPrice(55) => "$55.00"
 */
export function formatPrice(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Combines Tailwind classes safely.
 * Filters out falsey values (null, undefined, false).
 * @example cn('p-4', isMobile && 'text-sm', 'bg-red-500')
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Delays execution (Useful for simulating API calls in demos).
 * @param ms milliseconds
 */
export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Validates an email address format.
 * @param email 
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
