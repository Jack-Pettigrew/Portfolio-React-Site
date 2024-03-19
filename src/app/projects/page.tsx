import Breadcrumb from "@/components/Breadcrumb";
import ImageHeaderCard from "@/components/ImageHeaderCard";
import Link from "next/link";
import projectsFile from "public/projects.json";

export default function projects() {
    const projects = projectsFile.projects;

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col gap-1 py-2 px-5">
                <div className="lg:sticky lg:top-2 lg:z-10 bg-white/50 dark:bg-slate-500/25 rounded-lg backdrop-blur-md mt-3 mb-1 lg:mt-0 lg:mb-3 px-3 py-2 w-fit">
                    <Breadcrumb />
                </div>

                <div className="grid gap-5 grid-cols-1 md:grid-cols-3 xl:gap-6 xl:grid-cols-4">
                    {projects.map(function (project, index) {
                        return (
                            <Link key={index} href={"/projects/" + project.id}>
                                <ImageHeaderCard imageSrc={project.headerImage ?? "/images/characters/lilal.webp"}>
                                    <h1>{project.title}</h1>
                                    <p>{project.tagline}</p>
                                </ImageHeaderCard>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}
