import './App.css';
import Profile from './components/Profile';
import FeaturedProjectViewer from './components/FeaturedProjectViewer';

// styles
import "./global.css"
import Links from './components/Links';

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
