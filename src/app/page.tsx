import CardLinks from "@/components/CardLinks";
import Link from "next/link";

export default function index() {

    return (
        <div className="flex flex-col gap-6 w-full justify-center my-auto text-xl">

            <div className="flex flex-col gap-5">
                <h1>About Me 👋🏻</h1>

                <div className="flex gap-3 text-[14px]">
                    <div className="flex flex-col p-5 rounded-xl basis-0 grow bg-[url('/images/pcgcity.webp')] bg-cover bg-center bg-white/85 bg-blend-lighten shadow-[3px_3px_10px_0px_rgba(0,0,0,0.2)]">
                        <p className="text-center text-3xl">💻</p>
                        <p className="m-auto">
                            <a
                                className="font-bold duration-[200ms] underline underline-offset-4 decoration-wavy decoration-[#bc59fd] hover:text-[#bc59fd] hover:decoration-white"
                                href="https://github.com/Jack-Pettigrew"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Software Developer
                            </a>{" "}
                            and aspiring{" "}
                            <a
                                className="font-bold duration-[200ms] underline underline-offset-4 decoration-wavy decoration-[#bc59fd] hover:text-[#bc59fd] hover:decoration-white"
                                href="https://www.youtube.com/playlist?list=PLK-WtXTiwG01_W2roS1Y9Ysn4EmHJvLRt"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Game Developer
                            </a>{" "}
                            with a passion and desire to contribute to the fantastical world
                            of video games.
                        </p>
                    </div>

                    <div className="flex flex-col p-5 rounded-xl basis-0 grow bg-[url('/images/scifihallway.webp')] bg-cover bg-center bg-white/80 bg-blend-lighten shadow-[3px_3px_10px_0px_rgba(0,0,0,0.2)]">
                        <p className="text-center text-3xl">🕹️</p>
                        <p className="m-auto">
                            <a
                                className="font-bold duration-[200ms] underline underline-offset-4 decoration-wavy decoration-[#bc59fd] hover:text-[#bc59fd] hover:decoration-white"
                                href="https://www.youtube.com/@DarkDax"
                                target="_blank"
                                rel="noreferrer"
                            >
                                YouTube Content Creator
                            </a>{" "}
                            making content about all things video games and video game
                            development.
                        </p>
                    </div>

                    <div className="flex flex-col p-5 rounded-xl basis-0 grow bg-[url('/images/actionshot.jpg')] bg-cover bg-center bg-white/80 bg-blend-lighten shadow-[3px_3px_10px_0px_rgba(0,0,0,0.2)]">
                        <p className="text-center text-3xl">⌨️</p>
                        <p className="m-auto">
                            Developing various{" "}
                            <Link
                                href="/games"
                                className="font-bold duration-[200ms] underline underline-offset-4 decoration-wavy decoration-[#bc59fd] hover:text-[#bc59fd] hover:decoration-white"
                            >
                                games
                            </Link>{" "}
                            and other{" "}
                            <Link
                                href="/apps"
                                className="font-bold duration-[200ms] underline underline-offset-4 decoration-wavy decoration-[#bc59fd] hover:text-[#bc59fd] hover:decoration-white"
                            >
                                interesting projects
                            </Link>
                            .{" "}
                            <span className="text-[10px]">(...some even have a purpose)</span>
                        </p>
                    </div>
                </div>
            </div>


            <div className="flex gap-3 justify-around">
                <CardLinks title="Games" href="/games" />
                <CardLinks title="Projects" href="/projects" />
                <CardLinks title="Other" href="/other" />
            </div>
        </div >
    )
}
