import React from "react";

export default function BackgroundImage() {
  return (
    <>
      <div
        className="fixed top-[-1vh] w-[101vw] h-[102vh] bg-center bg-cover blur-sm bg-[#fff] bg-[#009cff] bg-blend-luminosity"
        style={{ backgroundImage: "url(images/scifihallway.webp)" }}
      ></div>
    </>
  );
}
