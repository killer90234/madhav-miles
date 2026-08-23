import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { WhatsAppButton } from '@/components/layout/whatsapp-button';
import { ToastProvider } from '@/components/providers/toast';
import { organizationJsonLd, jsonLdScript, websiteJsonLd } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import './globals.css';

/**
 * Root layout: fonts, global metadata, header/footer chrome and providers.
 * Organization + WebSite JSON-LD is emitted here so every route carries it.
 */

const fontDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

function safeBaseUrl(): URL | undefined {
  const raw = siteConfig.url?.trim();
  if (!raw) return undefined;
  try {
    return new URL(raw);
  } catch {
    return undefined;
  }
}

export const metadata: Metadata = {
  ...(safeBaseUrl() ? { metadataBase: safeBaseUrl() } : {}),
  title: {
    default: `${siteConfig.name} — Handcrafted India & International Holidays`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: '#1c302a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(websiteJsonLd()) }}
        />
        <ToastProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ToastProvider>
      </body>
    </html>
  );
}
