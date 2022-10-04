// styles
import "./global.css";
import "./App.css";

// components
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects/game-dev" element={<Projects />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
