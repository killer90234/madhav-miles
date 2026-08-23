import Link from 'next/link';

import type { Offer } from '@/types';
import { discountPercent, formatDate, formatPrice } from '@/lib/utils';
import { whatsappLinks } from '@/lib/whatsapp';

export function OfferCard({ offer }: { offer: Offer }) {
  const discount = discountPercent(offer.oldPrice, offer.newPrice);

  return (
    <article className="card card-hover overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden bg-sand-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={offer.image} alt={offer.title} loading="lazy" className="h-full w-full object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream shadow-pill">
          {offer.badge}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold leading-snug text-charcoal">{offer.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal-muted">
          {offer.description}
        </p>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-sm text-charcoal-muted line-through">{formatPrice(offer.oldPrice)}</span>
          <span className="font-display text-xl font-semibold text-brand-dark">
            {formatPrice(offer.newPrice)}
          </span>
          {discount > 0 && (
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
              Save {discount}%
            </span>
          )}
        </div>
        <p className="mt-2 text-xs text-charcoal-muted">Valid till {formatDate(offer.validTill)}</p>
        <a
          href={whatsappLinks.offer(offer.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-4 w-full !py-2.5"
        >
          Claim on WhatsApp
        </a>
      </div>
    </article>
  );
}

/** Small helper used by the offers index for the "browse packages" nudge. */
export function OffersFooterNudge({ href }: { href: string }) {
  return (
    <Link href={href} className="text-sm font-medium text-brand hover:underline">
      Browse all packages →
    </Link>
  );
}
