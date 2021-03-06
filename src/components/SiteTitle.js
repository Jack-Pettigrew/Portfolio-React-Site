import "./SiteTitle.css";

import { useEffect } from "react";
import Links from "./Links";

export default function SiteTitle() {
  // Set position to be normal - CSS doesn't animate it right
  setTimeout(() => {
    let title = document.querySelector(".title");
    title.classList.remove("overlayed");
  }, 4000);

  // Rotate link one by one
  useEffect(() => {
    const flipLink = async () => {
      const list = document.querySelectorAll(".link");

      for (let i = 0; i < list.length; i++) {
        await new Promise((resolve) => {
          setTimeout(function () {
            list[i].classList.add("visible-rotated");
            resolve();
          }, 250);
        });
      }
    };

    // Delay call
    setTimeout(flipLink, 4000);
  });

  return (
    <div className="sitetitle overlayed">
      <p className="name">Jack Pettigrew</p>
      <div className="subtitle">
        <h3>Gamer.</h3>
        <h3>Game Developer.</h3>
        <h3>Nerd.</h3>
      </div>
      <Links introTransitionClass="hidden-rotated" />
    </div>
  );
}
