'use client'

import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";

export default function TestContentModal() {    
    const test = () => {
        console.log('CLICKED')
    }
    
    return (
        <div className="absolute w-full h-full z-10 bg-violet-500 flex">
            {/* close panel */}
            <div className="flex items-center w-10 bg-violet-200 duration-200 hover:bg-violet-100 hover:w-12 hover:cursor-pointer p-2" onClick={test}>
                <ArrowLeft size={24} className="m-auto"/>
            </div>
        </div>
    )
}
