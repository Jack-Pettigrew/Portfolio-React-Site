import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import ProfileImage from '../components/ProfileImage'
import SocialLinks from '../components/SocialLinks';

const font = Poppins({
  subsets: ["latin"],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Jack Pettigrew | Game Dev',
  description: 'An aspiring Game Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Border padding */}
      {/* bg-gray-300 */}
      <body className={font.className + " relative flex flex-col lg:flex-row min-h-screen"}>

        {/* <div className="fixed w-[105vw] h-[105vh] top-[-10px] right-[-10px] blur-sm bg-[url('/images/scifihallway.webp')] bg-cover bg-center bg-[#009cff] bg-blend-luminosity" /> */}

        {/* bg-[rgba(38,38,38,0.3)] backdrop-blur-lg */}
        <aside className='lg:sticky lg:top-0 flex basis-1/5 flex-col justify-between items-center lg:pt-20 lg:pb-5 lg:max-h-screen px-10 bg-slate-100'>
          {/* Profile */}
          <div className='flex flex-col justify-center items-center gap-3 basis-3/4'>
            <ProfileImage imageSrc='/logo_450.webp' />
            <h1 className='w-auto text-center text-3xl'>Jack Pettigrew 👋🏻</h1>
            <div className='text-center'>
              <p className='text-md italic'>Sofware Developer.</p>
              <p className='text-md italic'>Full Stack.</p>
              <p className='text-md italic'>Aspiring Game Developer.</p>
            </div>
            <nav className='text-center mt-3'>
              <SocialLinks />
            </nav>
          </div>

          {/* Tagline */}
          <div>
            <p className='hover:animate-pulse'>Powered by Coffee <span className='text-2xl pl-1'>☕️</span></p>
          </div>
        </aside>

        <main className="flex basis-4/5 p-5">
          {children}
        </main>
      </body>
    </html>
  )
}
