import Card from "@/components/Card";
import Image from "next/image";
import projectsFile from "public/projects.json";

export default function index() {
    const project = projectsFile.projects[0];

    return (
        <div className="flex w-full h-full justify-center">
            <div className="flex flex-col gap-3 p-5 w-full max-w-[1200px]">
                <div id="project-header" className={project.headerImage ? "relative flex h-[30%]" : ""}>
                    {project.headerImage && <Image src={project.headerImage} fill={true} alt="Project header image" className="z-[-10] object-cover object-center rounded-xl" />}

                    <div className={project.headerImage ? "m-2 px-3 py-2 self-end text-bottom text-white bg-black/20 rounded-xl backdrop-blur-lg" : ""}>
                        <h1>{project.title}</h1>
                        <p>{project.tagline}</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    {/*  Sidebar */}
                    <Card id="tools" className="h-fit w-48 shrink-0">
                        <h2>Tools</h2>
                        <ul className="list-disc list-inside">
                            {project.tools.map(function (element, index) {
                                return (
                                    <li key={index}>
                                        {element}
                                    </li>
                                )
                            })}
                        </ul>
                    </Card>

                    {/* Main Content */}
                    <div className="flex flex-col gap-3">
                        <Card className="h-fit">
                            <p className="whitespace-pre-line">{project.description}</p>
                        </Card>

                        {/* Images Carousel */}
                        <div id="gallery" className="flex w-full gap-1 overflow-auto">
                            {
                                project.images.map(function (element, index) {
                                    return (
                                        <img key="index" src={element} width={200} className="aspect-video object-cover object-center rounded-xl" />
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}