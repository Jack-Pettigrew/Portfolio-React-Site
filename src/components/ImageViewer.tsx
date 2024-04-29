import { CaretLeft } from "@phosphor-icons/react/dist/ssr/CaretLeft";
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import Image from "next/image";

export default function ImageViewer({ className, imagePath = '', onNextButton, onPrevButton, onOutsideClick }: {
    className?: string,
    imagePath: string,
    onNextButton: CallableFunction,
    onPrevButton: CallableFunction,
    onOutsideClick: CallableFunction
}) {
    return (
        <div id="image-viewer" className={"fixed flex justify-center items-center top-0 left-0 w-screen h-screen z-20 p-5 md:p-10 lg:p-20 backdrop-blur-xl select-none " + className}>
            <div onClick={() => onOutsideClick()} className="absolute top-0 left-0 w-full h-full"></div>
            
            <div className="relative flex justify-center">
                <div
                    className="absolute left-[2%] top-[calc(50%-16px)] cursor-pointer duration-200 bg-white/30 hover:bg-white/100 shadow-default rounded-full p-2 z-10"
                    onClick={() => onPrevButton()}
                >
                    <CaretLeft size={16} color="black" />
                </div>

                {imagePath && <img id="image-viewer-image" className="rounded-xl" src={imagePath} alt="" />}

                <div
                    className="absolute right-[2%] top-[calc(50%-16px)] cursor-pointer duration-200 bg-white/30 hover:bg-white/100 shadow-default rounded-full p-2 z-10"
                    onClick={() => onNextButton()}
                >
                    <CaretRight size={16} color="black" />
                </div>
            </div>
        </div>
    )
}
