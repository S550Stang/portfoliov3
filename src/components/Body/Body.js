import { Heading } from "./bodyComponent/Heading";
import { AboutSection } from "./bodyComponent/AboutSection";
import { ExperienceSection } from "./bodyComponent/ExperienceSection";
import { SkillsSection } from "./bodyComponent/SkillsSection";

export const Body = () => {
  return (
    <div className=" text-white w-screen">
      <div id="Home" className="w-screen h-44"></div>
      <Heading />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
    </div>
  );
};
