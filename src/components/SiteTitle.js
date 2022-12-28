import SocialLinks from "./SocialLinks";

export default function SiteTitle() {
  const siteTitle = document.getElementById('site-title');

  setTimeout(() => {
    document.getElementById('site-title').classList.remove("translate-y-[40vh]");
    document.getElementById('site-title').classList.remove("translate-x-[30vw]");
    document.getElementById('site-title').classList.remove("text-[5em]");
    document.getElementById('site-title').classList.add("text-[3em]");
  }, 2000);

  setTimeout(() => {
    document.getElementById('fading-background').classList.remove("bg-white");
    document.getElementById('fading-background').classList.add("pointer-events-none");
  }, 2500);

  return (
    <>
      <div id="fading-background" className="absolute w-screen h-screen bg-white duration-1000 z-[1]">
      </div>
    
      <div>
        <p
          id="site-title"
          className="relative text-[5em] pl-[20px] translate-y-[40vh] translate-x-[30vw] duration-1000 z-[2]"
        >
          Jack Pettigrew
        </p>

        <div className="flex flex-row [&>*]:mx-4">
          <h1 className="text-xl font-bold duration-500 hover:rotate-6 hover:scale-[1.4]">
            Gamer.
          </h1>
          <h1 className="text-xl font-bold duration-500 hover:rotate-6 hover:scale-[1.4]">
            Game Developer.
          </h1>
          <h1 className="text-xl font-bold duration-500 hover:rotate-6 hover:scale-[1.4]">
            Nerd.
          </h1>
        </div>
      </div>

      <div>
        <SocialLinks />
      </div>
    </>
  );
}
