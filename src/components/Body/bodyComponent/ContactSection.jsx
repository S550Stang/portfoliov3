import React from "react";
import ContactSectionFull from "./ContactSectionFull";

export const ContactSection = () => {
  return (
    <div className="container mx-auto p-5 ">
      <p
        className="absolute left-0 text-[#3F37C9]/40  font-bold break-all -z-10 text-[#3F37C9] opacity-20   text-9xl
md:text-[200px] lg:text-[250px] xl:text-[320px] 2xl:text-[400px]"
      >
        CONTACT ME
      </p>
      <ContactSectionFull />
    </div>
  );
};
