import type { Metadata } from 'next'
import './globals.scss'
import { Providers } from '@/providers'
import { AppLayout } from '@/widgets/layout/AppLayout'
import { Inter, Montserrat } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Сервис для прослушивания музыки',
}

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={inter.className || montserrat.className}>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  )
}
