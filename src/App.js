import './App.css';
import Profile from './components/Profile';
import FeaturedProjectViewer from './components/FeaturedProjectViewer';
import Links from './components/Links';

// styles
import "./global.css"
import SiteTitle from './components/SiteTitle';
import Transition from './components/Transition';

function App() {
  return (
    <div className="App">
      <SiteTitle />
      <Transition />
      <p>Hello</p>
    </div>
  );
}

export default App;
