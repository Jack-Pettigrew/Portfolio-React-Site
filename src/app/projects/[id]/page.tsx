import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/Card";
import Image from "next/image";
import { notFound } from "next/navigation";
import projectsFile from "public/projects.json";

// Gerenate static project pages at build time
export async function generateStaticParams() {
    return projectsFile.projects.map((ticket) => ({
        id: ticket.id.toString()
    }))
}

export default function index({ params }: { params: { id : number } }) {
    const id = params.id;
    const project = projectsFile.projects[id - 1];

    if (project == undefined)
    {
        notFound();
    }

    return (
        <div className="flex w-full h-full justify-center">
            <div className="flex flex-col gap-3 p-5 w-full max-w-[1200px]">
                <Breadcrumb customPageName={project.title} />
                {/* Header */}
                <div id="project-header" className={project.headerImage ? "relative flex h-[300px] lg:h-[250px]" : ""}>
                    {project.headerImage && <Image src={project.headerImage} fill={true} alt="Project header image" className=" object-cover object-center rounded-xl" priority />}

                    <div className={project.headerImage ? " m-2 px-3 py-2 self-end text-bottom text-white bg-black/20 rounded-xl backdrop-blur-lg" : ""}>
                        <h1>{project.title}</h1>
                        <p>{project.tagline}</p>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-2">
                    {/*  Sidebar */}
                    <div className="flex flex-col gap-2">
                        <Card id="links" className="h-fit lg:w-48 shrink-0">
                            <h2>Links</h2>
                            {project.links.map(function (element, index) {
                                return (
                                    <p key={index} className="text-sm font-normal"><a href={element.href} className="text-purple-500 hover:text-purple-700" target="_blank">
                                        {element.name}
                                    </a></p>
                                )
                            })}
                        </Card>

                        <Card id="tools" className="h-fit lg:w-48 shrink-0">
                            <h2>Tools</h2>
                            <ul className="list-disc list-inside">
                                {project.tools.map(function (element, index) {
                                    return (
                                        <li key={index} className="text-sm">
                                            {element}
                                        </li>
                                    )
                                })}
                            </ul>
                        </Card>
                    </div>


                    {/* Main Content */}
                    <div className="flex flex-col gap-3">
                        <Card className="h-fit">
                            <div dangerouslySetInnerHTML={{ __html: project.description }}>
                                {/* <p className="whitespace-pre-line">{project.description}</p> */}
                            </div>
                        </Card>

                        {/* Images Carousel */}
                        <div id="gallery" className="flex w-full gap-1 overflow-auto">
                            {
                                project.images.map(function (element, index) {
                                    return (
                                        <img key={index} src={element} width={200} className="aspect-video object-cover object-center rounded-xl" />
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