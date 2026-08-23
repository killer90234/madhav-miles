/**
 * Domain models for Madhav Miles.
 * These mirror the eventual CMS content entities so components never need to
 * change when local seed data is swapped for an API/CMS response.
 */

export type Region = 'domestic' | 'international';

export type HolidayCategory =
  | 'honeymoon'
  | 'family'
  | 'luxury'
  | 'adventure'
  | 'weekend'
  | 'group'
  | 'religious'
  | 'solo';

export type DestinationHighlight = {
  title: string;
  description: string;
  image?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Destination = {
  id: string;
  slug: string;
  name: string;
  country: string;
  region: Region;
  tagline: string;
  description: string;
  heroImage: string;
  cardImage: string;
  gallery: string[];
  bestTimeToVisit?: string;
  idealDuration?: string;
  startingPrice?: number;
  featured?: boolean;
  whyVisit: string[];
  highlights: DestinationHighlight[];
  faqs: FAQ[];
};

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
  activities: string[];
  image?: string;
};

export type HotelOption = {
  name: string;
  starRating: 3 | 4 | 5;
  location: string;
  roomType: string;
  mealPlan: string;
  description: string;
  image: string;
};

export type PriceVariant = {
  label: string;
  hotelCategory: string;
  roomType: string;
  mealPlan: string;
  pricePerPerson: number;
  inclusions: string[];
};

export type Experience = {
  title: string;
  description: string;
  image: string;
};

export type Package = {
  id: string;
  slug: string;
  title: string;
  destinationId: string;
  category: HolidayCategory;
  categories: HolidayCategory[];
  /** Nights. Days are always nights + 1. */
  duration: number;
  startingPrice: number;
  compareAtPrice?: number;
  heroImage: string;
  gallery: string[];
  shortDescription: string;
  overview: string;
  highlights: string[];
  mealPlan: string;
  hotelCategory: string;
  transfer: string;
  tourType: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  offerBadge?: string;
  inclusions: string[];
  exclusions: string[];
  priceVariants: PriceVariant[];
  itinerary: ItineraryDay[];
  hotels: HotelOption[];
  experiences: Experience[];
  faqs: FAQ[];
  createdAt: string;
  popularity: number;
};

export type FixedDeparture = {
  id: string;
  slug: string;
  destinationId: string;
  title: string;
  departureDate: string;
  departureCity: string;
  duration: number;
  startingPrice: number;
  seatsAvailable: number;
  tourType: string;
  image: string;
};

export type Offer = {
  id: string;
  slug: string;
  title: string;
  destinationId: string;
  packageSlug?: string;
  description: string;
  image: string;
  oldPrice: number;
  newPrice: number;
  validTill: string;
  badge: string;
};

export type Testimonial = {
  id: string;
  name: string;
  destination: string;
  tripType: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  verified: boolean;
};

export type BlogCategory =
  | 'Destination Guides'
  | 'Travel Tips'
  | 'Visa Guides'
  | 'Travel Inspiration'
  | 'Itineraries';

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  destinationSlug?: string;
  author: string;
  publishedAt: string;
  readingMinutes: number;
  heroImage: string;
  featured?: boolean;
  body: BlogSection[];
};

export type HolidayCategoryCard = {
  slug: HolidayCategory | 'domestic' | 'international';
  title: string;
  description: string;
  image: string;
  href: string;
};

export type PolicyDocument = {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
};

/** Structured payload a CRM/backend can consume later. */
export type LeadMeta = {
  source: string;
  campaign?: string;
  landingPage: string;
  destination?: string;
  package?: string;
  device: 'mobile' | 'tablet' | 'desktop';
  timestamp: string;
};

export type EnquiryPayload = {
  name: string;
  phone: string;
  email: string;
  message?: string;
  destination?: string;
  packageSlug?: string;
  meta: LeadMeta;
};

export type TripPlannerPayload = {
  name: string;
  phone: string;
  email: string;
  destination: string;
  travelDate: string;
  returnDate?: string;
  adults: number;
  children: number;
  holidayType: string;
  budget: string;
  hotelPreference: string;
  transportPreference: string;
  specialRequirements?: string;
  meta: LeadMeta;
};

export type SubmitResult =
  | { ok: true; reference: string }
  | { ok: false; error: string };
