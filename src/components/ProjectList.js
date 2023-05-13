import React from "react";

export default function ProjectList({ children, maxWidth = "1200px" }) {
  return (
    <div
      className={`flex flex-col items-center md:flex-row md:justify-start flex-wrap w-full gap-2 max-w-[${maxWidth}]`}
    >
      {children}
    </div>
  );
}
