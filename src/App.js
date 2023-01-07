// styles
import "./global.css";
import "./App.css";

// components
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import OldHome from "./pages/OldHome";
import GameDev from "./pages/GameDev";
import FourOhFour from "./pages/FourOhFour";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/old-home" element={<OldHome />} />
        <Route path="/projects/game-dev" element={<GameDev />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
