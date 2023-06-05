import { Providers } from './providers'
import Head from 'next/head'

export const metadata = {
  title: 'GenPen AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Head>
            <title>{metadata.title}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {children}
          </Providers>
      </body>
    </html>
  )
}
