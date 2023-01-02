// styles
import "./global.css";
import "./App.css";

// components
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import GameDev from "./pages/GameDev";
import FourOhFour from "./pages/FourOhFour";
import HomeTest from "./pages/HomeTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTest />} />
        <Route path="/old-home" element={<Home />} />
        <Route path="/projects/game-dev" element={<GameDev />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
