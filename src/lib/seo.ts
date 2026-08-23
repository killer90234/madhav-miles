import type { BlogPost, Destination, FAQ, Package } from '@/types';
import { siteConfig } from './site';

/**
 * JSON-LD structured data builders.
 *
 * Each function returns a plain object ready for
 * `<script type="application/ld+json" dangerouslySetInnerHTML={...}>`.
 * Kept separate from `buildMetadata` so pages can compose both independently.
 */

type JsonLdObject = Record<string, unknown>;

function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}

export function organizationJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    ...(siteConfig.office
      ? {
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.office,
            addressCountry: 'IN',
          },
        }
      : {}),
    sameAs: Object.values(siteConfig.social),
  };
}

export function websiteJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/packages?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function faqJsonLd(faqs: FAQ[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function destinationJsonLd(destination: Destination): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: destination.name,
    description: destination.description,
    url: absoluteUrl(`/destinations/${destination.slug}`),
    image: destination.heroImage,
    touristType: destination.region === 'domestic' ? 'Domestic travellers' : 'International travellers',
    ...(destination.startingPrice
      ? { offers: { '@type': 'Offer', price: destination.startingPrice, priceCurrency: 'INR' } }
      : {}),
  };
}

export function packageJsonLd(pkg: Package): JsonLdObject {
  const cheapest = pkg.priceVariants.reduce(
    (min, variant) => Math.min(min, variant.pricePerPerson),
    Number.POSITIVE_INFINITY,
  );
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: pkg.title,
    description: pkg.shortDescription,
    url: absoluteUrl(`/packages/${pkg.slug}`),
    image: [pkg.heroImage, ...pkg.gallery].slice(0, 5),
    brand: { '@type': 'Brand', name: siteConfig.name },
    ...(Number.isFinite(cheapest)
      ? {
          offers: {
            '@type': 'Offer',
            price: cheapest,
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: absoluteUrl(`/packages/${pkg.slug}`),
          },
        }
      : {}),
    aggregateRating:
      pkg.reviewCount > 0
        ? {
            '@type': 'AggregateRating',
            ratingValue: pkg.rating,
            reviewCount: pkg.reviewCount,
          }
        : undefined,
  };
}

export function blogPostJsonLd(post: BlogPost): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.heroImage,
    datePublished: post.publishedAt,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Renders any JSON-LD object as the content of a script tag. */
export function jsonLdScript(data: JsonLdObject): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
