import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import Link from "next/link";

export default function SeeMoreButton({ href }: { href?: string }) {
    return (
        <div className="flex lg:items-center">
            <Link href={href ?? ''} className="flex justify-center items-center duration-200 rounded-full min-w-12 h-12 bg-purple-500 p-3 hover:bg-purple-600 group">
                <p className="duration-300 lg:w-0 lg:group-hover:w-20 text-nowrap overflow-hidden text-white">See more</p>
                <CaretRight className="hidden lg:block z-10" size={24} weight="bold" color="white" />
            </Link>
        </div>
    )
}
