/* eslint-disable no-unused-vars */

// ==========================================
// GENERIC & UTILITY TYPES
// ==========================================

/**
 * @description Represents a generic API response structure.
 * @template T - The type of the data payload.
 */
export interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
  statusCode: number;
}

/**
 * @description Makes specific fields of an interface optional.
 * @template T - The original type.
 * @template K - The keys to make optional.
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;


// ==========================================
// APPLICATION-SPECIFIC TYPES
// ==========================================

/**
 * @description Defines the structure for a user object.
 */
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatarUrl?: string;
  createdAt: string;
}

/**
 * @description Represents a booking or appointment.
 */
export interface Booking {
  id: string;
  userId: string;
  serviceId: string;
  startTime: string; // ISO 8601 format
  endTime: string;   // ISO 8601 format
  status: 'confirmed' | 'pending' | 'cancelled';
  notes?: string;
}

/**
 * @description Defines a service offered by the studio.
 */
export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number;
  imageUrl: string;
}

/**
 * @description Represents different states for data fetching operations.
 */
export type FetchStatus = 'idle' | 'loading' | 'succeeded' | 'failed';
