/** Tiny class-name joiner (keeps JSX readable without extra dependencies). */
export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(' ');
}

const inr = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

export function formatPrice(value?: number): string {
  if (typeof value !== 'number' || Number.isNaN(value)) return 'On request';
  return inr.format(value);
}

export function formatCompactNumber(value: number): string {
  return new Intl.NumberFormat('en-IN').format(value);
}

/** "6 Nights / 7 Days" */
export function formatDuration(nights: number): string {
  return `${nights} ${nights === 1 ? 'Night' : 'Nights'} / ${nights + 1} Days`;
}

export function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatShortDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export function discountPercent(oldPrice: number, newPrice: number): number {
  if (oldPrice <= 0 || newPrice >= oldPrice) return 0;
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Query params arrive as untrusted strings. Normalise to a safe slug-ish token
 * before using them for lookups or rendering (PRD 95).
 */
export function sanitizeParam(value: string | string[] | undefined): string {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return '';
  return raw.slice(0, 80).replace(/[^a-zA-Z0-9\s\-_.,+]/g, '');
}

export function sanitizeNumberParam(
  value: string | string[] | undefined,
  fallback: number,
): number {
  const raw = sanitizeParam(value);
  const parsed = Number.parseInt(raw, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}
