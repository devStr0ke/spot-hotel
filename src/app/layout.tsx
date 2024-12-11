import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const heebo = Heebo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Site Name',
  description: 'Your site description',
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