// styles
import "./GameDev.css";

import React from "react";
import ProjectList from "../components/ProjectList";
import NavBarRounded from "../components/NavBarRounded";
import FooterRounded from "../components/FooterRounded";
import RoundedContainer from "../components/RoundedContainer";
import BackgroundImage from "../components/BackgroundImage";

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col min-h-screen justify-between items-center text-white">
      <BackgroundImage />      
      
      <NavBarRounded />
      
      <div className="flex flex-col grow items-center w-full">

        <RoundedContainer className="mb-4 text-center">
          <h1 className="text-[3rem]">Projects 💻</h1>
          <p className="text-[1.2rem]">Here are some notable projects I've worked on!</p>
        </RoundedContainer>
        
        {/* Projects List */}
        <ProjectList>

          <div className="flex flex-col w-[32%] h-[200px] rounded-xl drop-shadow-md overflow-hidden duration-100 hover:scale-[1.05] hover:z-[9999]">
            <div className="overflow-hidden basis-2/3 bg-center bg-cover" style={{backgroundImage: 'url(images/scifihallway.webp)'}}></div>
            <div className="basis-1/3 flex flex-col justify-center p-4 bg-[#3c3c3c]">
              <h1 className="text-xl">Project Title</h1>
              <p className="text-sm font-light">Short Tagline</p>
            </div>
          </div>

          <div className="flex flex-col w-[32%] h-[200px] rounded-xl drop-shadow-md overflow-hidden duration-100 hover:scale-[1.05] hover:z-[9999]">
            <div className="overflow-hidden basis-2/3 bg-center bg-cover" style={{backgroundImage: 'url(images/scifihallway.webp)'}}></div>
            <div className="basis-1/3 flex flex-col justify-center p-4 bg-[#3c3c3c]">
              <h1 className="text-xl">Project Title</h1>
              <p className="text-sm font-light">Short Tagline</p>
            </div>
          </div>

          <div className="flex flex-col w-[32%] h-[200px] rounded-xl drop-shadow-md overflow-hidden duration-100 hover:scale-[1.05] hover:z-[9999]">
            <div className="overflow-hidden basis-2/3 bg-center bg-cover" style={{backgroundImage: 'url(images/scifihallway.webp)'}}></div>
            <div className="basis-1/3 flex flex-col justify-center p-4 bg-[#3c3c3c]">
              <h1 className="text-xl">Project Title</h1>
              <p className="text-sm font-light">Short Tagline</p>
            </div>
          </div>
          
          <div className="flex flex-col w-[32%] h-[200px] rounded-xl drop-shadow-md overflow-hidden duration-100 hover:scale-[1.05] hover:z-[9999]">
            <div className="overflow-hidden basis-2/3 bg-center bg-cover" style={{backgroundImage: 'url(images/scifihallway.webp)'}}></div>
            <div className="basis-1/3 flex flex-col justify-center p-4 bg-[#3c3c3c]">
              <h1 className="text-xl">Project Title</h1>
              <p className="text-sm font-light">Short Tagline</p>
            </div>
          </div>

          <div className="flex flex-col w-[32%] h-[200px] rounded-xl drop-shadow-md overflow-hidden duration-100 hover:scale-[1.05] hover:z-[9999]">
            <div className="overflow-hidden basis-2/3 bg-center bg-cover" style={{backgroundImage: 'url(images/scifihallway.webp)'}}></div>
            <div className="basis-1/3 flex flex-col justify-center p-4 bg-[#3c3c3c]">
              <h1 className="text-xl">Project Title</h1>
              <p className="text-sm font-light">Short Tagline</p>
            </div>
          </div>

          <div className="flex flex-col w-[32%] h-[200px] rounded-xl drop-shadow-md overflow-hidden duration-100 hover:scale-[1.05] hover:z-[9999]">
            <div className="overflow-hidden basis-2/3 bg-center bg-cover" style={{backgroundImage: 'url(images/scifihallway.webp)'}}></div>
            <div className="basis-1/3 flex flex-col justify-center p-4 bg-[#3c3c3c]">
              <h1 className="text-xl">Project Title</h1>
              <p className="text-sm font-light">Short Tagline</p>
            </div>
          </div>

        </ProjectList>

      </div>

      <FooterRounded />
    </div>
  );
}
