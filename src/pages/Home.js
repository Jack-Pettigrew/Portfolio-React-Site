import React from "react";
import Footer from "../components/Footer";
import GameCharacterIcon from "../components/GameCharacterIcon";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <div
        className="absolute bg-center bg-cover w-screen h-screen z-[-1]"
        style={{ backgroundImage: "url(images/pcgcity.webp)" }}
      >
      </div>

      <div className="flex flex-col h-screen text-white items-center justify-between bg-[rgba(0,0,0,0.6)]">
        <NavBar />

        <div className="flex flex-col basis-[80%] justify-center items-center my-6 w-[70vw] rounded-[40px] backdrop-blur-sm bg-[rgba(255,255,255,0.2)]">
          {/* <a id="toggleInfoBtn" className="absolute top-5 right-7">Test</a> */}
          
          <img src="/logo.webp" className="w-[150px] rounded-full drop-shadow-lg" />
          <h1 className="text-center text-5xl p-5">Jack Pettigrew</h1>
          <div id="headline" className="flex flex-col gap-5 text-center  w-full text-xl font-bold">
            <p>A Software Developer and First-Class Games Computing graduate with a passion for Video Games and a burning desire to contribute fantastical games and ideas to the Games Industry.</p>
            <p>University has taught me many lessons (and not just those on the syllabus). It has been the foundation in learning necessary technical skills, forming a healthy and enthusiastic mindset, as well as providing the next step towards what I aspire to be.</p>
          </div>
            
            <span className="pt-10"><GameCharacterIcon characterSrc="images/characters/lilal.png" width="75px" height="75px" /></span>
        </div>

        <Footer />
      </div>
      
    </>
  );
}
