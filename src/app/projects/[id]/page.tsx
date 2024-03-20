import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/Card";
import ImageGallery from "@/components/ImageGallery";
import Image from "next/image";
import { notFound } from "next/navigation";
import projectsFile from "public/projects.json";

// Tell cloudflare not to SSR and Streaming mode for this page
export const dynamic = "force-static";

// https://github.com/cloudflare/next-on-pages/blob/main/packages/next-on-pages/docs/gotchas.md
// https://logsnag.com/blog/deploying-nextjs-13-app-dir-to-cloudflare-pages
export const dynamicParams = false;

// Gerenate static project pages at build time
export async function generateStaticParams() {
    return projectsFile.projects.map((ticket) => ({
        id: ticket.id.toString()
    }))
}

export default function index({ params }: { params: { id: number } }) {
    const id = params.id;
    const project = projectsFile.projects[id - 1];

    if (project == undefined) {
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
                                {/* Project Content */}
                            </div>
                        </Card>

                        <ImageGallery images={project.images} videos={project.videos} youtubeVideoIds={project.youtubeVideoIds} />
                    </div>
                </div>
            </div>
        </div>
    )
}