import Image from "next/image";
import { ReactNode } from "react";

export default function ImageHeaderCard({ children, imageSrc, cardHeaderIcon, className }: { children?: ReactNode, imageSrc: string, cardHeaderIcon?: string, className?:string }) {

    return (
        <div className={className + " group flex flex-col basis-full lg:max-w-80 rounded-xl overflow-hidden shadow-default"}>
            <div className="relative text-pretty">
                <div id="image-header-container" className="relative h-28">
                    <Image alt="Project Headr Image" fill src={imageSrc} className={"w-full aspect-[6/2] object-cover object-center"} />
                </div>
                
                {cardHeaderIcon &&
                    <p className="absolute duration-200 text-center w-[64px] h-[64px] top-[calc(100%-32px)] left-[calc(50%-32px)] group-hover:top-[calc(90%-32px)] group-hover:shadow-default bg-white rounded-full p-3 text-3xl border-2">{cardHeaderIcon}</p>
                }
            </div>

            <div className={(cardHeaderIcon !== undefined ? "pt-8" : "pt-5") + " p-5 w-full h-full dark:bg-slate-700 dark:text-white"}>
                {children}
            </div>
        </div>
    )
}
