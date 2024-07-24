import Breadcrumb from "@/components/Breadcrumb";
import ImageHeaderCard from "@/components/ImageHeaderCard";
import Link from "next/link";
import projectsFile from "public/projects.json";
import { parseCategoryIcon } from "@/utilities/project-utils";
import { Signpost } from "@phosphor-icons/react/dist/ssr/Signpost";

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
            <div className="flex flex-col gap-1 pb-10 px-5">
                <div className="lg:sticky lg:top-2 lg:z-10 bg-white/50 dark:bg-slate-500/25 rounded-lg backdrop-blur-md mt-3 mb-1 lg:mt-0 lg:mb-1 px-3 py-2 w-fit">
                    <Breadcrumb />
                </div>

                <div className="flex flex-col gap-5 dark:text-white">
                    <div className="flex items-center gap-5">
                        <div className="p-3 bg-slate-100 rounded-full">
                            <Signpost size={22} weight="bold" />
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-700 dark:text-white p-3 rounded-xl flex justify-around md:justify-start gap-3 w-full ">
                            {Object.keys(projectsCategorised).map(function (category, categoryIndex) {
                                return (
                                    <a href={"#" + category + "s"} className="hover:text-purple-400">
                                        {"#" + category + "s"}
                                    </a>
                                );
                            })}
                        </div>
                    </div>


                    {Object.values(projectsCategorised).map(function (category, categoryIndex) {
                        const projectCategory = Object.keys(projectsCategorised)[categoryIndex] + "s";

                        return (
                            <div id={projectCategory} key={categoryIndex} className="scroll-m-[6rem] md:scroll-m-[4rem]">
                                <h2 className="text-white mb-3 bg-color-primary p-3 rounded-xl shadow-default">// {projectCategory}</h2>

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
        </div>
    )
}
