import type { Metadata } from 'next'
import './globals.css'
import { Navbar, Footer } from "@/components"



export const metadata: Metadata = {
  title: 'Leandro Bressan',
  description: 'Asesor en ventas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
