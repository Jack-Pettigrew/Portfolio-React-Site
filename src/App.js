// styles
import "./global.css"
import './App.css';

// componentss
import SiteTitle from './components/SiteTitle';
import Transition from './components/Transition';
import FeaturedProjectViewer from './components/FeaturedProjectViewer';
import Links from "./components/Links";

function App() {
  return (
    <div className="App">
      <SiteTitle />
      <Transition />
      <p>Hello</p>
      {/* <FeaturedProjectViewer /> */}
      {/* <Profile /> */}
      {/* Univeristy/Personal/Polygonal project selectors */}
    </div>
  );
}

export default App;
