// styles
import "./global.css"
import './App.css';

// componentss
import SiteTitle from './components/SiteTitle';
import Transition from './components/Transition';
import FeaturedProjectsViewer from './components/FeaturedProjectsViewer';

function App() {
  return (
    <div className="App">
      <SiteTitle />
      <Transition />

      <FeaturedProjectsViewer />
      {/* <Profile /> */}
      {/* Univeristy/Personal/Polygonal project selectors */}
    </div>
  );
}

export default App;
