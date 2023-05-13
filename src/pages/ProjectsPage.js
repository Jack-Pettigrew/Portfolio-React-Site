// styles
import "./GameDev.css";

import React from "react";
import ProjectList from "../components/ProjectList";
import NavBarRounded from "../components/NavBarRounded";
import FooterRounded from "../components/FooterRounded";
import RoundedContainer from "../components/RoundedContainer";
import BackgroundImage from "../components/BackgroundImage";
import projects from "../data/projects.json";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  
  return (
    <div
      id="projects"
      className="flex flex-col min-h-screen justify-between items-center text-white"
    >
      <BackgroundImage />

      <NavBarRounded />

      <div className="flex flex-col grow items-center w-full">
        <RoundedContainer className="mb-4 text-center">
          <h1 className="text-[3rem]">Projects 💻</h1>
          <p className="text-[1.2rem]">
            Here are some notable projects I've worked on!
          </p>
        </RoundedContainer>

        {/* Projects List */}
        <ProjectList>
          {projects.projects.map((project) => (
            <Link key={project.id} className="w-[64%] md:w-[32%]" to={"/projects/" + project.id}>
              <div
                className="flex flex-col h-[200px] rounded-xl drop-shadow-md overflow-hidden duration-100 hover:scale-[1.03] hover:z-[9999]"
              >
                <div
                  className="overflow-hidden basis-2/3 bg-center bg-cover"
                  style={{ backgroundImage: "url(" + project.projectImage + ")" }}
                ></div>
                <div className="basis-1/3 flex flex-col justify-center p-4 bg-[#3c3c3c]">
                  <h1 className="text-xl">{project.title}</h1>
                  {project.subtitle && (
                    <p className="text-sm font-light">{project.subtitle}</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </ProjectList>
      </div>

      <FooterRounded />
    </div>
  );
}
