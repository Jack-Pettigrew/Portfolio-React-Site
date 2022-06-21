// styles
import "./global.css"
import './App.css';

// componentss
import SiteTitle from './components/SiteTitle';
import Transition from './components/Transition';
import FeaturedProjectViewer from './components/FeaturedProjectViewer';

function App() {
  return (
    <div className="App">
      <SiteTitle />
      <Transition />
      <FeaturedProjectViewer />
      {/* <Profile /> */}
      {/* Univeristy/Personal/Polygonal project selectors */}
    </div>
  );
}

export default App;
