'use client';

import { useState } from 'react';

import { useToast } from '@/components/providers/toast';
import { trackEvent } from '@/lib/analytics';
import { submitEnquiry } from '@/lib/api';
import { isValidEmail, isValidPhone, normalizePhone } from '@/lib/leads';
import { cn } from '@/lib/utils';

const initial = { name: '', phone: '', email: '', message: '' };

export function EnquiryForm() {
  const { showToast } = useToast();
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update =
    (field: keyof typeof initial) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      setErrors((prev) => ({ ...prev, [field]: '' }));
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const nextErrors: Record<string, string> = {};
    if (form.name.trim().length < 2) nextErrors.name = 'Please tell us your name';
    if (!isValidPhone(form.phone)) nextErrors.phone = 'Enter a valid mobile number';
    if (form.email && !isValidEmail(form.email)) nextErrors.email = 'Enter a valid email address';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    const result = await submitEnquiry({
      name: form.name.trim(),
      phone: normalizePhone(form.phone),
      email: form.email.trim(),
      message: form.message.trim() || undefined,
      meta: {
        source: 'contact-page',
        landingPage: '/contact',
        device:
          window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop',
        timestamp: new Date().toISOString(),
      },
    });
    setSubmitting(false);

    if (result.ok) {
      trackEvent('enquiry_submit', { source: 'contact-form' });
      setDone(true);
      showToast(`Thanks ${form.name.split(' ')[0]}! We'll reach out shortly.`, 'success');
    } else {
      showToast(result.error, 'error');
    }
  };

  if (done) {
    return (
      <div className="card p-8 text-center">
        <div
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700"
          aria-hidden="true"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-charcoal">Request received</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-charcoal-muted">
          A travel planner will call you back within a few working hours. Want a faster answer?
          Message us on WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initial);
            setDone(false);
          }}
          className="btn-outline mt-5"
        >
          Send another request
        </button>
      </div>
    );
  }

  const inputClass = (field: string) =>
    cn('input', errors[field] && '!border-red-400 focus:!ring-red-200');

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
      <h2 className="font-display text-xl font-semibold text-charcoal">Request a callback</h2>
      <p className="mt-1.5 text-sm text-charcoal-muted">
        Fill this in and we&apos;ll call you — usually within a couple of hours, 9am–9pm IST.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
            Your name *
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={update('name')}
            placeholder="e.g. Priya Sharma"
            className={inputClass('name')}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
            Mobile number *
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update('phone')}
            placeholder="98XXXXXXXX"
            className={inputClass('phone')}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
            Email <span className="font-normal text-charcoal-muted">(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={update('email')}
            placeholder="you@example.com"
            className={inputClass('email')}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
            Where do you want to go?{' '}
            <span className="font-normal text-charcoal-muted">(optional)</span>
          </label>
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={update('message')}
            placeholder="Destination, rough dates, number of travellers…"
            className={inputClass('message')}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary mt-6 w-full disabled:opacity-60"
      >
        {submitting ? 'Sending…' : 'Request callback'}
      </button>
      <p className="mt-3 text-center text-xs text-charcoal-muted">
        We never share your details. No spam calls, promise.
      </p>
    </form>
  );
}
