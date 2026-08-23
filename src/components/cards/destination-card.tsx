import Link from 'next/link';

import type { Destination } from '@/types';
import { formatPrice } from '@/lib/utils';

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="card card-hover group overflow-hidden"
      aria-label={`${destination.name} holidays`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={destination.cardImage}
          alt={destination.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-editorial group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-dark/85 px-3 py-1 text-xs font-medium text-cream backdrop-blur-sm">
          {destination.region === 'domestic' ? 'India' : 'International'}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-charcoal group-hover:text-brand">
          {destination.name}, {destination.country}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-charcoal-muted">
          {destination.tagline}
        </p>
        <div className="mt-4 flex items-center justify-between text-sm">
          {destination.startingPrice ? (
            <span className="font-medium text-brand">
              From {formatPrice(destination.startingPrice)}
            </span>
          ) : (
            <span className="text-charcoal-muted">On request</span>
          )}
          {destination.idealDuration && (
            <span className="text-xs text-charcoal-muted">{destination.idealDuration}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
