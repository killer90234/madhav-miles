import { img } from '@/lib/images';
import type { FixedDeparture } from '@/types';

/**
 * Group departures on set dates.
 *
 * Dates and seat counts here are sample scheduling data for the launch build —
 * they must be replaced with the real departure calendar before go-live, since
 * showing unavailable departures as bookable would mislead customers.
 * `getUpcomingDepartures()` filters out anything already in the past.
 */
export const fixedDepartures: FixedDeparture[] = [
  {
    id: 'fd-europe-may',
    slug: 'europe-classic-group-may',
    destinationId: 'dest-europe',
    title: 'Classic Europe group departure',
    departureDate: '2026-05-14',
    departureCity: 'Mumbai',
    duration: 9,
    startingPrice: 149000,
    seatsAvailable: 8,
    tourType: 'Escorted group tour with tour manager',
    image: img('fd-europe-may', 'card'),
  },
  {
    id: 'fd-europe-june',
    slug: 'europe-classic-group-june',
    destinationId: 'dest-europe',
    title: 'Classic Europe group departure',
    departureDate: '2026-06-11',
    departureCity: 'Delhi',
    duration: 9,
    startingPrice: 152000,
    seatsAvailable: 14,
    tourType: 'Escorted group tour with tour manager',
    image: img('fd-europe-june', 'card'),
  },
  {
    id: 'fd-kashmir-april',
    slug: 'kashmir-tulip-season-group',
    destinationId: 'dest-kashmir',
    title: 'Kashmir tulip season group tour',
    departureDate: '2026-04-08',
    departureCity: 'Delhi',
    duration: 5,
    startingPrice: 27900,
    seatsAvailable: 6,
    tourType: 'Small group, maximum 16 travellers',
    image: img('fd-kashmir-april', 'card'),
  },
  {
    id: 'fd-ladakh-july',
    slug: 'leh-ladakh-group-july',
    destinationId: 'dest-himachal',
    title: 'Leh Ladakh overland group tour',
    departureDate: '2026-07-05',
    departureCity: 'Manali',
    duration: 7,
    startingPrice: 38900,
    seatsAvailable: 4,
    tourType: 'Overland group tour with support vehicle',
    image: img('fd-ladakh-july', 'card'),
  },
  {
    id: 'fd-bali-september',
    slug: 'bali-group-september',
    destinationId: 'dest-bali',
    title: 'Bali group departure',
    departureDate: '2026-09-19',
    departureCity: 'Mumbai',
    duration: 6,
    startingPrice: 54900,
    seatsAvailable: 12,
    tourType: 'Group tour with local guide',
    image: img('fd-bali-september', 'card'),
  },
  {
    id: 'fd-vietnam-october',
    slug: 'vietnam-group-october',
    destinationId: 'dest-vietnam',
    title: 'Vietnam north and central group tour',
    departureDate: '2026-10-10',
    departureCity: 'Delhi',
    duration: 6,
    startingPrice: 46900,
    seatsAvailable: 10,
    tourType: 'Escorted group tour with tour manager',
    image: img('fd-vietnam-october', 'card'),
  },
  {
    id: 'fd-rajasthan-november',
    slug: 'rajasthan-heritage-group-november',
    destinationId: 'dest-rajasthan',
    title: 'Rajasthan heritage group tour',
    departureDate: '2026-11-07',
    departureCity: 'Jaipur',
    duration: 6,
    startingPrice: 34900,
    seatsAvailable: 16,
    tourType: 'Small group, maximum 18 travellers',
    image: img('fd-rajasthan-november', 'card'),
  },
  {
    id: 'fd-andaman-december',
    slug: 'andaman-group-december',
    destinationId: 'dest-andaman',
    title: 'Andaman islands group departure',
    departureDate: '2026-12-20',
    departureCity: 'Chennai',
    duration: 5,
    startingPrice: 31900,
    seatsAvailable: 9,
    tourType: 'Group tour with local coordinator',
    image: img('fd-andaman-december', 'card'),
  },
];

/** Departures that have not yet left, sorted soonest first. */
export function getUpcomingDepartures(now: Date = new Date()): FixedDeparture[] {
  return fixedDepartures
    .filter((departure) => new Date(departure.departureDate).getTime() >= now.getTime())
    .sort(
      (a, b) => new Date(a.departureDate).getTime() - new Date(b.departureDate).getTime(),
    );
}
