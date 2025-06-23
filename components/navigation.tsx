'use client';

import { usePathname } from 'next/navigation';
import { Link } from '@/components/link';
import { cn } from '@/lib/utils';
import { LocalTime } from './local-time';

type NavigationProps = {
  dictionary: {
    home: string;
    about: string;
    work: string;
    projects: string;
    blog: string;
    contact: string;
  };
};

export const Navigation = ({ dictionary }: NavigationProps) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'pt';

  const links = [
    { slug: '', label: dictionary.home },
    { slug: 'about', label: dictionary.about },
    { slug: 'work', label: dictionary.work },
    { slug: 'projects', label: dictionary.projects },
    { slug: 'blog', label: dictionary.blog },
    { slug: 'contact', label: dictionary.contact },
  ];

  return (
    <nav className="flex items-center justify-between text-xs">
      <LocalTime />
      <ul className="flex gap-4">
        {links.map(({ slug, label }) => {
          const href = `/${locale}${slug ? `/${slug}` : ''}`;
          const isActive = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <li key={href}>
              <Link
                className={cn(isActive ? 'text-primary' : 'border-none')}
                href={href}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
