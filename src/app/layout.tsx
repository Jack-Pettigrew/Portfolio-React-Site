import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar';

const font = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'Jack Pettigrew | Game Dev',
  description: 'The portfolio of an aspiring Game Developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Border padding */}
      <body className={font.className + " flex flex-col lg:flex-row min-h-screen"}>

        <Sidebar />

        <main id='page-content' className="basis-4/5">
          {children}
        </main>
      </body>
    </html>
  )
}
