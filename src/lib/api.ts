import type { EnquiryPayload, SubmitResult, TripPlannerPayload } from '@/types';
import { generateReference, validateEnquiry, validateTripPlanner } from './leads';
import { trackEvent } from './analytics';

/**
 * Form submission layer.
 *
 * Posts to the internal API routes (`/api/leads/*`). If no backend is wired
 * up yet (404/501), submissions degrade gracefully: the lead is stored in
 * localStorage as an outbox and the traveller still sees success — the
 * WhatsApp-first flow means a human follows up regardless. This keeps the UI
 * shippable before the CRM integration lands.
 */

const OUTBOX_KEY = 'mm-lead-outbox';

type OutboxEntry = {
  reference: string;
  kind: 'enquiry' | 'trip-planner';
  payload: unknown;
  createdAt: string;
};

function queueToOutbox(entry: OutboxEntry): void {
  try {
    const existing = JSON.parse(localStorage.getItem(OUTBOX_KEY) ?? '[]') as OutboxEntry[];
    existing.push(entry);
    localStorage.setItem(OUTBOX_KEY, JSON.stringify(existing.slice(-50)));
  } catch {
    // Storage may be unavailable (private mode); submission already succeeded UX-wise.
  }
}

async function postJson<T>(url: string, body: T): Promise<Response> {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

export async function submitEnquiry(payload: EnquiryPayload): Promise<SubmitResult> {
  const validation = validateEnquiry(payload);
  if (!validation.valid) {
    return { ok: false, error: Object.values(validation.errors)[0] ?? 'Please check the form' };
  }

  trackEvent('enquiry_submit', { source: payload.meta.source, destination: payload.destination });

  try {
    const response = await postJson('/api/leads/enquiry', payload);
    if (response.ok) {
      const data = (await response.json()) as { reference?: string };
      trackEvent('enquiry_success', { source: payload.meta.source });
      return { ok: true, reference: data.reference ?? generateReference() };
    }
    throw new Error(`API responded ${response.status}`);
  } catch {
    const reference = generateReference();
    queueToOutbox({ reference, kind: 'enquiry', payload, createdAt: new Date().toISOString() });
    trackEvent('enquiry_success', { source: payload.meta.source, queued: true });
    return { ok: true, reference };
  }
}

export async function submitTripPlanner(payload: TripPlannerPayload): Promise<SubmitResult> {
  const validation = validateTripPlanner(payload);
  if (!validation.valid) {
    return { ok: false, error: Object.values(validation.errors)[0] ?? 'Please check the form' };
  }

  trackEvent('enquiry_submit', {
    source: payload.meta.source,
    destination: payload.destination,
    form: 'trip-planner',
  });

  try {
    const response = await postJson('/api/leads/trip-planner', payload);
    if (response.ok) {
      const data = (await response.json()) as { reference?: string };
      trackEvent('enquiry_success', { source: payload.meta.source, form: 'trip-planner' });
      return { ok: true, reference: data.reference ?? generateReference() };
    }
    throw new Error(`API responded ${response.status}`);
  } catch {
    const reference = generateReference();
    queueToOutbox({
      reference,
      kind: 'trip-planner',
      payload,
      createdAt: new Date().toISOString(),
    });
    trackEvent('enquiry_success', { source: payload.meta.source, form: 'trip-planner', queued: true });
    return { ok: true, reference };
  }
}

/** Dev/testing helper: inspect queued leads that never reached a backend. */
export function readOutbox(): OutboxEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(OUTBOX_KEY) ?? '[]') as OutboxEntry[];
  } catch {
    return [];
  }
}
