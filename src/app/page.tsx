import Link from 'next/link';

import { getFeaturedDestinations, getFeaturedPackages } from '@/data';
import { siteConfig } from '@/lib/site';
import { whatsappLinks } from '@/lib/whatsapp';
import { formatDuration, formatPrice } from '@/lib/utils';

/**
 * Home page — composes featured destinations and packages from the data layer.
 * Section components (Hero, PackageCard, etc.) will replace the inline markup
 * as the component library grows; the data wiring is already final.
 */

export default function HomePage() {
  const destinations = getFeaturedDestinations(6);
  const packages = getFeaturedPackages(6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark text-cream">
        <div className="container-shell py-20 sm:py-28 lg:py-32">
          <p className="eyebrow !text-accent-soft">Travel better. Travel personal.</p>
          <h1 className="mt-4 max-w-3xl font-display text-display-lg font-semibold text-balance">
            Holidays planned around you, not a brochure.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Handpicked stays, honest pricing and itineraries built for the way you like to
            travel — across India and around the world.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/packages" className="btn-accent">
              Explore Packages
            </Link>
            <a
              href={whatsappLinks.general()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-cream/40 text-cream hover:bg-cream/10"
            >
              Plan on WhatsApp
            </a>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6">
            {[
              { value: `${siteConfig.stats.years}+`, label: 'Years of planning' },
              { value: `${Math.round(siteConfig.stats.travellers / 1000)}k+`, label: 'Happy travellers' },
              { value: `${siteConfig.stats.destinations}+`, label: 'Destinations' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-semibold sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase tracking-wide text-cream/60">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Featured destinations */}
      <section className="section container-shell" aria-labelledby="destinations-heading">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Where to?</p>
            <h2 id="destinations-heading" className="mt-2 font-display text-display-md font-semibold">
              Featured destinations
            </h2>
          </div>
          <Link href="/destinations" className="shrink-0 text-sm font-medium text-brand hover:underline">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.slug}`}
              className="card card-hover group overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={destination.cardImage}
                  alt={destination.name}
                  className="h-full w-full object-cover transition-transform duration-500 ease-editorial group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-charcoal">
                  {destination.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-charcoal-muted">{destination.tagline}</p>
                {destination.startingPrice && (
                  <p className="mt-3 text-sm font-medium text-brand">
                    From {formatPrice(destination.startingPrice)} per person
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured packages */}
      <section className="section bg-sand-50" aria-labelledby="packages-heading">
        <div className="container-shell">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Curated for you</p>
              <h2 id="packages-heading" className="mt-2 font-display text-display-md font-semibold">
                Popular holiday packages
              </h2>
            </div>
            <Link href="/packages" className="shrink-0 text-sm font-medium text-brand hover:underline">
              View all →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`} className="card card-hover overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={pkg.heroImage}
                    alt={pkg.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  {pkg.offerBadge && (
                    <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-cream shadow-pill">
                      {pkg.offerBadge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-charcoal">{pkg.title}</h3>
                  <p className="mt-1 text-sm text-charcoal-muted">{formatDuration(pkg.duration)}</p>
                  <div className="mt-3 flex items-baseline justify-between">
                    <p className="font-display text-xl font-semibold text-brand-dark">
                      {formatPrice(pkg.startingPrice)}
                      <span className="ml-1 text-xs font-normal text-charcoal-muted">per person</span>
                    </p>
                    <p className="text-xs text-charcoal-muted">
                      ★ {pkg.rating.toFixed(1)} ({pkg.reviewCount})
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA band */}
      <section className="section container-shell">
        <div className="rounded-media bg-brand px-6 py-12 text-center text-cream sm:px-12">
          <h2 className="mx-auto max-w-2xl font-display text-display-sm font-semibold text-balance">
            Tell us how you like to travel — we&apos;ll plan the rest.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-cream/75">
            Message us on WhatsApp and get a personalised itinerary within hours, not days.
          </p>
          <a
            href={whatsappLinks.general()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-7"
          >
            Start Planning on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
