/**
 * Minimal analytics layer with graceful degradation.
 *
 * GA4 via gtag.js if NEXT_PUBLIC_GA_ID is configured; otherwise every call is
 * a safe no-op so components can fire events unconditionally. Events are also
 * logged in development for smoke-testing funnels without a real property.
 *
 * Kept deliberately dependency-free: swap the internals for Segment/GTM later
 * without touching call sites.
 */

const gaId = process.env.NEXT_PUBLIC_GA_ID ?? '';

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

export const analyticsEnabled = Boolean(gaId);

function devLog(event: string, params?: Record<string, unknown>) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.debug(`[analytics] ${event}`, params ?? {});
  }
}

function gtag(): GtagFn | undefined {
  if (!analyticsEnabled || typeof window === 'undefined') return undefined;
  return window.gtag;
}

export type AnalyticsEvent =
  | 'page_view'
  | 'whatsapp_click'
  | 'call_click'
  | 'enquiry_submit'
  | 'enquiry_success'
  | 'enquiry_error'
  | 'package_view'
  | 'destination_view'
  | 'search'
  | 'filter_apply';

/** Fire a custom event. Never throws, even before consent scripts load. */
export function trackEvent(event: AnalyticsEvent, params: Record<string, unknown> = {}): void {
  try {
    gtag()?.('event', event, params);
    devLog(event, params);
  } catch {
    // Analytics must never break a user interaction.
  }
}

/** Page-view helper for client-side navigations if needed outside App Router. */
export function trackPageView(path: string, title?: string): void {
  trackEvent('page_view', { page_path: path, page_title: title });
}
