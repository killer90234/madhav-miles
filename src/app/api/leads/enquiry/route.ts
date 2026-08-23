import { NextResponse } from 'next/server';
import { generateReference, validateEnquiry } from '@/lib/leads';
import type { EnquiryPayload } from '@/types';

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as EnquiryPayload;
    const validation = validateEnquiry(payload);
    if (!validation.valid) {
      return NextResponse.json({ error: Object.values(validation.errors)[0] }, { status: 400 });
    }
    // In production, persist to CRM / DB / email here.
    const reference = generateReference();
    console.log('[enquiry]', reference, payload);
    return NextResponse.json({ ok: true, reference });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
