import type { Metadata } from 'next';

import { EnquiryForm } from '@/components/forms/enquiry-form';
import { PageHero } from '@/components/ui/page-hero';
import { buildMetadata, emailHref, phoneHref, siteConfig } from '@/lib/site';
import { whatsappLinks } from '@/lib/whatsapp';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Talk to a real travel planner — call, WhatsApp or request a callback and we will build your trip around you.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a human, not a chatbot"
        description="Call, WhatsApp or leave your number — you'll get a planner who has actually been where you want to go."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="section container-shell grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6">
          {[
            {
              label: 'Call us',
              value: siteConfig.phone,
              href: phoneHref,
              hint: '9am – 9pm IST, every day',
            },
            {
              label: 'WhatsApp',
              value: 'Message us anytime',
              href: whatsappLinks.general(),
              hint: 'Fastest replies, usually within minutes',
            },
            {
              label: 'Email',
              value: siteConfig.email,
              href: emailHref,
              hint: 'For detailed itineraries and invoices',
            },
          ].map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="card card-hover block p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-charcoal-muted">
                {channel.label}
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-charcoal">{channel.value}</p>
              <p className="mt-1 text-sm text-charcoal-muted">{channel.hint}</p>
            </a>
          ))}

          <div className="rounded-card bg-sand-50 p-6">
            <h2 className="font-display text-base font-semibold text-charcoal">Office</h2>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">
              Visits by appointment only — our planners are mostly out exploring so we can send
              you honest recommendations.
            </p>
          </div>
        </div>

        <EnquiryForm />
      </section>
    </>
  );
}
