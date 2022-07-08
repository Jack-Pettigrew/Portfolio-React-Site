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

function App() {
  return (
    <div className="App">
      <SiteTitle />
      <Transition />
      <FeaturedProjectsViewer />
      <WhatImWorkingOn />
      <CategoryList>
        <Category catgoryName={"Studied"} />
        <Category catgoryName={"Explored"} />
        <Category catgoryName={"Polygonal"} />
      </CategoryList>
    </div>
  );
}

export default App;
