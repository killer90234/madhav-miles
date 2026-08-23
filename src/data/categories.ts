import { img } from '@/lib/images';
import type { HolidayCategoryCard } from '@/types';

/** Holiday-type entry points used on the home page and in the mega menu. */
export const holidayCategories: HolidayCategoryCard[] = [
  {
    slug: 'honeymoon',
    title: 'Honeymoon',
    description: 'Private villas, quiet beaches and a pace that belongs to the two of you.',
    image: img('cat-honeymoon', 'card'),
    href: '/packages?category=honeymoon',
  },
  {
    slug: 'family',
    title: 'Family Holidays',
    description: 'Shorter drives, rooms that work for four, and something for every age.',
    image: img('cat-family', 'card'),
    href: '/packages?category=family',
  },
  {
    slug: 'luxury',
    title: 'Luxury',
    description: 'Heritage palaces, overwater villas and service that anticipates you.',
    image: img('cat-luxury', 'card'),
    href: '/packages?category=luxury',
  },
  {
    slug: 'adventure',
    title: 'Adventure',
    description: 'Rafting, diving, treks and the kind of days you talk about afterwards.',
    image: img('cat-adventure', 'card'),
    href: '/packages?category=adventure',
  },
  {
    slug: 'weekend',
    title: 'Weekend Getaways',
    description: 'Three or four nights, close to home, no leave application required.',
    image: img('cat-weekend', 'card'),
    href: '/packages?category=weekend',
  },
  {
    slug: 'group',
    title: 'Group Departures',
    description: 'Fixed dates, shared costs and a tour manager who handles the logistics.',
    image: img('cat-group', 'card'),
    href: '/fixed-departures',
  },
];

export const regionCategories: HolidayCategoryCard[] = [
  {
    slug: 'domestic',
    title: 'India',
    description: 'From Kashmir\'s meadows to Kerala\'s backwaters — no visa, no jet lag.',
    image: img('region-domestic', 'card'),
    href: '/destinations?region=domestic',
  },
  {
    slug: 'international',
    title: 'International',
    description: 'Dubai, Bali, Thailand, the Maldives and Europe, with visas handled.',
    image: img('region-international', 'card'),
    href: '/destinations?region=international',
  },
];

/** Filter option lists — kept here so pages and URL filters stay in sync. */
export const durationFilters = [
  { label: 'Up to 3 nights', value: '0-3' },
  { label: '4 to 6 nights', value: '4-6' },
  { label: '7 to 9 nights', value: '7-9' },
  { label: '10 nights and above', value: '10-99' },
] as const;

export const budgetFilters = [
  { label: 'Under ₹25,000', value: '0-25000' },
  { label: '₹25,000 – ₹50,000', value: '25000-50000' },
  { label: '₹50,000 – ₹1,00,000', value: '50000-100000' },
  { label: 'Above ₹1,00,000', value: '100000-9999999' },
] as const;

export const sortOptions = [
  { label: 'Recommended', value: 'recommended' },
  { label: 'Price: low to high', value: 'price-asc' },
  { label: 'Price: high to low', value: 'price-desc' },
  { label: 'Duration: short to long', value: 'duration-asc' },
  { label: 'Highest rated', value: 'rating-desc' },
  { label: 'Newest first', value: 'newest' },
] as const;

export type SortOption = (typeof sortOptions)[number]['value'];
