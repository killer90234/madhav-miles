import type { Metadata } from 'next';

/**
 * Central site configuration. Contact details come from public env vars so the
 * business can change them without touching code (PRD 94).
 */

const rawWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919426930638';

export const siteConfig = {
  name: 'Madhav Miles',
  tagline: 'Travel better. Travel personal.',
  description:
    'Madhav Miles plans domestic and international holidays around you — handpicked stays, honest pricing and itineraries built for the way you like to travel.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.madhavmiles.com',
  /** Digits only, required by the wa.me link format. */
  whatsappNumber: rawWhatsApp.replace(/\D/g, ''),
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? '+91 9426930638',
  email: process.env.NEXT_PUBLIC_EMAIL ?? 'mahadevmilestravels@gmail.com',
  office: '',
  officeHours: '',
  social: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    youtube: 'https://www.youtube.com/',
  },
  stats: {
    years: Number(process.env.NEXT_PUBLIC_STAT_YEARS ?? 15),
    travellers: Number(process.env.NEXT_PUBLIC_STAT_TRAVELLERS ?? 10000),
    destinations: Number(process.env.NEXT_PUBLIC_STAT_DESTINATIONS ?? 50),
  },
} as const;

export const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, '')}`;
export const emailHref = `mailto:${siteConfig.email}`;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  keywords?: string[];
};

const DEFAULT_OG_IMAGE =
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=70';

/** Builds a consistent metadata object (title, canonical, OG, Twitter) per route. */
export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  publishedTime,
  keywords,
}: PageMetaInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      locale: 'en_IN',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
