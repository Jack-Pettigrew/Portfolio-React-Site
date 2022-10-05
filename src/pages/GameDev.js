// styles
import "./GameDev.css";

import React from "react";
import ProjectList from "../components/ProjectList";
import ProjectLink from "../components/ProjectLink";

export default function GameDev() {
  return (
    <div className="gamedev">
      <h1 className="pagetitle">Game Dev Projects</h1>
      <p style={{ fontSize: "25px" }}>
        These are all the notable game dev related projects I've worked on!
      </p>
      <ProjectList>
        <ProjectLink />
        <ProjectLink />
        <ProjectLink />
      </ProjectList>
    </div>
  );
}
