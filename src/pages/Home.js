import React from "react";
import Footer from "../components/Footer";
import FooterRounded from "../components/FooterRounded";
import GameCharacterIcon from "../components/GameCharacterIcon";
import NavBar from "../components/NavBar";
import NavBarRounded from "../components/NavBarRounded";

export default function Home() {
  return (
    <>
      {/* <div
        className="absolute bg-center bg-cover w-screen h-screen z-[-1]"
        style={{ backgroundImage: "url(images/pcgcity.webp)" }}
      >
      </div> */}

      <div className="flex flex-col w-full h-full sm:h-screen text-white items-center justify-between bg-center bg-cover" style={{ backgroundImage: "url(images/pcgcity.webp)" }}>
        {/* <NavBar /> */}
        <NavBarRounded />

        <div className="flex flex-col justify-center items-center w-[90vw] sm:w-[70vw] sm:my-3 py-8 rounded-[40px] backdrop-blur-md bg-[rgba(38,38,38,0.75)] shadow-[5px_5px_20px_0px_rgba(0,0,0,0.5)]">
          {/* <a id="toggleInfoBtn" className="absolute top-5 right-7">Test</a> */}
          
          <img src="/logo_225.webp" width="150px" height="150px" className="rounded-full drop-shadow-lg" alt="Profile Picture" />
          <h1 className="text-center text-5xl p-5">Jack Pettigrew</h1>
          <div id="headline-info" className="flex flex-col gap-5 px-5 text-center w-full text-xl font-bold">
            <p>A Software Developer and First-Class Games Computing graduate with a passion for Video Games and a burning desire to contribute fantastical games and ideas to the Games Industry.</p>
            <p>University has taught me many lessons (and not just those on the syllabus). It has been the foundation in learning necessary technical skills, forming a healthy and enthusiastic mindset, as well as providing the next step towards what I aspire to be.</p>
          </div>
            
            <span className="pt-10"><GameCharacterIcon characterSrc="images/characters/lilal.webp" /></span>
        </div>

        {/* <Footer /> */}
        <FooterRounded />
      </div>
      
    </>
  );
}
