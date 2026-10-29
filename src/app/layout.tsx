import type { Metadata, Viewport } from 'next'
import { Marcellus, Jost } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/components/LenisProvider'

const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marcellus',
  display: 'swap',
})

const jost = Jost({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sancttuary Men\'s Edition | André Sanches',
  description: 'Retiro imersivo de 3 dias para homens. Treino, frio, respiração, meditação, silêncio. Villa Tanah, São Roque/SP.',
  openGraph: {
    title: 'Sancttuary Men\'s Edition | André Sanches',
    description: 'Retiro imersivo de 3 dias para homens. Treino, frio, respiração, meditação, silêncio.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#121110',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // suppressHydrationWarning: extensões (ex.: QuillBot) injetam atributos no <html> antes do
    // React carregar; isto ignora só os atributos desta tag, não erros do resto da página
    <html
      suppressHydrationWarning
      lang="pt-BR"
      className={`${marcellus.variable} ${jost.variable}`}
      style={{
        '--f-display': `var(--font-marcellus), "Cormorant SC", Georgia, serif`,
        '--f-text': `var(--font-jost), "Helvetica Neue", Arial, sans-serif`,
      } as React.CSSProperties}
    >
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
