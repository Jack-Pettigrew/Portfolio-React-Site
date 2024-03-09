"use client"

import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { House } from "@phosphor-icons/react/dist/ssr/House";
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Breadcrumb() {
    const breadcrumb = usePathname().split('/').filter(path => path);

    return (
        <>
            <div className="flex p-2 gap-1 items-center">
                <Link href="/"><House size={16} weight="fill" className="duration-100 text-purple-400 hover:text-purple-700" /></Link>
                {breadcrumb.length > 0 && breadcrumb.map((path, index) => {
                    return (<p className="flex gap-1 items-center">
                        <CaretRight size={16} weight="bold" />
                        <span className={"duration-100 " + (breadcrumb.length - 1 == index ? "font-bold text-purple-700" : "font-normal text-purple-400")}>{path.charAt(0).toUpperCase() + path.slice(1)}</span>
                    </p>);
                })}
            </div>
        </>
    )
}
