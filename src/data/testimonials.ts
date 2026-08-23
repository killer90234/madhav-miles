import type { Testimonial } from '@/types';

/**
 * PLACEHOLDER CONTENT — DO NOT SHIP AS-IS.
 *
 * These entries exist so testimonial components can be built and reviewed.
 * They are illustrative samples, not real customer reviews. Before launch they
 * must be replaced with genuine, consented feedback (PRD 16, 24, 81); leaving
 * invented reviews live would be a false claim about the business.
 */
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sample review — Kashmir',
    destination: 'Kashmir',
    tripType: 'Family holiday',
    rating: 5,
    quote:
      'Placeholder testimonial text. Replace with a real, consented customer review before launch.',
    verified: false,
  },
  {
    id: 'testimonial-2',
    name: 'Sample review — Bali',
    destination: 'Bali',
    tripType: 'Honeymoon',
    rating: 5,
    quote:
      'Placeholder testimonial text. Replace with a real, consented customer review before launch.',
    verified: false,
  },
  {
    id: 'testimonial-3',
    name: 'Sample review — Kerala',
    destination: 'Kerala',
    tripType: 'Family holiday',
    rating: 4,
    quote:
      'Placeholder testimonial text. Replace with a real, consented customer review before launch.',
    verified: false,
  },
  {
    id: 'testimonial-4',
    name: 'Sample review — Dubai',
    destination: 'Dubai',
    tripType: 'Group trip',
    rating: 5,
    quote:
      'Placeholder testimonial text. Replace with a real, consented customer review before launch.',
    verified: false,
  },
  {
    id: 'testimonial-5',
    name: 'Sample review — Andaman',
    destination: 'Andaman',
    tripType: 'Honeymoon',
    rating: 5,
    quote:
      'Placeholder testimonial text. Replace with a real, consented customer review before launch.',
    verified: false,
  },
  {
    id: 'testimonial-6',
    name: 'Sample review — Europe',
    destination: 'Europe',
    tripType: 'Group departure',
    rating: 4,
    quote:
      'Placeholder testimonial text. Replace with a real, consented customer review before launch.',
    verified: false,
  },
];

/**
 * True only when real, consented testimonials have replaced the placeholders.
 * Components should hide testimonial sections (and omit review structured data)
 * while this is false, so the site never displays invented social proof.
 */
export const testimonialsAreVerified = false;
