'use client';

import { useState } from 'react';
import { Link } from '@/components/link';
import { stack } from '@/lib/stack';
import { Tool } from './tool';

export const Stack = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="grid gap-3">
        {stack
          .sort((a, b) => (b.affiliate ? 1 : -1))
          .filter((tool) => tool.featured || open)
          .map((tool) => (
            <Tool key={tool.name} {...tool} />
          ))}
      </div>
      {!open && stack.some((tool) => !tool.affiliate) && (
        <div className="flex w-full items-center justify-between gap-4">
          <button
            className="cursor-pointer text-left text-foreground-lighter text-sm hover:text-foreground"
            onClick={() => setOpen(true)}
            type="button"
          >
            Show more tools...
          </button>
          <Link
            aria-label="Logo API"
            className="text-foreground-lighter text-xs hover:text-foreground"
            href="https://logo.dev"
            target="_blank"
          >
            Logos provided by Logo.dev
          </Link>
        </div>
      )}
    </>
  );
};
