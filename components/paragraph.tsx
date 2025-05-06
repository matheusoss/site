import type React from 'react'
import { cn } from '@/lib/utils'

export const Paragraph = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return <p className={cn('text-sm lg:text-base font-normal text-muted-foreground', className)}>{children}</p>
}
