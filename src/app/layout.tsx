import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import ProfileImage from '../components/ProfileImage'
import SocialLinks from '../components/SocialLinks';
import CardLinks from '@/components/CardLinks';

const font = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500'],
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
      <body className={font.className + " flex flex-col lg:flex-row min-h-screen"}>

        {/* bg-[rgba(38,38,38,0.3)] backdrop-blur-lg */}
        <aside id='sidebar' className='relative lg:sticky lg:top-0 flex flex-col justify-center items-center basis-1/5 lg:max-h-screen px-10 bg-slate-100'>
          {/* Profile */}
          <div className='flex flex-col items-center gap-3'>
            <ProfileImage imageSrc='/logo_450.webp' />

            <h1 className='w-auto text-center text-2xl'>Jack Pettigrew 👨🏼‍💻</h1>

            <div className='text-center'>
              <p className='text-sm italic'>Sofware Developer.</p>
              <p className='text-sm italic'>Full Stack.</p>
              <p className='text-sm italic'>Aspiring Game Developer.</p>
            </div>

            <div className="flex flex-col gap-3">
                <CardLinks title="Games" href="/games" />
                <CardLinks title="Projects" href="/projects" />
                <CardLinks title="YouTube" href="/youtube" />
                <CardLinks title="Other" href="/other" />
            </div>

            <nav className='text-center mt-3'>
              <SocialLinks />
            </nav>

          </div>

          {/* Tagline */}
          <div className='flex pt-3 lg:pt-10 pb-5'>
            <p className='hover:animate-pulse'>Powered by Coffee <span className='text-2xl pl-1'>☕️</span></p>
          </div>
        </aside>

        <main id='page-content' className="basis-4/5">
          {children}
        </main>
      </body>
    </html>
  )
}
