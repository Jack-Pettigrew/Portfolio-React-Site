// styles
import "./global.css";
import "./App.css";

// components
import SiteTitle from "./components/SiteTitle";
import Transition from "./components/Transition";
import FeaturedProjectsViewer from "./components/FeaturedProjectsViewer";
import WhatImWorkingOn from "./components/WhatImWorkingOn";
import Category from "./components/Category";
import CategoryList from "./components/CategoryList";
import GameCharacterIcon from "./components/GameCharacterIcon";
import NavMenu from "./components/NavMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = function () {
  return (
    <div className="App">
      <SiteTitle />
      <Transition />
      <NavMenu />
      <FeaturedProjectsViewer />
      <WhatImWorkingOn />
      <CategoryList>
        <Category catgoryName={"Studied"} />
        <Category catgoryName={"Explored"} />
        <Category catgoryName={"Polygonal"} />
      </CategoryList>
      <GameCharacterIcon
        characterSrc="/images/characters/lilal.png"
        width="75px"
        height="75px"
      />
    </div>
  );
};

// Move pages into their own files

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home()}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
