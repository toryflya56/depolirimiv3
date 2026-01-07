/**
 * LIRIMI ENTERPRISE TYPE DEFINITIONS
 * ==================================
 * Single Source of Truth (SSOT) for all data structures.
 */

// ==========================================
// 1. DOMAIN MODELS (The "Business" Data)
// ==========================================

export interface Service {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly price: number;       // Number for calculations (Total: $55 + $30)
  readonly currency: string;    // 'USD' | 'EUR'
  readonly durationMin: number; // Critical for scheduling logic
  readonly image: string;       // URL to Unsplash/Assets
}

export interface TrustedBrand {
  readonly id: string;
  readonly name: string;
  readonly logo: string;
}

export enum AppointmentStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED'
}

export interface Appointment {
  readonly id: string;
  readonly serviceId: string;
  readonly date: string;        // ISO 8601 (YYYY-MM-DD)
  readonly timeSlot: string;    // "14:00"
  status: AppointmentStatus;    // Mutable: Status changes over time
  customer: CustomerProfile;
  createdAt: number;
}

export interface CustomerProfile {
  fullName: string;
  email: string;
  phone: string;
  notes?: string;
}

// ==========================================
// 2. UI STATE MODELS (The "App" Data)
// ==========================================

export enum SidebarType {
  LEFT = 'LEFT',    // Main Navigation
  RIGHT = 'RIGHT',  // Booking Cart
  NONE = 'NONE'
}

export interface ToastNotification {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
  duration?: number;
}

export interface NavItem {
  label: string;
  path: string;
  sectionId?: string; // For scroll-to-section (e.g., #services)
}
