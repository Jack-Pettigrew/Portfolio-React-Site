// styles
import "./global.css"
import './App.css';

// components
import SiteTitle from './components/SiteTitle';
import Transition from './components/Transition';
import FeaturedProjectsViewer from './components/FeaturedProjectsViewer';
import WhatImWorkingOn from "./components/WhatImWorkingOn";

function App() {
  return (
    <div className="App">
      <SiteTitle />
      <Transition />
      <FeaturedProjectsViewer />
      <WhatImWorkingOn />
      {/* <Profile /> */}
      {/* Univeristy/Personal/Polygonal project selectors */}
    </div>
  );
}

export default App;
