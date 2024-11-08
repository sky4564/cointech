import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CoinTech',
  description: 'Cryptocurrency Trading Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-screen bg-gradient-to-br from-gray-900 to-black text-white antialiased`}>
        <div className="flex flex-col h-full">
          <Navigation />
          <div className="flex-1 w-full">
            <Providers>
              {children}
            </Providers>
          </div>
        </div>
      </body>
    </html>
  )
} 