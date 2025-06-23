'use client';

import { useCurrentLocale } from '@/locales/client';

export function Localized({
  children,
}: {
  children: Record<string, React.ReactNode>;
}) {
  const locale = useCurrentLocale();
  return <>{children[locale] || children.pt}</>;
}
