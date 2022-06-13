import './App.css';
import Profile from './components/Profile';
import FeaturedProjectViewer from './components/FeaturedProjectViewer';
import Links from './components/Links';

// styles
import "./global.css"

function App() {
  return (
    <div className="App">
      <Profile />
      <Links />
      <FeaturedProjectViewer />
      Univeristy/Personal/Polygonal project selectors
    </div>
  );
}

export default App;
