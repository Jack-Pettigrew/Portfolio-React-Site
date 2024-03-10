import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import ImageHeaderCard from "./ImageHeaderCard";
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";

export default function WhatImWorkingOn({ children, projectImageRoute, projectLink }: { children: ReactNode, projectImageRoute: string, projectLink: string }) {
    return (
        <div className="flex flex-col gap-2 w-full items-center dark:text-white">
            <h1>Recent Work 💾</h1>

            <Link href={projectLink} className="lg:hidden">
                <ImageHeaderCard imageSrc={projectImageRoute} className="mx-5">
                    {children}
                </ImageHeaderCard>
            </Link>

            <div className="flex flex-col lg:flex-row gap-5">
                <Link href={projectLink} className="hidden lg:block duration-200 hover:scale-[1.025]">
                    <div className="flex h-full rounded-xl overflow-hidden shadow-default">
                        <div className="bg-slate-100 dark:bg-slate-700 p-5 min-w-80 max-w-96 min-h-48 overflow-hidden">
                            {children}
                        </div>

                        <div className="relative flex bg-black w-80 h-full overflow-hidden">
                            <Image src={projectImageRoute} fill={true} alt="Most recent work image" className="object-cover object-top" />
                        </div>
                    </div>
                </Link>

                {/* TODO
                    - Make into component
                 */}
                <Link href="/projects" className="lg:self-center flex justify-center items-center duration-200 rounded-full min-w-12 h-12 bg-purple-500 p-3 hover:bg-purple-600 group">
                    <p className="duration-300 lg:w-0 lg:group-hover:w-20 text-nowrap overflow-hidden text-white">See more</p>
                    <CaretRight className="hidden lg:block z-10" size={24} weight="bold" color="white" />
                </Link>
            </div>

        </div>
    )
}
