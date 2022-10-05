import React, { useState } from "react";
import "./NavMenu.css";

import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function NavMenu() {
  const [hidden, setHidden] = useState(true);

  function handleMenu() {
    setHidden(!hidden);
  }

  return (
    <>
      <div className="navbar-burger">
        <a onClick={() => handleMenu()}>
          <FiMenu />
        </a>
      </div>
      <div id="navbar-menu" className={"navbar-menu " + (hidden && "hidden")}>
        <h1 style={{ textDecorationLine: "underline" }}>Menu</h1>
        <Link to="/"><h1>Portfolio</h1></Link>
        <Link to="/about-me"><h1>About Me</h1></Link>
        <Link to="/projects/game-dev"><h1>Game Dev</h1></Link>
      </div>
    </>
  );
}
