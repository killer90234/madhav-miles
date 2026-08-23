import Link from 'next/link';
import type { Metadata } from 'next';

import { PageHero } from '@/components/ui/page-hero';
import { fixedDepartures, getDestinationById, getPackagesByDestination } from '@/data';
import { buildMetadata } from '@/lib/site';
import { formatDate, formatDuration, formatPrice } from '@/lib/utils';
import { whatsappLinks } from '@/lib/whatsapp';

export const metadata: Metadata = buildMetadata({
  title: 'Fixed Departure Group Tours',
  description:
    'Join like-minded travellers on fixed-date group departures — locked prices, vetted hotels and a tour manager from start to finish.',
  path: '/fixed-departures',
  keywords: ['group tours', 'fixed departure packages', 'guided group travel'],
});

export default function FixedDeparturesPage() {
  const today = new Date();
  const upcoming = fixedDepartures
    .filter((departure) => new Date(departure.departureDate) > today)
    .sort((a, b) => new Date(a.departureDate).getTime() - new Date(b.departureDate).getTime());

  return (
    <>
      <PageHero
        eyebrow="Fixed Departures"
        title="Group tours with dates you can plan around"
        description="Locked prices, confirmed dates and a tour manager who handles the logistics — you just show up at the airport."
        breadcrumbs={[{ label: 'Fixed Departures' }]}
      />

      <section className="section container-shell">
        <div className="space-y-6">
          {upcoming.map((departure) => {
            const destination = getDestinationById(departure.destinationId);
            const linkedPackages = getPackagesByDestination(departure.destinationId);
            const seatsLow = departure.seatsAvailable <= 4;

            return (
              <DepartureCard
                key={departure.id}
                departure={departure}
                destinationSlug={destination?.slug}
                destinationName={destination ? `${destination.name}, ${destination.country}` : undefined}
                itineraryHref={linkedPackages[0] ? `/packages/${linkedPackages[0].slug}` : undefined}
                seatsLow={seatsLow}
              />
            );
          })}
        </div>

        {upcoming.length === 0 && (
          <div className="rounded-card border border-dashed border-charcoal/20 bg-white p-10 text-center">
            <h2 className="font-display text-xl font-semibold text-charcoal">
              New departure calendar dropping soon
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-charcoal-muted">
              We publish group departures season by season — message us and we&apos;ll share
              what&apos;s in the pipeline.
            </p>
          </div>
        )}
      </section>
    </>
  );
}

type DepartureCardProps = {
  departure: (typeof fixedDepartures)[number];
  destinationSlug?: string;
  destinationName?: string;
  itineraryHref?: string;
  seatsLow: boolean;
};

function DepartureCard({
  departure,
  destinationSlug,
  destinationName,
  itineraryHref,
  seatsLow,
}: DepartureCardProps) {
  return (
    <article className="card card-hover grid gap-0 overflow-hidden md:grid-cols-[260px_1fr]">
      <div className="relative aspect-[16/10] overflow-hidden bg-sand-100 md:aspect-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={departure.image}
          alt={departure.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              {formatDate(departure.departureDate)} · departs {departure.departureCity}
            </p>
            <h2 className="mt-1 font-display text-xl font-semibold text-charcoal">
              {departure.title}
            </h2>
            {destinationSlug && destinationName && (
              <Link
                href={`/destinations/${destinationSlug}`}
                className="mt-1 inline-block text-sm text-brand hover:underline"
              >
                {destinationName}
              </Link>
            )}
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              seatsLow ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700'
            }`}
          >
            {seatsLow
              ? `Only ${departure.seatsAvailable} seats left`
              : `${departure.seatsAvailable} seats available`}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-charcoal-muted">
          <span>{formatDuration(departure.duration)}</span>
          <span>Small group · max 18 travellers</span>
          <span>Tour manager included</span>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-charcoal/10 pt-4">
          <p>
            <span className="text-xs text-charcoal-muted">from </span>
            <span className="font-display text-xl font-semibold text-brand-dark">
              {formatPrice(departure.startingPrice)}
            </span>
            <span className="text-xs text-charcoal-muted"> per person</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {itineraryHref && (
              <Link href={itineraryHref} className="btn-outline !py-2.5">
                View itinerary
              </Link>
            )}
            <a
              href={whatsappLinks.departure(departure.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp !py-2.5"
            >
              Hold a seat
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
