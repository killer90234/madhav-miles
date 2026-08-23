import { img } from '@/lib/images';
import type { Offer } from '@/types';

/**
 * Promotional offers. `validTill` is checked at render time so expired offers
 * can be filtered out rather than silently shown as live.
 */
export const offers: Offer[] = [
  {
    id: 'offer-goa-monsoon',
    slug: 'goa-early-bird',
    title: 'Goa early-bird saving',
    destinationId: 'dest-goa',
    packageSlug: 'goa-beach-escape-3-nights',
    description:
      'Book at least 30 days ahead on the 3-night Goa Beach Escape and we pass on the advance-purchase hotel rate.',
    image: img('offer-goa', 'wide'),
    oldPrice: 19900,
    newPrice: 16500,
    validTill: '2026-12-31',
    badge: 'Early bird',
  },
  {
    id: 'offer-kashmir-shoulder',
    slug: 'kashmir-shoulder-season',
    title: 'Kashmir shoulder-season rate',
    destinationId: 'dest-kashmir',
    packageSlug: 'kashmir-valley-classic-5-nights',
    description:
      'Travel in the quieter weeks either side of peak season and the same 5-night valley itinerary costs noticeably less.',
    image: img('offer-kashmir', 'wide'),
    oldPrice: 28900,
    newPrice: 24900,
    validTill: '2026-12-31',
    badge: 'Save ₹4,000',
  },
  {
    id: 'offer-kerala-couple',
    slug: 'kerala-houseboat-upgrade',
    title: 'Kerala houseboat upgrade',
    destinationId: 'dest-kerala',
    packageSlug: 'kerala-backwaters-and-hills-5-nights',
    description:
      'Complimentary upgrade to a private deluxe houseboat on the 5-night Kerala itinerary, subject to availability.',
    image: img('offer-kerala', 'wide'),
    oldPrice: 25500,
    newPrice: 21500,
    validTill: '2026-12-31',
    badge: 'Free upgrade',
  },
  {
    id: 'offer-dubai-visa',
    slug: 'dubai-visa-assistance-free',
    title: 'Dubai with visa assistance included',
    destinationId: 'dest-dubai',
    packageSlug: 'dubai-premium-holiday-4-nights',
    description:
      'Our visa processing service charge is waived on the 4-night Dubai package. Government visa fees still apply at actuals.',
    image: img('offer-dubai', 'wide'),
    oldPrice: 54900,
    newPrice: 46500,
    validTill: '2026-12-31',
    badge: 'Visa assistance free',
  },
  {
    id: 'offer-bali-villa',
    slug: 'bali-honeymoon-villa',
    title: 'Bali honeymoon villa saving',
    destinationId: 'dest-bali',
    packageSlug: 'bali-6-nights-7-days',
    description:
      'Private-pool villa nights in Ubud at the standard room rate, with a floating breakfast included once during your stay.',
    image: img('offer-bali', 'wide'),
    oldPrice: 61500,
    newPrice: 52900,
    validTill: '2026-12-31',
    badge: 'Honeymoon special',
  },
  {
    id: 'offer-maldives-halfboard',
    slug: 'maldives-half-board-included',
    title: 'Maldives with half board included',
    destinationId: 'dest-maldives',
    packageSlug: 'maldives-overwater-honeymoon-4-nights',
    description:
      'Breakfast and dinner included on the 4-night overwater honeymoon, which is where most Maldives budgets actually go.',
    image: img('offer-maldives', 'wide'),
    oldPrice: 79900,
    newPrice: 68500,
    validTill: '2026-12-31',
    badge: 'Half board free',
  },
  {
    id: 'offer-andaman-ferry',
    slug: 'andaman-private-ferry',
    title: 'Andaman with private ferry seats',
    destinationId: 'dest-andaman',
    packageSlug: 'andaman-island-hopping-5-nights',
    description:
      'Air-conditioned private catamaran seats on every island crossing, booked in advance so nothing depends on same-day availability.',
    image: img('offer-andaman', 'wide'),
    oldPrice: 31900,
    newPrice: 27500,
    validTill: '2026-12-31',
    badge: 'Save 14%',
  },
  {
    id: 'offer-thailand-group',
    slug: 'thailand-group-of-four',
    title: 'Thailand: group-of-four rate',
    destinationId: 'dest-thailand',
    packageSlug: 'thailand-bangkok-phuket-5-nights',
    description:
      'Travelling as four or more? The per-person rate on the Bangkok and Phuket itinerary drops on shared transfers and tours.',
    image: img('offer-thailand', 'wide'),
    oldPrice: 48900,
    newPrice: 42900,
    validTill: '2026-12-31',
    badge: 'Group rate',
  },
];

/** Offers still within their validity window. */
export function getActiveOffers(now: Date = new Date()): Offer[] {
  return offers.filter((offer) => new Date(offer.validTill).getTime() >= now.getTime());
}

export function getOfferBySlug(slug: string): Offer | undefined {
  return offers.find((offer) => offer.slug === slug);
}
