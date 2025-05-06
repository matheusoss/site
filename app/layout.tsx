import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/app/providers'
import { Sidebar } from '@/components/sidebar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Matheus Oliveira',
  description: 'Software & Data Engineer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} whitespace-pre-line h-screen overscroll-none overflow-hidden flex antialiased bg-background`}
      >
        <Providers>
          <Sidebar />
          <div className="lg:pl-2 lg:pt-2  bg-neutral-100 dark:bg-neutral-900 flex-1 overflow-y-auto">
            <div className="flex-1 bg-background min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 dark:border-neutral-800 overflow-y-auto">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
