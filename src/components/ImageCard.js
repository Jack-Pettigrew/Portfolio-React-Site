import React from "react";

export default function ImageCard({
  backgroundImagePath,
}) {
  return (
    <div
    className="rounded-[20px] drop-shadow-md bg-cover bg-center duration-500 w-[400px] h-[250px] text-white"
    style={{ backgroundImage: backgroundImagePath }}
    >
    </div>
  );
}
