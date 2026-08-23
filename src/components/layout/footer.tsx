import Link from 'next/link';

import { getDestinationNames, getPolicySlugs, policies } from '@/data';
import { emailHref, phoneHref, siteConfig } from '@/lib/site';
import { whatsappLinks } from '@/lib/whatsapp';

/**
 * Site footer: navigation, popular destinations, contact details and policy
 * links. Server component — everything here is static per build.
 */

const POLICY_LABELS: Record<string, string> = {
  'terms-and-conditions': 'Terms & Conditions',
  'privacy-policy': 'Privacy Policy',
  'cancellation-and-refund-policy': 'Cancellation & Refunds',
  'payment-policy': 'Payment Policy',
  disclaimer: 'Disclaimer',
};

function policyLabel(slug: string): string {
  return (
    POLICY_LABELS[slug] ??
    policies.find((policy) => policy.slug === slug)?.title ??
    slug
  );
}

export function Footer() {
  const destinations = getDestinationNames().slice(0, 8);
  const policySlugs = getPolicySlugs();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-brand-dark text-cream/80">
      <div className="container-shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} — home`}>
            <span className="flex h-10 w-10 items-center justify-center rounded-media bg-cream/10 font-display text-lg font-bold text-cream">
              MM
            </span>
            <span className="font-display text-xl font-semibold text-cream">
              Madhav<span className="text-accent-soft"> Miles</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {siteConfig.tagline} Handpicked holidays across India and abroad — planned around
            you, priced honestly, supported on WhatsApp.
          </p>
          <div className="mt-5 flex gap-3">
            {Object.entries(siteConfig.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-xs font-semibold uppercase text-cream transition-colors hover:bg-accent"
              >
                {name.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Popular destinations">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-cream">Destinations</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {destinations.map((destination) => (
              <li key={destination.slug}>
                <Link
                  href={`/destinations/${destination.slug}`}
                  className="transition-colors hover:text-cream"
                >
                  {destination.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company links">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-cream">Company</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { label: 'All Packages', href: '/packages' },
              { label: 'Fixed Departures', href: '/fixed-departures' },
              { label: 'Offers', href: '/offers' },
              { label: 'Travel Blog', href: '/blog' },
              { label: 'About Us', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-cream">Reach Us</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={phoneHref} className="transition-colors hover:text-cream">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={emailHref} className="transition-colors hover:text-cream">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLinks.general()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cream"
              >
                WhatsApp: +{siteConfig.whatsappNumber}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-shell flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
            {policySlugs.map((slug) => (
              <li key={slug}>
                <Link href={`/policies/${slug}`} className="transition-colors hover:text-cream">
                  {policyLabel(slug)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
