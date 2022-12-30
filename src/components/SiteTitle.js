import NavBar from "./NavBar";
import SocialLinks from "./SocialLinks";

export default function SiteTitle() {

  setTimeout(() => {
    document.getElementById("site-title").classList.remove("translate-y-[40vh]");
    document.getElementById("site-title").classList.remove("translate-x-[30vw]");
    document.getElementById("site-title").classList.remove("text-[5em]");
    document.getElementById("site-title").classList.add("text-[3em]");
  }, 2000);

  setTimeout(() => {
    document.getElementById("fading-background").classList.remove("bg-white");
    document.getElementById("fading-background").classList.add("pointer-events-none");
  }, 2500);

  return (
    <>
      <div id="fading-background" className="absolute w-screen h-screen bg-white duration-1000 z-[1]">
      </div>

      <div className="flex flex-row">
        {/* Site Titles */}
        <div className="w-full pl-[20px]">
          <p id="site-title" className="relative text-[5em] translate-y-[40vh] translate-x-[30vw] duration-1000 z-[2] whitespace-nowrap overflow-visible">
            Jack Pettigrew
          </p>

          {/* Site Title Tag Words */}
          <div className="flex flex-ro space-x-[3.2rem]">
            <h1 className="text-[1em] font-bold duration-500 hover:rotate-6 hover:scale-[1.4]">
              Gamer.
            </h1>
            <h1 className="text-[1em] font-bold duration-500 hover:rotate-6 hover:scale-[1.4]">
              Game Developer.
            </h1>
            <h1 className="text-[1em] font-bold duration-500 hover:rotate-6 hover:scale-[1.4]">
              Nerd.
            </h1>
          </div>
        </div>

        {/* Nav Bar */}
        <NavBar />
      </div>

      {/* <div>
        <SocialLinks />
      </div> */}
    </>
  );
}
