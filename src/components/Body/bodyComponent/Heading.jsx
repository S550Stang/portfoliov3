import React from "react";

export const Heading = () => {
  return (
    <div
      id="Home"
      className="container mx-auto text-5xl break-words p-5 space-y-4"
    >
      Hi, i'm Prabhu.
      <br />
      and i am a Full Stack
      <br />
      <span className="text-[#3F37C9] underline">Web Dev.</span>
      <br />
      <button className="bg-[#3F37C9] text-3xl px-4 py-2 rounded-3xl cursor-pointer ">
        <a href="#MyWork">Projects.</a>
      </button>
    </div>
  );
};
