'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { phoneHref, siteConfig } from '@/lib/site';
import { whatsappLinks } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';

/**
 * Site header: sticky, transparent-over-hero is skipped in favour of a solid
 * surface for simplicity and contrast; mobile drawer for small screens.
 */

const NAV_LINKS = [
  { label: 'Destinations', href: '/destinations' },
  { label: 'Packages', href: '/packages' },
  { label: 'Fixed Departures', href: '/fixed-departures' },
  { label: 'Offers', href: '/offers' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
] as const;

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the drawer on navigation and lock body scroll while open.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 shadow-header backdrop-blur">
      <div className="container-shell flex h-18 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-media bg-brand font-display text-lg font-bold text-cream">
            MM
          </span>
          <span className="font-display text-xl font-semibold text-brand-dark">
            Mahadev<span className="text-accent"> Miles</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand',
                pathname.startsWith(link.href) ? 'text-brand' : 'text-charcoal-light',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={phoneHref}
            onClick={() => trackEvent('call_click', { source: 'header' })}
            className="text-sm font-medium text-charcoal-light transition-colors hover:text-brand"
          >
            {siteConfig.phone}
          </a>
          <a
            href={whatsappLinks.general()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { source: 'header' })}
            className="btn-whatsapp !px-4 !py-2.5"
          >
            WhatsApp Us
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="flex h-11 w-11 items-center justify-center rounded-btn text-charcoal lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-charcoal/10 bg-cream lg:hidden">
          <nav aria-label="Mobile" className="container-shell flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-btn px-3 py-3 text-base font-medium',
                  pathname.startsWith(link.href)
                    ? 'bg-brand/10 text-brand'
                    : 'text-charcoal',
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappLinks.general()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { source: 'mobile-menu' })}
              className="btn-whatsapp mt-3"
            >
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
