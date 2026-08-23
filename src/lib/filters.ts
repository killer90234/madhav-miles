import type { HolidayCategory, Package, Region } from '@/types';
import { budgetFilters, durationFilters, sortOptions } from '@/data/categories';
import { getDestinationsByRegion } from '@/data';
import { sanitizeParam, slugify } from './utils';

/**
 * URL-query package filters.
 *
 * Filter state lives in the URL (`/packages?category=honeymoon&budget=...`)
 * so filtered views are shareable and SEO-crawlable. Parsing functions are
 * pure so they run on the server (page component) and the values are always
 * sanitised before use (PRD 95).
 */

export type PackageFilters = {
  category?: HolidayCategory;
  region?: Region;
  destination?: string; // destination slug
  duration: string | null; // value from durationFilters
  budget: string | null; // value from budgetFilters
  sort: (typeof sortOptions)[number]['value'];
};

export const DEFAULT_SORT: PackageFilters['sort'] = 'recommended';

const VALID_CATEGORIES = new Set<HolidayCategory>([
  'honeymoon',
  'family',
  'luxury',
  'adventure',
  'weekend',
  'group',
  'religious',
  'solo',
]);

const VALID_REGIONS = new Set<Region>(['domestic', 'international']);

function rangeMatch(value: number, range: string): boolean {
  const [minRaw, maxRaw] = range.split('-');
  const min = Number.parseInt(minRaw ?? '', 10);
  const max = Number.parseInt(maxRaw ?? '', 10);
  if (!Number.isFinite(min) || !Number.isFinite(max)) return true;
  return value >= min && value <= max;
}

/** Parse raw search params into a safe filter object. */
export function parsePackageFilters(
  params: Record<string, string | string[] | undefined>,
): PackageFilters {
  const categoryParam = sanitizeParam(params.category).replace(/[^a-z-]/g, '');
  const regionParam = sanitizeParam(params.region).replace(/[^a-z]/g, '');

  const category =
    categoryParam && VALID_CATEGORIES.has(categoryParam as HolidayCategory)
      ? (categoryParam as HolidayCategory)
      : undefined;
  const region =
    regionParam && VALID_REGIONS.has(regionParam as Region)
      ? (regionParam as Region)
      : undefined;

  const durationParam = sanitizeParam(params.duration);
  const budgetParam = sanitizeParam(params.budget);

  const sortParam = sanitizeParam(params.sort).replace(/[^a-z-]/g, '');
  const validSort = sortOptions.find((option) => option.value === sortParam);

  return {
    category,
    region,
    destination: sanitizeParam(params.destination) || undefined,
    duration: durationFilters.some((option) => option.value === durationParam)
      ? durationParam
      : null,
    budget: budgetFilters.some((option) => option.value === budgetParam) ? budgetParam : null,
    sort: validSort?.value ?? DEFAULT_SORT,
  };
}

export function hasActiveFilters(filters: PackageFilters): boolean {
  return Boolean(
    filters.category || filters.region || filters.destination || filters.duration || filters.budget,
  );
}

export function applyPackageFilters(items: Package[], filters: PackageFilters): Package[] {
  let result = items;

  if (filters.category) {
    result = result.filter((pkg) => pkg.categories.includes(filters.category as HolidayCategory));
  }
  if (filters.region) {
    const regionIds = new Set(
      getDestinationsByRegion(filters.region).map((destination) => destination.id),
    );
    result = result.filter((pkg) => regionIds.has(pkg.destinationId));
  }
  if (filters.destination) {
    const target = slugify(filters.destination);
    result = result.filter(
      (pkg) =>
        slugify(pkg.title).includes(target) ||
        pkg.destinationId.includes(target),
    );
  }
  if (filters.duration) {
    result = result.filter((pkg) => rangeMatch(pkg.duration, filters.duration as string));
  }
  if (filters.budget) {
    result = result.filter((pkg) => rangeMatch(pkg.startingPrice, filters.budget as string));
  }

  return sortPackages(result, filters.sort);
}

function sortPackages(items: Package[], sort: PackageFilters['sort']): Package[] {
  const sorted = items.slice();
  switch (sort) {
    case 'price-asc':
      return sorted.sort((a, b) => a.startingPrice - b.startingPrice);
    case 'price-desc':
      return sorted.sort((a, b) => b.startingPrice - a.startingPrice);
    case 'duration-asc':
      return sorted.sort((a, b) => a.duration - b.duration);
    case 'rating-desc':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'newest':
      return sorted.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    case 'recommended':
    default:
      return sorted.sort((a, b) => b.popularity - a.popularity);
  }
}

/** Serialise filters back to a query string for shareable URLs. */
export function filtersToQueryString(filters: PackageFilters): string {
  const params = new URLSearchParams();
  if (filters.category) params.set('category', filters.category);
  if (filters.region) params.set('region', filters.region);
  if (filters.destination) params.set('destination', filters.destination);
  if (filters.duration) params.set('duration', filters.duration);
  if (filters.budget) params.set('budget', filters.budget);
  if (filters.sort !== DEFAULT_SORT) params.set('sort', filters.sort);
  const query = params.toString();
  return query ? `?${query}` : '';
}
