// styles
import "./global.css";
import "./App.css";

// components
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import FourOhFour from "./pages/FourOhFour";
import Home from "./pages/Home";
import OldHome from "./pages/OldHome";
import AboutMe from "./pages/AboutMe";
import ProjectsPage from "./pages/ProjectsPage";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/old-home" element={<OldHome />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectID" element={<Project />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
