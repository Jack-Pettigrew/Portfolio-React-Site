import React from "react";
import Footer from "../components/Footer";
import GameCharacterIcon from "../components/GameCharacterIcon";
import NavBar from "../components/NavBar";
import SiteTitle from "../components/SiteTitle";

export default function HomeTest() {
  return (
    <>
      <div
        className="absolute bg-center bg-cover w-screen h-screen z-[-1]"
        style={{ backgroundImage: "url(images/pcgcity.webp)" }}
      >
      </div>

      <div className="flex flex-col h-screen text-white justify-between bg-[rgba(0,0,0,0.6)]">
        <NavBar />

        <div className="flex flex-col basis-[80%] justify-center items-center">
            <h1 className="text-center text-5xl">Jack Pettigrew</h1>
            <p>Hello</p>
            
            <span className="pt-10"><GameCharacterIcon characterSrc="images/characters/lilal.png" /></span>
        </div>

        <Footer />
      </div>
      
    </>
  );
}
