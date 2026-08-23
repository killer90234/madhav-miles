import { getBlogPostsSorted, getDestinationNames, packages } from '@/data';

/**
 * Lightweight client-side search index.
 *
 * The catalogue is small enough to search in-memory on the client — no
 * service required. When the catalogue grows past local seed data, swap
 * `buildSearchIndex` for a fetch of the same shape and nothing else changes.
 */

export type SearchResult = {
  type: 'destination' | 'package' | 'blog';
  title: string;
  subtitle: string;
  href: string;
  image?: string;
};

let cachedIndex: SearchResult[] | null = null;

export function buildSearchIndex(): SearchResult[] {
  if (cachedIndex) return cachedIndex;

  const destinations: SearchResult[] = getDestinationNames().map((entry) => ({
    type: 'destination',
    title: entry.name,
    subtitle: entry.region === 'domestic' ? 'India' : 'International',
    href: `/destinations/${entry.slug}`,
  }));

  const pkgs: SearchResult[] = packages.map((pkg) => ({
    type: 'package',
    title: pkg.title,
    subtitle: pkg.shortDescription,
    href: `/packages/${pkg.slug}`,
    image: pkg.heroImage,
  }));

  const posts: SearchResult[] = getBlogPostsSorted().map((post) => ({
    type: 'blog',
    title: post.title,
    subtitle: post.category,
    href: `/blog/${post.slug}`,
  }));

  cachedIndex = [...destinations, ...pkgs, ...posts];
  return cachedIndex;
}

/** Case-insensitive substring match across title and subtitle. */
export function searchCatalogue(query: string, limit = 8): SearchResult[] {
  const needle = query.trim().toLowerCase();
  if (needle.length < 2) return [];

  const index = buildSearchIndex();
  const scored = index
    .map((item) => {
      const haystack = `${item.title} ${item.subtitle}`.toLowerCase();
      const titleMatch = item.title.toLowerCase().indexOf(needle);
      const score =
        titleMatch === 0 ? 2 : titleMatch > 0 ? 1 : haystack.includes(needle) ? 0.5 : -1;
      return { item, score };
    })
    .filter((entry) => entry.score >= 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((entry) => entry.item);
}
