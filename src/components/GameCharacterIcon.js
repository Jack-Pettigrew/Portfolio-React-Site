import React from "react";

export default function GameCharacterIcon({ characterSrc, width, height }) {
  return (
    <div className="game-character-icon">
      <img
        width={width ? width : "100px"}
        height={height ? height : "100px"}
        src={characterSrc}
        alt="One of my original game characters"
      />
    </div>
  );
}
