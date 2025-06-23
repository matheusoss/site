import type { Metadata } from 'next';

import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'sonner';
import { Footer } from '@/components/footer';
import { JsonLd } from '@/components/json-ld';
import { Navigation } from '@/components/navigation';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { WindowsEmojiPolyfill } from '@/components/windows-emoji-polyfill';
import { mono, sans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Matheus Oliveira',
  description: 'Software & Data Engineer',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html className="scroll-smooth" lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          sans.variable,
          mono.variable,
          'bg-background font-sans text-foreground-light leading-relaxed antialiased'
        )}
      >
        <Providers locale={locale}>
          <div className="mx-auto grid max-w-2xl gap-12 px-4 py-8 pb-12 sm:px-8">
            <Navigation />
            {children}
            <Footer />
          </div>
          <Toaster />
          <ThemeSwitcher />
          <WindowsEmojiPolyfill />
          <JsonLd />
          <Analytics debug={true} />
        </Providers>
      </body>
    </html>
  );
}
