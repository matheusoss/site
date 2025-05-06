import type React from 'react'
import { cn } from '@/lib/utils'

export const Highlight = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return <span className={cn('bg-neutral-100 dark:bg-neutral-900 px-1 py-0.5', className)}>{children}</span>
}
