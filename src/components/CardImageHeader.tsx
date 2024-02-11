import { ReactNode } from "react";

export default function CardImageHeader({ children, imageSrc, cardHeaderIcon }: { children?: ReactNode, imageSrc: string, cardHeaderIcon?: string }) {

    return (
        <div className="group flex flex-col basis-full rounded-xl overflow-hidden shadow-[3px_3px_10px_0px_rgba(0,0,0,0.2)]">
            <div className="relative text-pretty">
                <img src={imageSrc} className={"w-full aspect-[6/2] object-cover object-center"} />
                {cardHeaderIcon &&
                    <p className="absolute duration-200 text-center w-[64px] h-[64px] top-[calc(100%-32px)] left-[calc(50%-32px)] group-hover:top-[calc(90%-32px)] group-hover:shadow-[3px_3px_10px_0px_rgba(0,0,0,0.2)] bg-white rounded-full p-3 text-3xl border-2">{cardHeaderIcon}</p>
                }
            </div>

            <div className={(cardHeaderIcon !== undefined ? "pt-8" : "pt-5") + " p-5 w-full h-full"}>
                {children}
            </div>
        </div>
    )
}
