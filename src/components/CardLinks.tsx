import Image from "next/image"
import Link from "next/link"

export default function CardLinks({ title, href }: { title: string, href: string }) {

    return (
        <Link href={href}>
            <div className="relative text-xs rounded-xl p-2 text-white bg-purple-500 hover:bg-purple-700 duration-200 shadow-[3px_3px_10px_0px_rgba(0,0,0,0.4)]">
                <p className="text-center"><small>{title}</small></p>
            </div>
        </Link>
    )
}
