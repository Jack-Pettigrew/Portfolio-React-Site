// styles
import "./global.css"
import './App.css';

// components
import SiteTitle from './components/SiteTitle';
import Transition from './components/Transition';
import FeaturedProjectsViewer from './components/FeaturedProjectsViewer';
import WhatImWorkingOn from "./components/WhatImWorkingOn";
import Category from "./components/Category";
import CategoryList from "./components/CategoryList";
import GameCharacterIcon from "./components/GameCharacterIcon";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <SiteTitle />
      <Transition />
      <Menu />
      <FeaturedProjectsViewer />
      <WhatImWorkingOn />
      <CategoryList>
        <Category catgoryName={"Studied"} />
        <Category catgoryName={"Explored"} />
        <Category catgoryName={"Polygonal"} />
      </CategoryList>
      <GameCharacterIcon characterSrc="/images/characters/lilal.png" width="75px" height="75px" />
    </div>
  );
}

export default App;
