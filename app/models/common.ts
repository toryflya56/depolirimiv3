/* eslint-disable no-unused-vars */

// ==========================================
// GENERIC & UTILITY TYPES
// ==========================================

/**
 * Represents a standard API response structure, providing a consistent way to handle server responses.
 * @template T - The type of the data payload in a successful response.
 */
export interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
  statusCode: number;
}

/**
 * A utility type that makes specified fields of a type optional.
 * @template T - The original type.
 * @template K - The keys of T to be made optional.
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Represents the possible states of any asynchronous data fetching operation.
 */
export type FetchStatus = 'idle' | 'loading' | 'succeeded' | 'failed';


// ==========================================
// APPLICATION-SPECIFIC MODELS
// ==========================================

/**
 * Defines the structure for a user, typically the customer making a booking.
 */
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatarUrl?: string;
  createdAt: string; // ISO 8601 format
}

/**
 * Defines a service offered by the barber studio.
 */
export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // Duration in minutes
  price: number; // Price in USD
  imageUrl: string;
}

/**
 * Represents a barber available for booking.
 */
export interface Barber {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
  availability: Record<string, string[]>; // e.g., {'2024-12-25': ['09:00', '10:00']}
}

/**
 * Represents a booking, which is the core transaction of the application.
 * This can be a complete record from the database or a draft being built by the user.
 */
export interface Booking {
  id: string;
  user: Partial<User>; // User info might be partial during booking creation
  service: Service | null;
  barber: Barber | null;
  startTime: string | null; // ISO 8601 format, null during creation
  endTime: string | null;   // ISO 8601 format, null during creation
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  notes?: string;
  createdAt: string; // ISO 8601 format
}

/**
 * Represents a specific time slot available for booking.
 */
export interface TimeSlot {
  time: string; // e.g., '09:00'
  isAvailable: boolean;
}
