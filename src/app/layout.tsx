import type { Metadata } from 'next'
import './globals.scss'
import { Providers } from '@/providers'
import { AppLayout } from '@/widgets/layout/AppLayout'

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Сервис для прослушивания музыки',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  )
}
