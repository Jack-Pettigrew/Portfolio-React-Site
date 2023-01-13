import React from "react";
import Footer from "../components/Footer";
import FooterRounded from "../components/FooterRounded";
import GameCharacterIcon from "../components/GameCharacterIcon";
import NavBar from "../components/NavBar";
import NavBarRounded from "../components/NavBarRounded";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <>
      {/* <div
        className="absolute bg-center bg-cover w-screen h-screen z-[-1]"
        style={{ backgroundImage: "url(images/pcgcity.webp)" }}
      >
      </div> */}

      <div className="flex flex-col w-screen h-full min-h-screen text-white items-center justify-between bg-center bg-cover" style={{ backgroundImage: "url(images/pcgcity.webp)" }}>
        {/* <NavBar /> */}
        <NavBarRounded />

        <div className="flex flex-col sm:flex-row justify-center items-center w-[90vw] sm:w-[80vw] sm:my-3 px-8 py-8 rounded-[25px] backdrop-blur-md bg-[rgba(38,38,38,0.75)] shadow-[5px_5px_20px_0px_rgba(0,0,0,0.5)]">
          {/* MAKE INFO BOX ROW FOR IMPROVED INFO SPACING */}
          
          <div className="flex flex-col items-center mb-3 sm:mb-0 sm:mx-5">
            <img src="/logo_225.webp" width="150px" height="150px" className="rounded-full drop-shadow-lg" alt="Profile Picture" />
            <h1 className="text-center text-5xl my-5">Jack Pettigrew</h1>
            <SocialLinks />
          </div>
          
          <div id="headline-info" className="flex flex-col gap-5 text-start w-full text-lg">
            <p className="before:content-['💻'] before:mr-2 before:text-xl"><a className="font-bold duration-[200ms] hover:text-2xl underline underline-offset-4 decoration-wavy decoration-[#bc59fd]" href="https://github.com/Jack-Pettigrew" target="_blank">Software Developer</a> and aspiring <a className="font-bold duration-[200ms] hover:text-2xl underline underline-offset-4 decoration-wavy decoration-[#bc59fd]" href="https://www.youtube.com/playlist?list=PLK-WtXTiwG01_W2roS1Y9Ysn4EmHJvLRt" target="_blank">Game Developer</a> with a passion and desire to contribute to the fantastical world of video games.</p>
            <p className="before:content-['🕹️'] before:mr-2 before:text-xl"><a className="font-bold duration-[200ms] hover:text-2xl underline underline-offset-4 decoration-wavy decoration-[#bc59fd]" href="https://www.youtube.com/@DarkDax" target="_blank">YouTube Content Creator</a> making content about all things video games and video game development.</p>
            <p className="before:content-['⌨️'] before:mr-2 before:text-xl">Developing various <a href="/projects/games" className="font-bold duration-[200ms] hover:text-2xl underline underline-offset-4 decoration-wavy decoration-[#bc59fd]">games</a> and other <a href="/projects/apps" className="font-bold duration-[200ms] hover:text-2xl underline underline-offset-4 decoration-wavy decoration-[#bc59fd]">interesting projects</a>. <span className="text-[10px]">(...some even have a purpose)</span></p>
            <p>My experience as a developer has thrown many challenges, solidifying my technical skills and forming a healthy, enthusiastic mindset towards future developments.</p>

            <span className="self-center duration-[200ms] hover:rotate-[5deg]"><GameCharacterIcon characterSrc="images/characters/lilal.webp" width="75px" height="75px" /></span>
          </div>
            
        </div>

        {/* <Footer /> */}
        <FooterRounded />
      </div>
      
    </>
  );
}
