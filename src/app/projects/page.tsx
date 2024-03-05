import ImageHeaderCard from "@/components/ImageHeaderCard";
import Link from "next/link";
import projectsFile from "public/projects.json";

export default function projects() {
    const projects = projectsFile.projects;

    return (
        <div className="p-5 grid gap-5 grid-cols-1 lg:grid-cols-3">
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
    )
}
