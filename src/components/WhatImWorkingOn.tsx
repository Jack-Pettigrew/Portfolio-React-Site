import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import ImageHeaderCard from "./ImageHeaderCard";

export default function WhatImWorkingOn({ children, projectImageRoute, projectLink }: { children: ReactNode, projectImageRoute: string, projectLink: string }) {
    return (
        <div className="flex flex-col gap-2 w-full items-center">
            <h1>Recent Work 💾</h1>

            <Link href={projectLink} className="lg:hidden">
                <ImageHeaderCard imageSrc={projectImageRoute} className="mx-5">
                    {children}
                </ImageHeaderCard>
            </Link>


            <Link href={projectLink} className="hidden lg:block">
                <div className="flex h-full rounded-xl overflow-hidden shadow-default">
                    <div className="bg-slate-100 p-5 min-w-80 max-w-96 min-h-48 overflow-hidden">
                        {children}
                    </div>

                    <div className="relative flex bg-black text-white w-80 h-full overflow-hidden">
                        <Image src={projectImageRoute} fill={true} alt="Most recent work image" className="object-cover object-top" />
                    </div>
                </div>
            </Link>

        </div>
    )
}
