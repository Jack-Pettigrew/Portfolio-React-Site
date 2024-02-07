export default function BackgroundImage({ backgroundImageUrl, bgHexcode } : {backgroundImageUrl? : string, bgHexcode? : string})
{
  return (
    <>
      <div
        className="fixed top-[-1vh] w-[101vw] h-[102vh] bg-center bg-cover blur-sm bg-[#009cff] bg-blend-luminosity"
        style={{ backgroundImage: `url(${backgroundImageUrl ?? '/images/scifihallway.webp'})` }}
      ></div>
    </>
  );
}