import type { Experience, FAQ, HotelOption, PriceVariant } from '@/types';
import { img } from '@/lib/images';

/**
 * Shared building blocks for the package catalogue.
 * Keeping common inclusions/exclusions/FAQs here means editors change one list
 * instead of every package, and it mirrors how a CMS would model reusable
 * "global content" blocks.
 */

export const DOMESTIC_INCLUSIONS = [
  'Hotel accommodation on twin-sharing basis',
  'Daily breakfast at the hotel',
  'Private air-conditioned vehicle for all transfers and sightseeing',
  'All applicable toll, parking and driver allowances',
  'Sightseeing as listed in the day-wise itinerary',
  'Local assistance on call throughout the trip',
  'All applicable taxes',
];

export const INTERNATIONAL_INCLUSIONS = [
  'Hotel accommodation on twin-sharing basis',
  'Daily breakfast at the hotel',
  'Airport pickup and drop on a shared or private basis',
  'Sightseeing and entry tickets as listed in the itinerary',
  'English-speaking local guide where mentioned',
  'Visa processing assistance and documentation support',
  'Local assistance on WhatsApp through your stay',
];

export const DOMESTIC_EXCLUSIONS = [
  'Airfare or train fare unless specifically mentioned',
  'Lunch and dinner unless mentioned in inclusions',
  'Monument entry fees and camera charges',
  'Adventure activities and optional excursions',
  'Travel insurance',
  'Personal expenses such as laundry, tips and telephone calls',
  'Anything not listed under inclusions',
];

export const INTERNATIONAL_EXCLUSIONS = [
  'International airfare',
  'Visa fees (assistance is included, fees are payable separately)',
  'Lunch and dinner unless mentioned in inclusions',
  'Travel insurance',
  'Tourism or city taxes payable directly at the hotel',
  'Optional tours, tips and personal expenses',
  'Anything not listed under inclusions',
];

/** FAQs that apply to every package regardless of destination. */
export const COMMON_PACKAGE_FAQS: FAQ[] = [
  {
    question: 'Can this itinerary be customised?',
    answer:
      'Yes. Every package here is a starting point. We change hotels, add or remove days, adjust the pace and rebuild the itinerary around your dates and budget at no extra planning cost.',
  },
  {
    question: 'Can we upgrade the hotel category?',
    answer:
      'Certainly. Most packages have 3-star, 4-star and 5-star price options, and we can also quote specific properties you have in mind.',
  },
  {
    question: 'Are flights included?',
    answer:
      'Flights are quoted separately so you can compare with your own booking. Tell us your departure city and we will include the best available fare in your quote.',
  },
  {
    question: 'How does booking work?',
    answer:
      'You send an enquiry, we share a detailed quote and itinerary, and once you approve it we confirm with a partial advance. The balance is due before departure as per the payment schedule.',
  },
  {
    question: 'What happens after I enquire?',
    answer:
      'A travel consultant contacts you on WhatsApp or phone within a few working hours to confirm dates, travellers and preferences before quoting.',
  },
];

/** Builds standard 3/4/5-star price options from a base per-person price. */
export function standardVariants(
  basePrice: number,
  options?: { mealPlan?: string; roomType?: string },
): PriceVariant[] {
  const mealPlan = options?.mealPlan ?? 'Breakfast included';
  const roomType = options?.roomType ?? 'Standard room';

  return [
    {
      label: '3 Star',
      hotelCategory: '3 Star / Comfort',
      roomType,
      mealPlan,
      pricePerPerson: basePrice,
      inclusions: ['Comfortable centrally located hotels', 'Daily breakfast', 'All transfers and sightseeing'],
    },
    {
      label: '4 Star',
      hotelCategory: '4 Star / Premium',
      roomType: 'Superior room',
      mealPlan,
      pricePerPerson: Math.round((basePrice * 1.28) / 100) * 100,
      inclusions: ['Premium hotels with better locations', 'Daily breakfast', 'Private transfers and sightseeing'],
    },
    {
      label: '5 Star',
      hotelCategory: '5 Star / Luxury',
      roomType: 'Deluxe room',
      mealPlan: 'Breakfast and dinner included',
      pricePerPerson: Math.round((basePrice * 1.72) / 100) * 100,
      inclusions: [
        'Luxury hotels and resorts',
        'Breakfast and dinner',
        'Private chauffeur-driven vehicle',
        'Priority check-in where available',
      ],
    },
  ];
}

/** Convenience builder for hotel options so seed data stays readable. */
export function hotel(
  name: string,
  starRating: 3 | 4 | 5,
  location: string,
  description: string,
  seed: string,
  roomType = 'Standard room',
  mealPlan = 'Breakfast included',
): HotelOption {
  return { name, starRating, location, roomType, mealPlan, description, image: img(seed, 'card') };
}

/** Convenience builder for experience cards. */
export function experience(title: string, description: string, seed: string): Experience {
  return { title, description, image: img(seed, 'card') };
}
