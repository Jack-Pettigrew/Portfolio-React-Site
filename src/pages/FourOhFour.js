// styles
import "./FourOhFour.css";

import React from "react";
import GameCharacterIcon from "../components/GameCharacterIcon";

export default function FourOhFour() {
  return (
    <div className="fourohfour">
      <a className="alien" href="https://youtu.be/HQoRXhS7vlU" target="_blank">
        <GameCharacterIcon characterSrc="/images/characters/lilal.png" />
      </a>
      <br />
      <h1>404</h1>
      <h2>You got so lost you found an Alien!</h2>
      <p>...let's maybe keep this between us</p>
    </div>
  );
}
