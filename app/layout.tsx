import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/shared/header'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
