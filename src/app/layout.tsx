import './globals.scss'
import { Providers } from '@/providers'
import { AppLayout } from '@/widgets/layout/AppLayout'
import { inter } from '@/app/fonts/inter'
import { montserrat } from '@/app/fonts/montserrat'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className}  ${montserrat.className}`}>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  )
}
