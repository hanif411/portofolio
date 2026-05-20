import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/src/components/home/Header'
import { ThemeProvider } from '@/src/components/ui/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hanif Sholihin - Fullstack Developer & Technical Troubleshooter',
  description: 'Building reliable systems & efficient automations. Bridging complex business problems with technical solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <body className={`${inter.className} bg-background text-foreground`}>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </body>
      </ThemeProvider>
    </html>
  )
}