import React from "react";
import Footer from "../components/Footer";
import FooterRounded from "../components/FooterRounded";
import GameCharacterIcon from "../components/GameCharacterIcon";
import NavBarRounded from "../components/NavBarRounded";

export default function FourOhFour() {
  return (
    <div className="absolute w-screen h-screen flex flex-col justify-between items-center text-center text-white bg-[#313131]">
      <NavBarRounded />
    
      {/* bg-[#3c3c3c] */}
      <div className="flex flex-col w-full h-full justify-center items-center">
        <a className="duration-200 hover:scale-125 hover:rotate-6" href="https://youtu.be/HQoRXhS7vlU" target="_blank">
          <GameCharacterIcon characterSrc="/images/characters/lilal.png" />
        </a>
        <br />
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-xl">You got so lost you found an Alien!</h2>
        <p className="text-sm mt-3">...let's keep this between us...</p>
      </div>

      <FooterRounded />
    </div>
  );
}
