import React from "react";
import Image from "../../../assets/image.svg";

export const Heading = () => {
  return (
    <div
      id="Home"
      className="container mx-auto font-bold text-5xl sm:text-6xl md:text-7xl lg:text:8xl  break-words p-5 space-y-4"
    >
      Hi, i'm Prabhu.
      <br />
      and i am a Full Stack
      <br />
      <span className="text-[#3F37C9] underline">Web Dev.</span>
      <br />
      <div className="flex justify-between items-center">
        <button className="bg-[#3F37C9] font-light text-3xl px-4 py-2 rounded-3xl cursor-pointer ">
          <a href="#MyWork">Projects.</a>
        </button>
        <img src={Image} atl="image" className="hidden md:block w-40" />
      </div>
    </div>
  );
};
