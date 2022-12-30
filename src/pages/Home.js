import React from "react";

import SiteTitle from "../components/SiteTitle";
import FeaturedProjectsViewer from "../components/FeaturedProjectsViewer";
import ImageCard from "../components/ImageCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="App">
      <SiteTitle />
      <FeaturedProjectsViewer />

      

      {/* What I'm working on */}
      <div className="flex flex-row w-full my-8 items-center justify-center">
        <ImageCard innerTitle="Test" backgroundImagePath={`url(${"/actionshot.jpg"})`} />
        <div className="h-full m-20 font-bold">
          <h1 className="text-3xl mb-5">What I'm Working On</h1>
          <h1 className="text-2xl mb-5">Project Title</h1>
          <p>Project Short Description</p>
        </div>
      </div>

      <Footer />

      {/* <FeaturedProjectsViewer />
      <WhatImWorkingOn />
      <CategoryList>
        <Category catgoryName={"Studied"} />
        <Category catgoryName={"Explored"} categoryUrl="/projects/game-dev" />
        <Category catgoryName={"Polygonal"} />
      </CategoryList>
      <GameCharacterIcon
        characterSrc="/images/characters/lilal.png"
        width="75px"
        height="75px"
      /> */}
    </div>
  );
}
