import Link from 'next/link';

/**
 * Shared hero band for inner pages: breadcrumb trail, eyebrow, title, intro.
 * Keeps every listing/detail route visually consistent.
 */

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  breadcrumbs?: { label: string; href?: string }[];
};

export function PageHero({ eyebrow, title, description, image, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-cream">
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/30" />
        </>
      )}
      <div className="container-shell relative py-14 sm:py-20">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-cream/70">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-cream">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  <span aria-hidden="true">/</span>
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-cream">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-cream">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="eyebrow !text-accent-soft">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-display-lg font-semibold text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/80">{description}</p>
        )}
      </div>
    </section>
  );
}
