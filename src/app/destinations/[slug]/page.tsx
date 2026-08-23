import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { PackageCard } from '@/components/cards/package-card';
import { FaqAccordion } from '@/components/faq-accordion';
import { PageHero } from '@/components/ui/page-hero';
import {
  getDeparturesForDestination,
  getDestinationBySlug,
  getPackagesByDestinationSlug,
  destinations,
} from '@/data';
import { buildMetadata } from '@/lib/site';
import { destinationJsonLd, faqJsonLd, jsonLdScript } from '@/lib/seo';
import { formatPrice, formatShortDate } from '@/lib/utils';
import { whatsappLinks } from '@/lib/whatsapp';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return {};
  return buildMetadata({
    title: `${destination.name} Tour Packages`,
    description: destination.tagline,
    path: `/destinations/${destination.slug}`,
    image: destination.heroImage,
    keywords: [`${destination.name} packages`, `${destination.name} holiday`, destination.country],
  });
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const packages = getPackagesByDestinationSlug(slug);
  const departures = getDeparturesForDestination(destination.id).filter(
    (departure) => new Date(departure.departureDate) > new Date(),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(destinationJsonLd(destination)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqJsonLd(destination.faqs)) }}
      />

      <PageHero
        eyebrow={`${destination.region === 'domestic' ? 'India' : 'International'} · ${destination.country}`}
        title={destination.name}
        description={destination.tagline}
        image={destination.heroImage}
        breadcrumbs={[{ label: 'Destinations', href: '/destinations' }, { label: destination.name }]}
      />

      {/* Quick facts */}
      <section className="container-shell relative z-10 -mt-8">
        <dl className="grid gap-4 rounded-card bg-white p-5 shadow-card sm:grid-cols-3">
          {[
            { label: 'Best time to visit', value: destination.bestTimeToVisit },
            { label: 'Ideal duration', value: destination.idealDuration },
            {
              label: 'Starting from',
              value: destination.startingPrice
                ? `${formatPrice(destination.startingPrice)} per person`
                : 'On request',
            },
          ]
            .filter((fact) => fact.value)
            .map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-medium uppercase tracking-wide text-charcoal-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-display text-base font-semibold text-charcoal">
                  {fact.value}
                </dd>
              </div>
            ))}
        </dl>
      </section>

      {/* Overview + sticky WhatsApp card */}
      <section className="section container-shell grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="font-display text-display-sm font-semibold text-charcoal">
            Why visit {destination.name}?
          </h2>
          <p className="mt-4 leading-relaxed text-charcoal-muted">{destination.description}</p>
          <ul className="mt-6 space-y-3">
            {destination.whyVisit.map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-charcoal">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-sm leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="card h-fit p-6 lg:sticky lg:top-24">
          <h3 className="font-display text-lg font-semibold text-charcoal">
            Plan your {destination.name} trip
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">
            Tell us your dates and travel style — we&apos;ll send a customised itinerary on
            WhatsApp within hours.
          </p>
          <a
            href={whatsappLinks.destination(destination.name, destination.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-4 w-full"
          >
            Chat on WhatsApp
          </a>
          {departures.length > 0 && (
            <div className="mt-6 border-t border-charcoal/10 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-muted">
                Upcoming group departures
              </p>
              <ul className="mt-3 space-y-3">
                {departures.slice(0, 3).map((departure) => (
                  <li key={departure.id} className="text-sm">
                    <span className="font-medium text-charcoal">
                      {formatShortDate(departure.departureDate)}
                    </span>{' '}
                    · <span className="text-charcoal-muted">{formatPrice(departure.startingPrice)}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/fixed-departures"
                className="mt-3 inline-block text-sm font-medium text-brand hover:underline"
              >
                View all departures →
              </Link>
            </div>
          )}
        </aside>
      </section>

      {/* Highlights */}
      {destination.highlights.length > 0 && (
        <section className="section bg-sand-50">
          <div className="container-shell">
            <h2 className="font-display text-display-sm font-semibold text-charcoal">Highlights</h2>
            <p className="mt-2 text-sm text-charcoal-muted">Places you&apos;ll actually see, shot on location.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {destination.highlights.map((highlight) => (
                <article key={highlight.title} className="card overflow-hidden">
                  {highlight.image && (
                    <div className="aspect-[4/3] overflow-hidden bg-sand-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={highlight.image}
                        alt={highlight.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-display text-base font-semibold text-charcoal">
                      {highlight.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-charcoal-muted">
                      {highlight.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery — location-appropriate imagery */}
      {destination.gallery.length > 0 && (
        <section className="section container-shell">
          <h2 className="font-display text-display-sm font-semibold text-charcoal">
            {destination.name} in pictures
          </h2>
          <p className="mt-2 text-sm text-charcoal-muted">Every frame is from {destination.name} itself.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destination.gallery.map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-card bg-sand-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${destination.name} view ${idx + 1}`}
                  loading="lazy"
                  className="aspect-[16/10] h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Packages */}
      {packages.length > 0 ? (
        <section className="section container-shell">
          <h2 className="font-display text-display-sm font-semibold text-charcoal">
            {destination.name} packages
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </section>
      ) : (
        <section className="container-shell pb-4">
          <p className="text-sm text-charcoal-muted">
            Custom itineraries for {destination.name} are planned on request — message us on
            WhatsApp and we&apos;ll build one for your dates.
          </p>
        </section>
      )}

      {/* FAQs */}
      {destination.faqs.length > 0 && (
        <section className="section container-shell max-w-reading" aria-labelledby="faqs-heading">
          <h2 id="faqs-heading" className="font-display text-display-sm font-semibold text-charcoal">
            Frequently asked questions
          </h2>
          <div className="mt-6">
            <FaqAccordion faqs={destination.faqs} />
          </div>
        </section>
      )}
    </>
  );
}
