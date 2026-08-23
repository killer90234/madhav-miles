import type { Metadata } from 'next';

import { OfferCard } from '@/components/cards/offer-card';
import { PageHero } from '@/components/ui/page-hero';
import { offers } from '@/data';
import { buildMetadata } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Current Offers & Deals',
  description:
    'Limited-time holiday offers with real discounts on real packages. No inflated MRPs, no fine-print games.',
  path: '/offers',
  keywords: ['travel offers', 'holiday deals', 'package discounts'],
});

export default function OffersPage() {
  const active = offers.filter((offer) => new Date(offer.validTill) > new Date());

  return (
    <>
      <PageHero
        eyebrow="Offers"
        title="Deals we'd book ourselves"
        description="Every offer below is tied to a specific package at a specific price — the old price is what it actually sold for last season."
        breadcrumbs={[{ label: 'Offers' }]}
      />

      <section className="section container-shell">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {active.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        {active.length === 0 && (
          <div className="rounded-card border border-dashed border-charcoal/20 bg-white p-10 text-center">
            <h2 className="font-display text-xl font-semibold text-charcoal">
              No live offers right now
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-charcoal-muted">
              New deals drop at the start of every season — message us on WhatsApp and we&apos;ll
              tell you what&apos;s coming up.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
