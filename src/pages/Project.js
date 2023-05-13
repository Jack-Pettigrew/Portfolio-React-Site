import React from "react";
import { useParams } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import NavBarRounded from "../components/NavBarRounded";
import FooterRounded from "../components/FooterRounded";
import RoundedContainer from "../components/RoundedContainer";
import projects from "../data/projects.json";
import * as DOMPurify from "dompurify";

export default function Project() {
  let params = useParams();
    const project = projects["projects"][params.projectID - 1];

  return (
    <div className="flex flex-col min-h-screen justify-between items-center text-white">
      <BackgroundImage />

      <NavBarRounded />

      <div className="flex justify-around px-[5px] gap-4 w-full max-w-[1200px]">
        {/* Left Panel */}
        <div className="relative flex flex-col gap-2 basis-1/3">
          <img
            className="rounded-lg"
            src={project.projectImage}
            width="500px"
            alt={project.title + " thumbnail"}
          ></img>

          {/* other images */}
          {project.images && (
            <div className="w-full h-[11%] flex gap-2 overflow-x-scroll">
              {project.images.map((imageSrc, index) => (
                <img
                  key={index}
                  className="w-[25%] h-full rounded-lg"
                  src={imageSrc}
                  alt="Project"
                />
              ))}
            </div>
          )}

          {project.tools && (
            <RoundedContainer>
              <p className="w-full border-b-[1px] mb-2">Project Tools:</p>
              <ul className="list-disc">
                {project.tools.map((toolName, index) => (
                  <li key={index}>{toolName}</li>
                ))}
              </ul>
            </RoundedContainer>
          )}
        </div>

        {/* Right Panel */}
        <div className="basis-2/3 flex flex-col gap-2">
          <RoundedContainer>
            <h1>{DOMPurify.sanitize(project.title)}</h1>
          </RoundedContainer>

          <RoundedContainer className="h-full">
            <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(project.subtitle)}}></div>
          </RoundedContainer>
        </div>
      </div>

      <FooterRounded />
    </div>
  );
}
