'use client';

import { useState } from 'react';

import type { FAQ } from '@/types';
import { cn } from '@/lib/utils';

export function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-charcoal/10 rounded-card border border-charcoal/10 bg-white shadow-card">
      {faqs.map((faq, index) => {
        const open = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-medium text-charcoal">{faq.question}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
                className={cn('shrink-0 text-brand transition-transform duration-200', open && 'rotate-45')}
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            {open && (
              <p className="px-5 pb-5 text-sm leading-relaxed text-charcoal-muted">{faq.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
