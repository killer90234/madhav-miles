import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { FaqAccordion } from '@/components/faq-accordion';
import { PageHero } from '@/components/ui/page-hero';
import {
  getDestinationById,
  getPackageBySlug,
  getRelatedPackages,
  packages,
} from '@/data';
import { buildMetadata } from '@/lib/site';
import { faqJsonLd, jsonLdScript, packageJsonLd } from '@/lib/seo';
import { discountPercent, formatDuration, formatPrice } from '@/lib/utils';
import { whatsappLinks } from '@/lib/whatsapp';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};
  return buildMetadata({
    title: `${pkg.title} — ${formatDuration(pkg.duration)}`,
    description: pkg.shortDescription,
    path: `/packages/${pkg.slug}`,
    image: pkg.heroImage,
    keywords: [pkg.title, `${pkg.title} price`, 'tour package'],
  });
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const destination = getDestinationById(pkg.destinationId);
  const related = getRelatedPackages(pkg, 3);
  const discount = pkg.compareAtPrice
    ? discountPercent(pkg.compareAtPrice, pkg.startingPrice)
    : 0;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(packageJsonLd(pkg)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqJsonLd(pkg.faqs)) }}
      />

      <PageHero
        eyebrow={destination ? `${destination.name}, ${destination.country}` : pkg.tourType}
        title={pkg.title}
        description={pkg.shortDescription}
        image={pkg.heroImage}
        breadcrumbs={[
          { label: 'Packages', href: '/packages' },
          ...(destination
            ? [{ label: destination.name, href: `/destinations/${destination.slug}` }]
            : []),
          { label: pkg.title },
        ]}
      />

      {/* Fact strip */}
      <section className="container-shell relative z-10 -mt-8">
        <dl className="grid gap-4 rounded-card bg-white p-5 shadow-card sm:grid-cols-4">
          {[
            { label: 'Duration', value: formatDuration(pkg.duration) },
            { label: 'Hotel category', value: pkg.hotelCategory },
            { label: 'Meal plan', value: pkg.mealPlan },
            { label: 'Rating', value: `★ ${pkg.rating.toFixed(1)} (${pkg.reviewCount} reviews)` },
          ].map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs font-medium uppercase tracking-wide text-charcoal-muted">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-charcoal">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section container-shell grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        {/* Main column */}
        <div className="space-y-12">
          <div>
            <h2 className="font-display text-display-sm font-semibold text-charcoal">Overview</h2>
            <p className="mt-4 leading-relaxed text-charcoal-muted">{pkg.overview}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {pkg.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-charcoal">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery — location-appropriate */}
          {pkg.gallery.length > 0 && (
            <div>
              <h2 className="font-display text-display-sm font-semibold text-charcoal">
                Gallery
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {pkg.gallery.map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-card bg-sand-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`${pkg.title} view ${i + 1}`} loading="lazy" className="aspect-[16/10] h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Day-by-day itinerary */}
          <div>
            <h2 className="font-display text-display-sm font-semibold text-charcoal">
              Day-by-day itinerary
            </h2>
            <ol className="mt-6 space-y-0 border-l-2 border-brand/20 pl-6">
              {pkg.itinerary.map((day) => (
                <li key={day.day} className="relative pb-8 last:pb-0">
                  <span
                    className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[9px] font-bold text-cream"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    Day {day.day}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold text-charcoal">
                    {day.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal-muted">
                    {day.description}
                  </p>
                  {day.image && (
                    <div className="mt-3 overflow-hidden rounded-card bg-sand-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={day.image} alt={day.title} loading="lazy" className="aspect-[16/9] w-full object-cover" />
                    </div>
                  )}
                  {day.activities.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {day.activities.map((act) => (
                        <li key={act} className="rounded-full bg-sand-50 px-3 py-1 text-xs text-charcoal-muted">
                          {act}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Price variants */}
          {pkg.priceVariants.length > 0 && (
            <div>
              <h2 className="font-display text-display-sm font-semibold text-charcoal">
                Choose your stay
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {pkg.priceVariants.map((variant) => (
                  <div key={variant.label} className="card p-5">
                    <h3 className="font-display text-base font-semibold text-charcoal">{variant.label}</h3>
                    <p className="mt-1 text-xs text-charcoal-muted">{variant.hotelCategory} · {variant.roomType} · {variant.mealPlan}</p>
                    <p className="mt-3 font-display text-xl font-semibold text-brand-dark">{formatPrice(variant.pricePerPerson)} <span className="text-xs font-normal text-charcoal-muted">per person</span></p>
                    <ul className="mt-3 space-y-1.5">
                      {variant.inclusions.slice(0, 4).map((inc) => (
                        <li key={inc} className="text-xs text-charcoal-muted">· {inc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hotels */}
          {pkg.hotels.length > 0 && (
            <div>
              <h2 className="font-display text-display-sm font-semibold text-charcoal">
                Where you&apos;ll stay
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {pkg.hotels.map((hotel) => (
                  <article key={hotel.name} className="card overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden bg-sand-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={hotel.image} alt={hotel.name} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-sm font-semibold text-charcoal">{hotel.name}</h3>
                        <span className="shrink-0 rounded-full bg-brand/10 px-2 py-0.5 text-xs font-semibold text-brand">{hotel.starRating}★</span>
                      </div>
                      <p className="mt-1 text-xs text-charcoal-muted">{hotel.location} · {hotel.roomType} · {hotel.mealPlan}</p>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">{hotel.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Experiences */}
          {pkg.experiences.length > 0 && (
            <div>
              <h2 className="font-display text-display-sm font-semibold text-charcoal">
                Experiences included &amp; optional
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {pkg.experiences.map((exp) => (
                  <article key={exp.title} className="card overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden bg-sand-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={exp.image} alt={exp.title} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-sm font-semibold text-charcoal">{exp.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-charcoal-muted">{exp.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Inclusions / exclusions */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card p-6">
              <h3 className="font-display text-lg font-semibold text-charcoal">What&apos;s included</h3>
              <ul className="mt-4 space-y-2.5">
                {pkg.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal-muted">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0 text-green-600">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-display text-lg font-semibold text-charcoal">Not included</h3>
              <ul className="mt-4 space-y-2.5">
                {pkg.exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal-muted">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" className="mt-0.5 shrink-0 text-red-500">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQs */}
          {pkg.faqs.length > 0 && (
            <div aria-labelledby="pkg-faqs">
              <h2 id="pkg-faqs" className="font-display text-display-sm font-semibold text-charcoal">
                Good to know
              </h2>
              <div className="mt-6">
                <FaqAccordion faqs={pkg.faqs} />
              </div>
            </div>
          )}
        </div>

        {/* Sticky booking sidebar */}
        <aside className="h-fit lg:sticky lg:top-24">
          <div className="card p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-muted">
              Starting from
            </p>
            <div className="mt-1 flex items-baseline gap-2">
              {pkg.compareAtPrice && (
                <span className="text-base text-charcoal-muted line-through">
                  {formatPrice(pkg.compareAtPrice)}
                </span>
              )}
              <span className="font-display text-3xl font-semibold text-brand-dark">
                {formatPrice(pkg.startingPrice)}
              </span>
              <span className="text-xs text-charcoal-muted">per person</span>
            </div>
            {discount > 0 && (
              <p className="mt-1.5 text-xs font-semibold text-accent">
                Save {discount}% on this package
              </p>
            )}

            <a
              href={whatsappLinks.package(pkg.title, pkg.slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-5 w-full"
            >
              Get this itinerary on WhatsApp
            </a>
            <Link href="/contact" className="btn-outline mt-3 w-full">
              Request callback
            </Link>

            <p className="mt-4 text-center text-xs text-charcoal-muted">
              Free date changes up to 30 days before departure
            </p>
          </div>

          <div className="card mt-4 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-charcoal-muted">
              Package details
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal-muted">Tour type</dt>
                <dd className="text-right font-medium capitalize text-charcoal">{pkg.tourType}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal-muted">Category</dt>
                <dd className="text-right font-medium capitalize text-charcoal">{pkg.category}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal-muted">Hotel category</dt>
                <dd className="text-right font-medium text-charcoal">{pkg.hotelCategory}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal-muted">Meals</dt>
                <dd className="text-right font-medium text-charcoal">{pkg.mealPlan}</dd>
              </div>
            </dl>
            {destination && (
              <Link
                href={`/destinations/${destination.slug}`}
                className="mt-5 inline-block text-sm font-medium text-brand hover:underline"
              >
                More {destination.name} holidays →
              </Link>
            )}
          </div>
        </aside>
      </section>

      {/* Related packages */}
      {related.length > 0 && (
        <section className="section bg-sand-50">
          <div className="container-shell">
            <h2 className="font-display text-display-sm font-semibold text-charcoal">
              You may also like
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedPkg) => (
                <Link
                  key={relatedPkg.id}
                  href={`/packages/${relatedPkg.slug}`}
                  className="card card-hover group overflow-hidden"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-sand-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={relatedPkg.heroImage}
                      alt={relatedPkg.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-editorial group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-semibold text-charcoal group-hover:text-brand">
                      {relatedPkg.title}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal-muted">
                      {formatDuration(relatedPkg.duration)} · from{' '}
                      <span className="font-semibold text-brand-dark">
                        {formatPrice(relatedPkg.startingPrice)}
                      </span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
