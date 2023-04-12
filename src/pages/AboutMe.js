import React from "react";
import FooterRounded from "../components/FooterRounded";
import NavBarRounded from "../components/NavBarRounded";
import BackgroundImage from "../components/BackgroundImage";

export default function AboutMe() {
  return (
    <div className="flex flex-col min-h-screen justify-between items-center text-white">
      <BackgroundImage />

      <NavBarRounded />

      <div className="relative flex flex-col justify-center items-center w-screen lg:flex-row gap-5 px-10 sm:mx-20">
        {/* image */}
        <div
          id="about-me-supporting"
          className="flex flex-col justify-center items-center"
        >
          <img
            class="rounded-full"
            src="/logo_450.webp"
            alt="Profile Picture"
          />
          <h1 className="m-5 text-[2.5rem]">👋🏻 About Me</h1>
        </div>

        {/* info */}
        <div
          id="about-me-text"
          className="basis-2/3 flex flex-col h-full gap-4 px-6 py-4 max-w-[1225px] rounded-[25px] backdrop-blur-md bg-[rgba(38,38,38,0.75)] shadow-[5px_5px_20px_0px_rgba(0,0,0,0.5)]"
        >
          <p>
            To create an experience someone can wholeheartedly connect with is a
            dream of mine. This deep rooted goal, formed over decades since
            childhood, is what drives my passion to create great games and
            experiences.
          </p>
          <p>
            As a First-Class Graduate in Game Computing, I've become proficient
            in both <span className="font-bold text-[#bc59fd]">C#</span> and{" "}
            <span className="font-bold text-[#bc59fd]">C++</span> through both
            game and general software development University projects of which I
            am proud (such as Kings vs Snakes (Legacy), Quasar: Space Boids,
            PCG: Underwater City, my Final Year Project and my general software
            projects).
          </p>
          <p>
            As a Software Developer I have extended and developed flexible
            systems of a propriety management system using{" "}
            <span className="font-bold text-[#bc59fd]">PHP</span>,{" "}
            <span className="font-bold text-[#bc59fd]">MySQL</span>,{" "}
            <span className="font-bold text-[#bc59fd]">HTML</span>,{" "}
            <span className="font-bold text-[#bc59fd]">CSS</span>,{" "}
            <span className="font-bold text-[#bc59fd]">JavaScript</span> and{" "}
            <span className="font-bold text-[#bc59fd]">jQuery</span> for
            asynchronous operations with databases - improving, digitising or
            automating laborious analogue work for 20+ Students Unions across
            the UK.
          </p>
          <p>
            In my spare time, I like to chase and explore new ideas while
            expanding my game development skills mainly using the{" "}
            <span className="font-bold text-[#bc59fd]">Unity Game Engine</span>;
            sharing my creations and process in an engaging format on my YouTube
            channel. When I'm not doing that you can find me playing games...
            for completely educational and productive reasons... I promise.
          </p>
          <p>
            I've also worked with{" "}
            <span className="font-bold text-[#bc59fd]">C++</span> based game
            engines, such as{" "}
            <span className="font-bold text-[#bc59fd]">Urho3D</span> for
            university, with brief{" "}
            <span className="font-bold text-[#bc59fd]">Unreal Engine</span>{" "}
            exposure through personal experimentation and online courses.
          </p>
          <p>
            Familiar with the fundamentals of{" "}
            <span className="font-bold text-[#bc59fd]">Blender</span>, I have
            created assets and rigs for personal and assignment use (for
            example, those found here), and experience with{" "}
            <span className="font-bold text-[#bc59fd]">Adobe Photoshop</span>{" "}
            and <span className="font-bold text-[#bc59fd]">Asprite</span> for
            creating sprites, logos, and basic textures.
          </p>
          <p>
            I live and breathe all things games and games development has become
            a core component of that passion. I dream that one day I can
            contribute to a project that will help those as much as they've
            helped me.
          </p>
        </div>
      </div>

      <FooterRounded />
    </div>
  );
}
