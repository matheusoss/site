'use client';

import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';
import { I18nProviderClient } from '@/locales/client';

type ProviderProps = {
  locale: string;
  children: ReactNode;
};

export function Providers({ locale, children }: ProviderProps) {
  return (
    <I18nProviderClient locale={locale}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
        enableSystem
      >
        {children}
      </ThemeProvider>
    </I18nProviderClient>
  );
}
