'use client';

import { usePathname } from 'next/navigation';
import { Link } from '@/components/link';
import { cn } from '@/lib/utils';
import { LocalTime } from './local-time';

const links = [
  {
    href: '/',
    label: 'Home',
    active: (pathname: string) => pathname === '/',
  },
  {
    href: '/about',
    label: 'Sobre',
    active: (pathname: string) => pathname.startsWith('/about'),
  },
  {
    href: '/work',
    label: 'Trabalho',
    active: (pathname: string) => pathname.startsWith('/work'),
  },
  {
    href: '/projects',
    label: 'Projetos',
    active: (pathname: string) => pathname.startsWith('/projects'),
  },
  {
    href: '/blog',
    label: 'Blog',
    active: (pathname: string) => pathname.startsWith('/blog'),
  },
  {
    href: '/contact',
    label: 'Contato',
    active: (pathname: string) => pathname.startsWith('/contact'),
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between text-xs">
      <LocalTime />
      <ul className="flex gap-4">
        {links.map(({ href, label, active }) => (
          <li key={href}>
            <Link
              className={cn(active(pathname) ? 'text-primary' : 'border-none')}
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
