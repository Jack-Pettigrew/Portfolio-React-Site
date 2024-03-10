import Breadcrumb from "@/components/Breadcrumb";
import ImageHeaderCard from "@/components/ImageHeaderCard";
import Link from "next/link";
import projectsFile from "public/projects.json";

export default function projects() {
    const projects = projectsFile.projects;

    return (
        <div className="flex flex-col">
            <div className="lg:sticky lg:top-2 lg:z-10 bg-white/50 w-fit rounded-lg backdrop-blur-md mt-3 mx-5 p-1">
                <Breadcrumb />
            </div>

            <div className="py-2 px-5 grid gap-5 grid-cols-1 lg:grid-cols-3">
                {projects.map(function (project, index) {
                    return (
                        <Link key={index} href={"/projects/" + project.id}>
                            <ImageHeaderCard imageSrc={project.headerImage}>
                                <h1>{project.title}</h1>
                                <p>{project.tagline}</p>
                            </ImageHeaderCard>
                        </Link>
                    )
                })}
            </div>
        </div>

    )
}
