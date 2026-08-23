import { siteConfig } from './site';

/**
 * WhatsApp deep-link builders — the heart of the WhatsApp-first lead flow.
 *
 * All numbers are digits-only (wa.me format). Messages are pre-filled so the
 * traveller never faces a blank chat: context (destination, package, offer)
 * is baked into the greeting, and UTM params ride along for attribution.
 */

export type WhatsAppContext =
  | { type: 'general' }
  | { type: 'destination'; destinationName?: string; slug?: string }
  | { type: 'package'; packageTitle: string; slug?: string }
  | { type: 'offer'; offerTitle: string }
  | { type: 'departure'; departureTitle: string; departureDate: string };

function buildMessage(context: WhatsAppContext): string {
  switch (context.type) {
    case 'destination':
      return context.destinationName
        ? `Hi Madhav Miles! I'm interested in a holiday to ${context.destinationName}. Could you share packages and prices?`
        : "Hi Madhav Miles! I'd like help planning a holiday.";
    case 'package':
      return `Hi Madhav Miles! I'm interested in the "${context.packageTitle}" package. Please share details and pricing.`;
    case 'offer':
      return `Hi Madhav Miles! I'd like to know more about your "${context.offerTitle}" offer.`;
    case 'departure':
      return `Hi Madhav Miles! I'm interested in the group departure "${context.departureTitle}" (${context.departureDate}). Please share availability and booking steps.`;
    case 'general':
    default:
      return "Hi Madhav Miles! I'd like help planning a holiday.";
  }
}

export function buildWhatsAppUrl(context: WhatsAppContext): string {
  const message = buildMessage(context);
  const source =
    context.type === 'destination' || context.type === 'package'
      ? context.slug
      : undefined;
  const utm = new URLSearchParams({
    utm_source: 'whatsapp',
    utm_medium: 'chat',
    ...(source ? { utm_campaign: source } : {}),
  });
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `${message}\n\n${utm.toString()}`,
  )}`;
}

/** Convenience wrappers used by buttons across the site. */
export const whatsappLinks = {
  general: () => buildWhatsAppUrl({ type: 'general' }),
  destination: (name?: string, slug?: string) =>
    buildWhatsAppUrl({ type: 'destination', destinationName: name, slug }),
  package: (title: string, slug?: string) =>
    buildWhatsAppUrl({ type: 'package', packageTitle: title, slug }),
  offer: (title: string) => buildWhatsAppUrl({ type: 'offer', offerTitle: title }),
  departure: (title: string, date?: string) =>
    buildWhatsAppUrl({
      type: 'departure',
      departureTitle: title,
      departureDate: date ?? 'upcoming dates',
    }),
};
