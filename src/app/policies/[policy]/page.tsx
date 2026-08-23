import type { Metadata } from 'next';

import { PageHero } from '@/components/ui/page-hero';
import { policies } from '@/data';
import { buildMetadata } from '@/lib/site';
import Link from 'next/link';

type Props = { params: Promise<{ policy: string }> };

export function generateStaticParams() {
  return policies.map((policy) => ({ policy: policy.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { policy: slug } = await params;
  const policy = policies.find((item) => item.slug === slug);
  if (!policy) return {};
  return buildMetadata({
    title: policy.title,
    description: policy.description,
    path: `/policies/${policy.slug}`,
  });
}

export default async function PolicyPage({ params }: Props) {
  const { policy: slug } = await params;
  const policy = policies.find((item) => item.slug === slug);
  if (!policy) return null;

  return (
    <>
      <PageHero
        eyebrow="Policies"
        title={policy.title}
        description={policy.description}
        breadcrumbs={[{ label: 'Policies' }, { label: policy.title }]}
      />

      <div className="section container-shell grid gap-10 lg:grid-cols-[240px_1fr]">
        {/* Side nav */}
        <nav aria-label="Policies" className="h-fit lg:sticky lg:top-24">
          <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-muted">
            Our policies
          </p>
          <ul className="mt-3 space-y-1.5">
            {policies.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/policies/${item.slug}`}
                  aria-current={item.slug === slug ? 'page' : undefined}
                  className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                    item.slug === slug
                      ? 'bg-brand/10 font-medium text-brand'
                      : 'text-charcoal-muted hover:bg-sand-50 hover:text-charcoal'
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <article className="max-w-reading">
          <p className="text-xs text-charcoal-muted">Last updated {policy.lastUpdated}</p>
          <div className="mt-8 space-y-10">
            {policy.sections.map((section) => (
              <section key={section.heading} id={slugify(section.heading)}>
                <h2 className="font-display text-xl font-semibold text-charcoal">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed text-charcoal-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2.5">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-charcoal-muted"
                      >
                        <span
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
