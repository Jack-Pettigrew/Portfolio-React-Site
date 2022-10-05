import React from "react";

import SiteTitle from "../components/SiteTitle";
import Transition from "../components/Transition";
import FeaturedProjectsViewer from "../components/FeaturedProjectsViewer";
import WhatImWorkingOn from "../components/WhatImWorkingOn";
import Category from "../components/Category";
import CategoryList from "../components/CategoryList";
import GameCharacterIcon from "../components/GameCharacterIcon";
import NavMenu from "../components/NavMenu";

export default function Home() {
  return (
    <div className="App">
      <SiteTitle />
      <Transition />
      <NavMenu />
      <FeaturedProjectsViewer />
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
      />
    </div>
  );
}
