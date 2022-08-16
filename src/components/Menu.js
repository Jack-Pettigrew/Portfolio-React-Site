import React, { useRef, useState } from "react";
import "./Menu.css";

import { FiMenu } from "react-icons/fi";

export default function Menu() {
  const [hidden, setHidden] = useState(true);

  function handleMenu() {
    setHidden(!hidden);
  }

  return (
    <div className="menu">
      <div id="sidebar-menu" className={"sidebar-menu " + (hidden && "hidden")}>
        <h1 style={{textDecorationLine: "underline"}}>Menu</h1>
        <h1>Menusadfsadfasdfasfas</h1>
        <h1>Menusadfsadfasdfasfas</h1>
        <h1>Menusadfsadfasdfasfas</h1>
      </div>
      <div className="menu-button">
        <a onClick={() => handleMenu()}>
          <FiMenu />
        </a>
      </div>
    </div>
  );
}
