import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { BlogCard } from '@/components/cards/blog-card';
import { PageHero } from '@/components/ui/page-hero';
import { getBlogPostBySlug, getRelatedBlogPosts, blogPosts } from '@/data';
import { buildMetadata } from '@/lib/site';
import { blogPostJsonLd, jsonLdScript } from '@/lib/seo';
import { formatDate, formatShortDate } from '@/lib/utils';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.heroImage,
    keywords: [post.category, 'travel guide'],
    publishedTime: post.publishedAt,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedBlogPosts(post, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(blogPostJsonLd(post)) }}
      />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        image={post.heroImage}
        breadcrumbs={[{ label: 'Journal', href: '/blog' }, { label: post.category }]}
      />

      <article className="section container-shell max-w-reading">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-charcoal-muted">
          <span className="font-medium text-charcoal">{post.author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingMinutes} min read</span>
        </div>

        <div className="mt-8 space-y-8">
          {post.body.map((section, index) => (
            <section key={index}>
              {section.heading && (
                <h2 className="mb-3 font-display text-2xl font-semibold text-charcoal">
                  {section.heading}
                </h2>
              )}
              <div className="space-y-4">
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="leading-relaxed text-charcoal-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-4 space-y-2.5">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-charcoal-muted">
                      <span
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <p className="mt-10 border-t border-charcoal/10 pt-5 text-xs text-charcoal-muted">
          Published {formatShortDate(post.publishedAt)}
        </p>
      </article>

      {related.length > 0 && (
        <section className="section bg-sand-50">
          <div className="container-shell">
            <h2 className="font-display text-display-sm font-semibold text-charcoal">
              Keep reading
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
