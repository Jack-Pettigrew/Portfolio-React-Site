import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar';
import DarkModeToggle from '@/components/DarkModeToggle';

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

        <DarkModeToggle />
    
        <Sidebar />

        <main id='page-content' className="basis-4/5 dark:bg-slate-800">
          {children}
        </main>
      </body>
    </html>
  )
}
