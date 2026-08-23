import type {
  BlogPost,
  Destination,
  FixedDeparture,
  HolidayCategory,
  Offer,
  Package,
  PolicyDocument,
  Region,
} from '@/types';

import { blogPosts } from './blog';
import { destinations } from './destinations';
import { fixedDepartures, getUpcomingDepartures } from './fixed-departures';
import { getActiveOffers, getOfferBySlug, offers } from './offers';
import { domesticPackages } from './packages/domestic';
import { internationalPackages } from './packages/international';
import { policies } from './policies';
import { testimonials, testimonialsAreVerified } from './testimonials';

/**
 * Read-only accessor layer over the seed data.
 *
 * Components and routes only ever call these functions, never the raw arrays.
 * When the catalogue moves to a CMS or API, this file becomes the async data
 * layer and nothing downstream has to change.
 */

export const packages: Package[] = [...domesticPackages, ...internationalPackages];

export {
  blogPosts,
  destinations,
  fixedDepartures,
  getActiveOffers,
  getOfferBySlug,
  getUpcomingDepartures,
  offers,
  policies,
  testimonials,
  testimonialsAreVerified,
};

/* ---------------------------------- Destinations --------------------------------- */

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug);
}

export function getDestinationById(id: string): Destination | undefined {
  return destinations.find((destination) => destination.id === id);
}

export function getDestinationsByRegion(region: Region): Destination[] {
  return destinations.filter((destination) => destination.region === region);
}

export function getFeaturedDestinations(limit = 6): Destination[] {
  const featured = destinations.filter((destination) => destination.featured);
  return (featured.length > 0 ? featured : destinations).slice(0, limit);
}

/** Sorted A–Z, useful for select inputs and the destinations index. */
export function getDestinationNames(): { slug: string; name: string; region: Region }[] {
  return destinations
    .map(({ slug, name, region }) => ({ slug, name, region }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/* ----------------------------------- Packages ----------------------------------- */

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find((pkg) => pkg.slug === slug);
}

export function getPackagesByDestination(destinationId: string): Package[] {
  return packages.filter((pkg) => pkg.destinationId === destinationId);
}

export function getPackagesByDestinationSlug(slug: string): Package[] {
  const destination = getDestinationBySlug(slug);
  return destination ? getPackagesByDestination(destination.id) : [];
}

export function getPackagesByCategory(category: HolidayCategory): Package[] {
  return packages.filter((pkg) => pkg.categories.includes(category));
}

export function getPackagesByRegion(region: Region): Package[] {
  const ids = new Set(getDestinationsByRegion(region).map((destination) => destination.id));
  return packages.filter((pkg) => ids.has(pkg.destinationId));
}

export function getFeaturedPackages(limit = 6): Package[] {
  const featured = packages.filter((pkg) => pkg.featured);
  return (featured.length > 0 ? featured : packages)
    .slice()
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, limit);
}

/**
 * Related packages for a detail page: same destination first, then the same
 * holiday category elsewhere, so the rail is never empty.
 */
export function getRelatedPackages(pkg: Package, limit = 3): Package[] {
  const sameDestination = packages.filter(
    (candidate) => candidate.destinationId === pkg.destinationId && candidate.id !== pkg.id,
  );

  if (sameDestination.length >= limit) {
    return sameDestination.slice(0, limit);
  }

  const sameCategory = packages.filter(
    (candidate) =>
      candidate.id !== pkg.id &&
      candidate.destinationId !== pkg.destinationId &&
      candidate.categories.some((category) => pkg.categories.includes(category)),
  );

  return [...sameDestination, ...sameCategory].slice(0, limit);
}

/** Cheapest price across a set of packages, for "from ₹X" labels. */
export function getStartingPrice(items: Package[]): number | undefined {
  if (items.length === 0) return undefined;
  return items.reduce((min, pkg) => Math.min(min, pkg.startingPrice), Number.POSITIVE_INFINITY);
}

/* ------------------------------------- Blog ------------------------------------- */

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsSorted(): BlogPost[] {
  return blogPosts
    .slice()
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getFeaturedBlogPosts(limit = 3): BlogPost[] {
  const sorted = getBlogPostsSorted();
  const featured = sorted.filter((post) => post.featured);
  return (featured.length > 0 ? featured : sorted).slice(0, limit);
}

export function getRelatedBlogPosts(post: BlogPost, limit = 3): BlogPost[] {
  return getBlogPostsSorted()
    .filter(
      (candidate) =>
        candidate.id !== post.id &&
        (candidate.category === post.category ||
          (post.destinationSlug !== undefined &&
            candidate.destinationSlug === post.destinationSlug)),
    )
    .slice(0, limit);
}

export function getBlogCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category))).sort();
}

/* ------------------------------ Offers & departures ----------------------------- */

export function getOffersForDestination(destinationId: string): Offer[] {
  return getActiveOffers().filter((offer) => offer.destinationId === destinationId);
}

export function getDeparturesForDestination(destinationId: string): FixedDeparture[] {
  return getUpcomingDepartures().filter(
    (departure) => departure.destinationId === destinationId,
  );
}

/* ----------------------------------- Policies ----------------------------------- */

export function getPolicyBySlug(slug: string): PolicyDocument | undefined {
  return policies.find((policy) => policy.slug === slug);
}

export function getPolicySlugs(): string[] {
  return policies.map((policy) => policy.slug);
}

