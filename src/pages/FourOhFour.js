import React from "react";
import GameCharacterIcon from "../components/GameCharacterIcon";

export default function FourOhFour() {
  return (
    <div className="absolute w-screen h-screen flex flex-col justify-center items-center text-center">
      <a className="duration-200 hover:scale-125 hover:rotate-6" href="https://youtu.be/HQoRXhS7vlU" target="_blank">
        <GameCharacterIcon characterSrc="/images/characters/lilal.png" />
      </a>
      <br />
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-xl">You got so lost you found an Alien!</h2>
      <p className="text-sm mt-3">...let's maybe keep this between us</p>
    </div>
  );
}
