import { cn } from '@/lib/utils'

export const Heading = ({
  children,
  className,
  as: Tag = 'h1',
}: { children: React.ReactNode; className?: string; as?: keyof JSX.IntrinsicElements }) => {
  return (
    <Tag
      className={cn(
        'text-base md:text-xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary',
        className
      )}
    >
      {children}
    </Tag>
  )
}
