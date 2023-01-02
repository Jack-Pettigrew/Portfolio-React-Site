import React from "react";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="flex flex-col w-screen pt-2 shadow-[inset_0_10px_10px_-4px_rgba(0,0,0,0.3)] backdrop-blur-md">
      <SocialLinks linkSizes="2em" linksFlexDirection="row" />

      {/* Copyright */}
      <div className="w-full text-center">
        <p>© Jack Pettigrew - 2023</p>
      </div>
    </footer>
  );
}
