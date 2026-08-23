import { NextResponse } from 'next/server';
import { generateReference, validateTripPlanner } from '@/lib/leads';
import type { TripPlannerPayload } from '@/types';

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as TripPlannerPayload;
    const validation = validateTripPlanner(payload);
    if (!validation.valid) {
      return NextResponse.json({ error: Object.values(validation.errors)[0] }, { status: 400 });
    }
    const reference = generateReference();
    console.log('[trip-planner]', reference, payload);
    return NextResponse.json({ ok: true, reference });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
