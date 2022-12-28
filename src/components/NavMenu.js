import React, { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function NavMenu() {
  const [hidden, setHidden] = useState(true);

  function handleMenu() {
    setHidden(!hidden);
  }

  return (
    <>
      <div className="fixed top-2 right-2 text-4xl z-9999 duration-200 hover:scale-125 z-50">
        <a onClick={() => handleMenu()}>
          <FiMenu />
        </a>
      </div>
      <div className={"[&>*]:text-white [&>*]:mb-5 fixed w-screen h-screen top-0 right-0 flex flex-col justify-center items-center z-40 bg-[#000000cc] " + (hidden && "hidden") }>
        <Link className="text-3xl duration-200 hover:text-[#a23fff] hover:-translate-y-1 hover:text font-bold" to="/"><h1>Portfolio</h1></Link>
        <Link className="text-3xl duration-200 hover:text-[#a23fff] hover:-translate-y-1 hover:text font-bold" to="/about-me"><h1>About Me</h1></Link>
        <Link className="text-3xl duration-200 hover:text-[#a23fff] hover:-translate-y-1 hover:text font-bold" to="/projects/game-dev"><h1>Game Dev</h1></Link>
      </div>
    </>
  );
}
