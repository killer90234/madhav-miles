import Link from 'next/link';

import type { BlogPost } from '@/types';
import { formatShortDate } from '@/lib/utils';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card card-hover group overflow-hidden">
      <Link href={`/blog/${post.slug}`} aria-label={post.title}>
        <div className="relative aspect-[16/10] overflow-hidden bg-sand-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.heroImage}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-editorial group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-accent">
            {post.category}
            <span aria-hidden="true">·</span>
            <span className="font-normal normal-case text-charcoal-muted">
              {post.readingMinutes} min read
            </span>
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-charcoal group-hover:text-brand">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal-muted">
            {post.excerpt}
          </p>
          <p className="mt-4 text-xs text-charcoal-muted">
            {post.author} · {formatShortDate(post.publishedAt)}
          </p>
        </div>
      </Link>
    </article>
  );
}
