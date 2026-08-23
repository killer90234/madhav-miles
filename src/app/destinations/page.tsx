import Link from 'next/link';
import type { Metadata } from 'next';

import { DestinationCard } from '@/components/cards/destination-card';
import { PageHero } from '@/components/ui/page-hero';
import type { Region } from '@/types';
import { destinations as allDestinations } from '@/data';
import { buildMetadata } from '@/lib/site';
import { cn, sanitizeParam } from '@/lib/utils';

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export const metadata: Metadata = buildMetadata({
  title: 'Destinations — Holidays Across India & Abroad',
  description:
    'Explore handpicked destinations across India and around the world — beaches, mountains, backwaters, deserts and islands, each with curated packages.',
  path: '/destinations',
  keywords: ['travel destinations', 'india holidays', 'international holidays'],
});

const REGION_TABS: { label: string; value?: Region }[] = [
  { label: 'All Destinations' },
  { label: 'India', value: 'domestic' },
  { label: 'International', value: 'international' },
];

export default async function DestinationsPage({ searchParams }: Props) {
  const params = await searchParams;
  const rawRegion = sanitizeParam(params.region).replace(/[^a-z]/g, '');
  const region =
    rawRegion === 'domestic' || rawRegion === 'international' ? (rawRegion as Region) : undefined;

  const destinations = region
    ? allDestinations.filter((destination) => destination.region === region)
    : allDestinations;

  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Where would you like to wake up?"
        description="From Himalayan snow to Maldivian lagoons — every destination below comes with itineraries we've walked ourselves and hotels we'd put our own families in."
        breadcrumbs={[{ label: 'Destinations' }]}
      />

      <section className="section container-shell">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by region">
          {REGION_TABS.map((tab) => {
            const href = tab.value ? `/destinations?region=${tab.value}` : '/destinations';
            const active = region === tab.value;
            return (
              <Link
                key={tab.label}
                href={href}
                role="tab"
                aria-selected={active}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'border-brand bg-brand text-cream'
                    : 'border-charcoal/15 bg-white text-charcoal hover:border-brand hover:text-brand',
                )}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-charcoal-muted">
          Showing {destinations.length} destination{destinations.length === 1 ? '' : 's'}
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>
    </>
  );
}
