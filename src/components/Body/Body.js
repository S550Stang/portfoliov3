import { Heading } from "./bodyComponent/Heading";
import { AboutSection } from "./bodyComponent/AboutSection";
import { ExperienceSection } from "./bodyComponent/ExperienceSection";

export const Body = () => {
  return (
    <div className=" text-white">
      <div id="Home" className="w-screen h-44"></div>
      <Heading />
      <AboutSection />
      <ExperienceSection />
    </div>
  );
};
