import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col gap-3 justify-center items-center w-full h-full'>
            <a className="duration-200 hover:scale-125 hover:rotate-6" href="https://youtu.be/HQoRXhS7vlU" target="_blank">
                <Image src={"/images/characters/lilal.webp"} width={100} height={100} alt='Little Alien Image' />
            </a>
            <h1 className="text-3xl font-bold animate-pulse">404</h1>
            <h2 className="text-xl">You got so lost you found an Alien!</h2>
            <p className="text-sm">...let's keep this between us...</p>
            <Link href="/" className="text-indigo-500 hover:text-indigo-800 font-medium">Home</Link>
        </div>
    )
}
