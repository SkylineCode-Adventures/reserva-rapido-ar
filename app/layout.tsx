import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin']})
const style = ""
export const metadata: Metadata = {
  title: 'Reserva Rapido | Home',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="h-screen min-w-full">
      <Header />
      <section className='mx-8'>{children}</section>
      </body>
    </html>
  )
}
