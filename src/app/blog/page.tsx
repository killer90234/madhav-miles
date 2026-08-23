import type { Metadata } from 'next';

import { BlogCard } from '@/components/cards/blog-card';
import { PageHero } from '@/components/ui/page-hero';
import { getBlogPostsSorted, getBlogCategories } from '@/data';
import { buildMetadata } from '@/lib/site';
import Link from 'next/link';

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export const metadata: Metadata = buildMetadata({
  title: 'Travel Journal — Guides & Stories',
  description:
    'Practical guides, honest reviews and stories from our trips — written by people who have actually been there.',
  path: '/blog',
  keywords: ['travel blog', 'travel guides', 'travel tips'],
});

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams;
  const rawCategory = Array.isArray(params.category) ? params.category[0] : params.category;
  const category = rawCategory?.toLowerCase();

  const sorted = getBlogPostsSorted();
  const categories = getBlogCategories().filter(Boolean) as string[];
  const lowerCategories = categories.map((c) => c.toLowerCase());
  const posts =
    category && lowerCategories.includes(category)
      ? sorted.filter((post) => post.category.toLowerCase() === category)
      : sorted;

  return (
    <>
      <PageHero
        eyebrow="Travel Journal"
        title="Guides worth packing"
        description="No listicles, no AI fluff — just field notes from our own trips to help you plan yours."
        breadcrumbs={[{ label: 'Journal' }]}
      />

      <section className="section container-shell">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/blog"
            aria-current={!category ? 'true' : undefined}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              !category
                ? 'border-brand bg-brand text-cream'
                : 'border-charcoal/15 bg-white text-charcoal hover:border-brand hover:text-brand'
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${encodeURIComponent(cat.toLowerCase())}`}
              aria-current={category === cat.toLowerCase() ? 'true' : undefined}
              className={`rounded-full border px-4 py-2 text-sm font-medium capitalize transition-colors ${
                category === cat.toLowerCase()
                  ? 'border-brand bg-brand text-cream'
                  : 'border-charcoal/15 bg-white text-charcoal hover:border-brand hover:text-brand'
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <p className="mt-10 text-sm text-charcoal-muted">
            No stories here yet — check back soon.
          </p>
        )}
      </section>
    </>
  );
}
