import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'

type Theme = 'light' | 'dark' | 'system'

type Props = {
  currentTheme?: Theme
}

const ThemeIcon = ({ currentTheme }: Props) => {
  switch (currentTheme) {
    case 'light':
      return <SunIcon size={12} />
    case 'dark':
      return <MoonIcon size={12} />
    default:
      return <SunIcon size={12} />
  }
}

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center justify-center">
      <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <ThemeIcon currentTheme={theme as Theme} />
      </Button>
    </div>
  )
}
