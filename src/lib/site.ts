import type { Metadata } from 'next';

/**
 * Central site configuration. Contact details come from public env vars so the
 * business can change them without touching code (PRD 94).
 */

const rawWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || '919426930638';
const siteUrlRaw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || '';
let siteUrl = siteUrlRaw;
if (siteUrl) {
  try {
    new URL(siteUrl);
  } catch {
    siteUrl = '';
  }
}
const phoneRaw = process.env.NEXT_PUBLIC_PHONE_NUMBER?.trim() || '+91 9426930638';
const emailRaw = process.env.NEXT_PUBLIC_EMAIL?.trim() || 'mahadevmilestravels@gmail.com';

function toNumberEnv(value: string | undefined, fallback: number): number {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

export const siteConfig = {
  name: 'Mahadev Miles',
  tagline: 'Travel better. Travel personal.',
  description:
    'Mahadev Miles plans domestic and international holidays around you — handpicked stays, honest pricing and itineraries built for the way you like to travel.',
  url: siteUrl,
  /** Digits only, required by the wa.me link format. */
  whatsappNumber: rawWhatsApp.replace(/\D/g, ''),
  phone: phoneRaw,
  email: emailRaw,
  office: '',
  officeHours: '',
  social: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    youtube: 'https://www.youtube.com/',
  },
  stats: {
    years: toNumberEnv(process.env.NEXT_PUBLIC_STAT_YEARS, 15),
    travellers: toNumberEnv(process.env.NEXT_PUBLIC_STAT_TRAVELLERS, 10000),
    destinations: toNumberEnv(process.env.NEXT_PUBLIC_STAT_DESTINATIONS, 50),
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
  let url: string | undefined;
  if (siteConfig.url) {
    try {
      url = new URL(path, siteConfig.url).toString();
    } catch {
      url = path;
    }
  } else {
    url = path;
  }

  const hasBase = Boolean(siteConfig.url);
  return {
    title,
    description,
    keywords,
    ...(hasBase && url ? { alternates: { canonical: url } } : {}),
    openGraph: {
      title,
      description,
      ...(hasBase && url ? { url } : {}),
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
