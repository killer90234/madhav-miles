import Link from 'next/link';
import type { Metadata } from 'next';

import { PageHero } from '@/components/ui/page-hero';
import { testimonials } from '@/data';
import { buildMetadata, siteConfig } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: `About ${siteConfig.name}`,
  description:
    'A small team of travel planners who visit every destination we sell — honest advice, fair prices and itineraries built around you.',
  path: '/about',
});

const VALUES = [
  {
    title: 'We go first',
    description:
      'Every destination on this site has been visited by someone on our team. If a hotel has thin walls or a "beachfront" is actually across a highway, we tell you.',
  },
  {
    title: 'Prices that mean something',
    description:
      "Our quoted price is the price you pay. No last-minute 'peak season surcharges', no bait-and-switch hotels after booking.",
  },
  {
    title: 'Small by design',
    description:
      'We cap group departures at 18 travellers and plan private trips one at a time. You are never a booking reference to us.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`Hi, we're ${siteConfig.name}`}
        description="A small team of travel planners who believe the best trips come from honest advice, not upsells."
        breadcrumbs={[{ label: 'About' }]}
      />

      <section className="section container-shell grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="font-display text-display-sm font-semibold text-charcoal">Our story</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-charcoal-muted">
            <p>
              {siteConfig.name} started the way most good travel companies do — with one
              frustrating holiday. Flights that didn&apos;t connect, a hotel that wasn&apos;t the one in
              the photos, and an agent who stopped answering the phone after payment.
            </p>
            <p>
              So we built the agency we wished existed: one where someone on the team has
              actually stayed in the hotels we recommend, where the itinerary bends around your
              pace instead of a bus schedule, and where the price on the proposal is the price on
              the invoice.
            </p>
            <p>
              Today we plan honeymoons, family trips, small-group departures and offbeat escapes
              across India and abroad. We&apos;re still deliberately small — because personal is the
              entire product.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { stat: '12+', label: 'years planning trips' },
              { stat: '8,000+', label: 'happy travellers' },
              { stat: '40+', label: 'destinations covered' },
            ].map((item) => (
              <div key={item.label} className="card p-5 text-center">
                <p className="font-display text-3xl font-semibold text-brand-dark">{item.stat}</p>
                <p className="mt-1 text-sm text-charcoal-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          {VALUES.map((value) => (
            <div key={value.title} className="card p-6">
              <h3 className="font-display text-base font-semibold text-charcoal">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">{value.description}</p>
            </div>
          ))}
          <Link href="/contact" className="btn-primary w-full !py-3 text-center">
            Plan a trip with us
          </Link>
        </aside>
      </section>

      {/* Testimonials */}
      <section className="section bg-sand-50">
        <div className="container-shell">
          <h2 className="font-display text-display-sm font-semibold text-charcoal">
            What travellers say
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((testimonial) => (
              <figure key={testimonial.id} className="card p-6">
                <p className="text-sm text-accent" aria-label={`Rated ${testimonial.rating} out of 5`}>
                  {'★'.repeat(testimonial.rating)}
                  <span className="text-charcoal/20">{'★'.repeat(5 - testimonial.rating)}</span>
                </p>
                <blockquote className="mt-3 text-sm leading-relaxed text-charcoal-muted">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium text-charcoal">
                  {testimonial.name}
                  <span className="block text-xs font-normal text-charcoal-muted">
                    {testimonial.destination} · {testimonial.tripType}
                    {testimonial.verified && (
                      <span className="ml-2 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                        Verified
                      </span>
                    )}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
