import Breadcrumb from "@/components/Breadcrumb";
import ImageHeaderCard from "@/components/ImageHeaderCard";
import Link from "next/link";
import projectsFile from "public/projects.json";
import { parseCategoryIcon } from "@/utilities/project-utils";

export default function projects() {
    const projects = projectsFile.projects;
    const projectsCategorised: { [key: string]: { [key: string]: any } } = {};

    for (const key in projects) {
        if (projects.hasOwnProperty(key)) {
            const category = projects[key].category;
            if (!projectsCategorised[category]) {
                projectsCategorised[category] = {};
            }
            projectsCategorised[category][key] = projects[key];
        }
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col gap-1 py-2 px-5">
                <div className="lg:sticky lg:top-2 lg:z-10 bg-white/50 dark:bg-slate-500/25 rounded-lg backdrop-blur-md mt-3 mb-1 lg:mt-0 lg:mb-1 px-3 py-2 w-fit">
                    <Breadcrumb />
                </div>

                <div className="flex flex-col gap-10">
                    {Object.values(projectsCategorised).map(function (category, categoryIndex) {
                        const projectCategpry = Object.keys(projectsCategorised)[categoryIndex] + "s";

                        return (
                            <div id={projectCategpry}>
                                <h1 className="mb-3">{projectCategpry}</h1>

                                <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                                    {Object.values(category).map(function (project, index) {
                                        return (
                                            <Link key={index} href={"/projects/" + project.id}>
                                                <ImageHeaderCard imageSrc={project.headerImage ?? "/images/characters/lilal.webp"} cardHeaderIcon={parseCategoryIcon(project.category)}>
                                                    <h2>{project.title}</h2>
                                                    <p>{project.tagline}</p>
                                                </ImageHeaderCard>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}
