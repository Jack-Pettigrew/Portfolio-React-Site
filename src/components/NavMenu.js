import React, { useState } from "react";
import "./NavMenu.css";

import { FiMenu } from "react-icons/fi";

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
        <a href="/"><h1>Portfolio</h1></a>
        <a href="/about-me"><h1>About Me</h1></a>
        <a href=""><h1>Categories</h1></a>
      </div>
    </>
  );
}
