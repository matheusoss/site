import { cn } from '@/lib/utils'
import type React from 'react'

export const Paragraph = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return <p className={cn('text-sm lg:text-base font-normal text-muted-foreground', className)}>{children}</p>
}
