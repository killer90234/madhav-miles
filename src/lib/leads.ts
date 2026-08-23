import type { EnquiryPayload, LeadMeta, TripPlannerPayload } from '@/types';

/**
 * Lead assembly and validation.
 *
 * Pure functions only — no network, no DOM — so they run on both the client
 * (before submit) and an API route (before persisting). Validation is
 * intentionally stricter than HTML5: phone must be a plausible Indian mobile,
 * and every payload carries full attribution metadata.
 */

export type ValidationResult =
  | { valid: true }
  | { valid: false; errors: Record<string, string> };

/** Normalises common Indian number formats to 10 digits. */
export function normalizePhone(raw: string): string {
  return raw.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '').slice(-10);
}

export function isValidPhone(raw: string): boolean {
  return /^[6-9]\d{9}$/.test(normalizePhone(raw));
}

export function isValidEmail(raw: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(raw.trim());
}

/** Human-readable lead reference for CRM threads, e.g. MM-250823-K4T9. */
export function generateReference(): string {
  const stamp = new Date().toISOString().slice(2, 10).replace(/-/g, '');
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `MM-${stamp}-${rand}`;
}

function deviceType(userAgent: string): LeadMeta['device'] {
  if (/tablet|ipad/i.test(userAgent)) return 'tablet';
  if (/mobi|android|iphone/i.test(userAgent)) return 'mobile';
  return 'desktop';
}

/**
 * Builds attribution metadata from browser context. Call this in form
 * components right before submission; on the server it falls back safely.
 */
export function buildLeadMeta(input: {
  source: string;
  landingPage?: string;
  destination?: string;
  packageSlug?: string;
}): LeadMeta {
  const isBrowser = typeof window !== 'undefined';
  return {
    source: input.source,
    campaign: isBrowser ? new URLSearchParams(window.location.search).get('utm_campaign') ?? undefined : undefined,
    landingPage: input.landingPage ?? (isBrowser ? window.location.href : ''),
    destination: input.destination,
    package: input.packageSlug,
    device: isBrowser ? deviceType(window.navigator.userAgent) : 'desktop',
    timestamp: new Date().toISOString(),
  };
}

const baseFields = (name: string, phone: string, email: string) => {
  const errors: Record<string, string> = {};
  if (!name.trim() || name.trim().length < 2) errors.name = 'Please enter your name';
  if (!isValidPhone(phone)) errors.phone = 'Please enter a valid 10-digit mobile number';
  if (!isValidEmail(email)) errors.email = 'Please enter a valid email address';
  return errors;
};

export function validateEnquiry(payload: EnquiryPayload): ValidationResult {
  const errors = baseFields(payload.name, payload.phone, payload.email);
  if (payload.message && payload.message.length > 2000) {
    errors.message = 'Message is too long';
  }
  return Object.keys(errors).length > 0 ? { valid: false, errors } : { valid: true };
}

export function validateTripPlanner(payload: TripPlannerPayload): ValidationResult {
  const errors = baseFields(payload.name, payload.phone, payload.email);
  if (!payload.destination.trim()) errors.destination = 'Please choose a destination';
  if (!payload.travelDate) errors.travelDate = 'Please pick a travel date';
  else if (new Date(payload.travelDate) < new Date(new Date().toDateString())) {
    errors.travelDate = 'Travel date cannot be in the past';
  }
  if (!Number.isFinite(payload.adults) || payload.adults < 1) {
    errors.adults = 'At least one adult traveller is required';
  }
  if (payload.children < 0 || !Number.isFinite(payload.children)) {
    errors.children = 'Children count is invalid';
  }
  return Object.keys(errors).length > 0 ? { valid: false, errors } : { valid: true };
}
