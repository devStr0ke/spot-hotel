import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const heebo = Heebo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spot Hotel',
  description: 'Spot Hotel, votre partenaire de confiance pour trouver le bien qui vous ressemble !!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={heebo.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}