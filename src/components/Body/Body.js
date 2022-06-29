import { HeadingSection } from "./bodyComponent/HeadingSection";
import { AboutSection } from "./bodyComponent/AboutSection";
import { ExperienceSection } from "./bodyComponent/ExperienceSection";
import { SkillsSection } from "./bodyComponent/SkillsSection";
import { ProjectsSection1 } from "./bodyComponent/ProjectsSection1";
import { ProjectsSection2 } from "./bodyComponent/ProjectsSection2";
import { ProjectsSection3 } from "./bodyComponent/ProjectsSection3";
import { ContactSection } from "./bodyComponent/ContactSection";

export const Body = () => {
  return (
    <div className=" text-white w-screen space-y-10 ">
      <HeadingSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection1 />
      <ProjectsSection2 />
      <ProjectsSection3 />
      <ContactSection />
    </div>
  );
};
