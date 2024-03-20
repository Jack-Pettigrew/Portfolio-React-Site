import ImageHeaderCard from "@/components/ImageHeaderCard";
import WhatImWorkingOn from "@/components/WhatImWorkingOn";
import Link from "next/link";

export default function index() {

    return (
        <div className="relative flex flex-col gap-10 w-full h-full justify-center pt-5 lg:pt-0">

            <WhatImWorkingOn projectImageRoute="/projects/1/RE2_AI_BT_Office_Aiming.webp" projectLink={"/projects/1"}>
                <h1 className="text-xl mb-2">Mr X AI - Behaviour Tree Study</h1>
                <p>A video game AI study developing a Behaviour Tree from scratch to recreate the Mr X stalker system from Resident Evil 2 Remake (2019) within Unity.</p>
            </WhatImWorkingOn>

            <div className="flex flex-col px-5 gap-2">
                <h1 className="text-center cursor-default dark:text-white">About Me 👋🏻</h1>

                <div className="flex flex-col lg:flex-row lg:justify-center w-full gap-3">
                    <ImageHeaderCard imageSrc="/images/pcgcity.webp" cardHeaderIcon="💻">
                        <p className="m-auto">
                            <a
                                className="font-bold duration-[200ms] underline underline-offset-4 decoration-wavy decoration-[#bc59fd] hover:text-[#bc59fd] hover:decoration-[#b75efe]"
                                href="https://github.com/Jack-Pettigrew"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Software Developer
                            </a>{" "}
                            and aspiring {" "}
                            <a
                                className="font-bold duration-[200ms] underline underline-offset-4 decoration-wavy decoration-[#bc59fd] hover:text-[#bc59fd] hover:decoration-[#dcb9fa]"
                                href="https://www.youtube.com/playlist?list=PLK-WtXTiwG01_W2roS1Y9Ysn4EmHJvLRt"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Game Developer
                            </a>{" "}
                            with a passion and desire to contribute to the fantastical world
                            of video games.
                        </p>
                    </ImageHeaderCard>

                    <ImageHeaderCard imageSrc="/images/scifihallway.webp" cardHeaderIcon="🕹️">
                        <p className="m-auto">
                            <a
                                className="font-bold duration-[200ms] underline underline-offset-4 decoration-wavy decoration-[#bc59fd] hover:text-[#bc59fd] hover:decoration-[#dcb9fa]"
                                href="https://www.youtube.com/@DarkDax"
                                target="_blank"
                                rel="noreferrer"
                            >
                                YouTube Content Creator
                            </a>{" "}
                            making content about all things video games and video game
                            development.
                        </p>
                    </ImageHeaderCard>

                    <ImageHeaderCard imageSrc="/images/actionshot.jpg" cardHeaderIcon="⌨️">
                        <p>
                            Developing various{" "}
                            <Link
                                href="/games"
                                className="font-bold duration-[200ms] underline underline-offset-4 decoration-wavy decoration-[#bc59fd] hover:text-[#bc59fd] hover:decoration-[#dcb9fa]"
                            >
                                games
                            </Link>{" "}
                            and other{" "}
                            <Link
                                href="/apps"
                                className="font-bold duration-[200ms] underline underline-offset-4 decoration-wavy decoration-[#bc59fd] hover:text-[#bc59fd] hover:decoration-[#dcb9fa]"
                            >
                                interesting projects
                            </Link>.
                        </p>
                        <p className="mt-3 text-[0.5em]">(...some even have a purpose)</p>
                    </ImageHeaderCard>
                </div>
            </div>
        </div >
    )
}
