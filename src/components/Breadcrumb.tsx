"use client"

import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { House } from "@phosphor-icons/react/dist/ssr/House";
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Breadcrumb({ customPageName, customPageNameMaxWords = 6 }: { customPageName?: string, customPageNameMaxWords?: number}) {
    const breadcrumb = usePathname().split('/').filter(path => path);

    if (customPageName) {
        const numberOfWords = customPageName.split(" ").filter(word => word).length;
        
        if (numberOfWords > customPageNameMaxWords) {
            customPageName = customPageName.split(" ").filter(word => word).slice(0, customPageNameMaxWords).join(" ") + "...";
        }
    }
    
    return (
        <>
            <div className="flex gap-1 items-center">
                <Link href="/"><House size={16} weight="fill" className="duration-200 text-purple-400 hover:text-purple-700" /></Link>
                {breadcrumb.length > 0 && breadcrumb.map((path, index) => {
                    return (<p key={index} className="flex gap-1 items-center">
                        <CaretRight size={16} weight="bold" />
                        {breadcrumb.length - 1 == index ?
                            (<span className="font-bold text-purple-700">{customPageName ?? path.charAt(0).toUpperCase() + path.slice(1)}</span>)
                            :
                            (<Link href={"/" + path} className="duration-200 text-purple-400 hover:text-purple-700"><span className="font-bold">{path.charAt(0).toUpperCase() + path.slice(1)}</span></Link>)
                        }
                    </p>);
                })}
            </div>
        </>
    )
}
