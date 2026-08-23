import Link from 'next/link';
import type { Metadata } from 'next';

import { PackageCard } from '@/components/cards/package-card';
import { PageHero } from '@/components/ui/page-hero';
import { budgetFilters, durationFilters, sortOptions } from '@/data/categories';
import { packages as allPackages } from '@/data';
import {
  applyPackageFilters,
  filtersToQueryString,
  hasActiveFilters,
  parsePackageFilters,
  type PackageFilters,
} from '@/lib/filters';
import { buildMetadata } from '@/lib/site';
import { cn } from '@/lib/utils';

const sortLinks = sortOptions;

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export const metadata: Metadata = buildMetadata({
  title: 'Holiday Tour Packages',
  description:
    'Curated domestic and international holiday packages with honest per-person pricing, quality hotels and itineraries built around how you like to travel.',
  path: '/packages',
  keywords: ['tour packages', 'holiday packages', 'india tour packages'],
});

type ChipProps = { label: string; href: string; active: boolean };

function FilterChip({ label, href, active }: ChipProps) {
  return (
    <Link
      href={href}
      aria-current={active ? 'true' : undefined}
      className={cn(
        'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
        active
          ? 'border-brand bg-brand text-cream'
          : 'border-charcoal/15 bg-white text-charcoal hover:border-brand hover:text-brand',
      )}
    >
      {label}
    </Link>
  );
}

export default async function PackagesPage({ searchParams }: Props) {
  const params = await searchParams;
  const filters = parsePackageFilters(params);
  const visible = applyPackageFilters(allPackages, filters);

  /** Builds a chip href; clicking the active chip clears that filter. */
  const chipHref = (
    key: 'category' | 'region' | 'duration' | 'budget',
    value: string | undefined,
  ): string => {
    const isActive = filters[key] === value;
    const next = { ...filters } as Record<string, unknown>;
    if (isActive) {
      next[key] = key === 'duration' || key === 'budget' ? null : undefined;
    } else {
      next[key] = value ?? null;
    }
    return `/packages${filtersToQueryString(next as unknown as PackageFilters)}`;
  };

  const categoryOptions = [
    { label: 'Honeymoon', value: 'honeymoon' },
    { label: 'Family', value: 'family' },
    { label: 'Luxury', value: 'luxury' },
    { label: 'Adventure', value: 'adventure' },
    { label: 'Weekend', value: 'weekend' },
    { label: 'Group', value: 'group' },
    { label: 'Religious', value: 'religious' },
  ] as const;

  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Holidays with nothing left to chance"
        description="Every package below includes stays we've vetted, transfers that show up and a price that means what it says. Filter by the way you travel."
        breadcrumbs={[{ label: 'Packages' }]}
      />

      <section className="section container-shell">
        {/* Filter rows */}
        <div className="space-y-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-charcoal-muted">
              Holiday type
            </p>
            <div className="flex flex-wrap gap-2">
              {categoryOptions.map((option) => (
                <FilterChip
                  key={option.value}
                  label={option.label}
                  href={chipHref('category', option.value)}
                  active={filters.category === option.value}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-charcoal-muted">
              Region
            </p>
            <div className="flex flex-wrap gap-2">
              <FilterChip
                label="India"
                href={chipHref('region', 'domestic')}
                active={filters.region === 'domestic'}
              />
              <FilterChip
                label="International"
                href={chipHref('region', 'international')}
                active={filters.region === 'international'}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-charcoal-muted">
                Duration
              </p>
              <div className="flex flex-wrap gap-2">
                {durationFilters.map((option) => (
                  <FilterChip
                    key={option.value}
                    label={option.label}
                    href={chipHref('duration', option.value)}
                    active={filters.duration === option.value}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-charcoal-muted">
                Budget (per person)
              </p>
              <div className="flex flex-wrap gap-2">
                {budgetFilters.map((option) => (
                  <FilterChip
                    key={option.value}
                    label={option.label}
                    href={chipHref('budget', option.value)}
                    active={filters.budget === option.value}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sort + count */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-charcoal/10 pt-5">
          <p className="text-sm text-charcoal-muted">
            Showing <span className="font-semibold text-charcoal">{visible.length}</span> package
            {visible.length === 1 ? '' : 's'}
            {hasActiveFilters(filters) && (
              <>
                {' · '}
                <Link href="/packages" className="font-medium text-accent hover:underline">
                  Clear all filters
                </Link>
              </>
            )}
          </p>
          <nav aria-label="Sort packages" className="flex flex-wrap gap-1.5">
            {sortLinks.map((option) => {
              const next = { ...filters, sort: option.value } as PackageFilters;
              return (
                <Link
                  key={option.value}
                  href={`/packages${filtersToQueryString(next)}`}
                  aria-current={filters.sort === option.value ? 'true' : undefined}
                  className={cn(
                    'rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
                    filters.sort === option.value
                      ? 'bg-brand/10 text-brand'
                      : 'text-charcoal-muted hover:text-brand',
                  )}
                >
                  {option.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Results */}
        {visible.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-card border border-dashed border-charcoal/20 bg-white p-10 text-center">
            <h2 className="font-display text-xl font-semibold text-charcoal">
              No packages match those filters
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-charcoal-muted">
              Try widening your dates or budget — or message us on WhatsApp and we&apos;ll build a
              custom itinerary for exactly what you have in mind.
            </p>
            <Link href="/packages" className="btn-outline mt-5">
              Clear filters
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
