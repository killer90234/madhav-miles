import Link from 'next/link';

import type { Package } from '@/types';
import { discountPercent, formatDuration, formatPrice } from '@/lib/utils';

export function PackageCard({ pkg }: { pkg: Package }) {
  const discount = pkg.compareAtPrice
    ? discountPercent(pkg.compareAtPrice, pkg.startingPrice)
    : 0;

  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="card card-hover group overflow-hidden"
      aria-label={pkg.title}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pkg.heroImage}
          alt={pkg.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-editorial group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {pkg.offerBadge && (
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-cream shadow-pill">
              {pkg.offerBadge}
            </span>
          )}
          {discount > 0 && (
            <span className="rounded-full bg-brand-dark/85 px-3 py-1 text-xs font-semibold text-cream backdrop-blur-sm">
              {discount}% off
            </span>
          )}
        </div>
        <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-charcoal shadow-card backdrop-blur-sm">
          {formatDuration(pkg.duration)}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold leading-snug text-charcoal group-hover:text-brand">
          {pkg.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-charcoal-muted">
          {pkg.shortDescription}
        </p>
        <div className="mt-4 flex items-end justify-between">
          <div>
            {pkg.compareAtPrice && (
              <span className="mr-2 text-sm text-charcoal-muted line-through">
                {formatPrice(pkg.compareAtPrice)}
              </span>
            )}
            <span className="font-display text-xl font-semibold text-brand-dark">
              {formatPrice(pkg.startingPrice)}
            </span>
            <span className="ml-1 text-xs text-charcoal-muted">per person</span>
          </div>
          <span className="text-xs text-charcoal-muted" aria-label={`Rated ${pkg.rating} out of 5`}>
            ★ {pkg.rating.toFixed(1)} · {pkg.reviewCount} reviews
          </span>
        </div>
      </div>
    </Link>
  );
}
