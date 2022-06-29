import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiFillProject } from "react-icons/ai";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export const ExperienceSection = () => {
  return (
    <div className="container mx-auto p-5 relative w-screen ">
      <p
        className="absolute left-0 text-[#3F37C9]/40  font-bold break-all -z-10 text-[#3F37C9] opacity-20   text-9xl
         md:text-[200px] lg:text-[250px] xl:text-[320px] 2xl:text-[400px]"
      >
        EXPERIENCE
      </p>
      <div className="lg:grid lg:grid-cols-2 gap-10 xl:gap-20 2xl:space-x-54 mt-10 md:mt-20 px-2 ">
        {/** All Experience Components Here */}
        {/** Experience Component Here */}
        <div className="flex justify-center items-center font-Lato mb-10 ">
          <div className=" w-52 sm:w-72 lg:w-72 xl:w-80 2xl:w-[700px] h-52 2xl:h-[400px] rounded-3xl flex flex-col justify-center items-center bg-gradient-to-r from-[#3F37C9]  to-transparent bg-opacity-40  backdrop-blur-md  border border-white text-sm 2xl:text-2xl    gap-3 sm:gap-5">
            <AiFillSafetyCertificate className="headerTitle text-white" />
            <p className="text-[#f7f7f7]">Expereince</p>
            <p className="text-[#f7f7f7] font-light">4+ Years</p>
          </div>
        </div>
        {/** Project Component Here */}
        <div className="flex justify-center items-center font-Lato mb-10">
          <div className=" w-52 sm:w-72 lg:w-72 xl:w-80 2xl:w-[700px] h-52 2xl:h-[400px] rounded-3xl flex flex-col justify-center items-center bg-gradient-to-l from-[#3F37C9]  to-transparent bg-opacity-40  backdrop-blur-md  border border-white text-sm 2xl:text-2xl     gap-3 sm:gap-5">
            <AiFillProject className="headerTitle text-white" />
            <p className="text-[#f7f7f7]">Projects</p>
            <p className="text-[#f7f7f7] font-light">10+ Projects</p>
          </div>
        </div>
        {/** Certfications Component Here */}
        <div className="flex justify-center items-center font-Lato  lg:grid lg:col-span-2 ">
          <div
            className=" w-52 sm:w-72 lg:w-72 xl:w-80 2xl:w-[700px] h-52 2xl:h-[400px] rounded-3xl flex flex-col justify-center items-center text-sm 2xl:text-2xl
              bg-gradient-to-br from-[#3F37C9]  to-transparent bg-opacity-40  backdrop-blur-md   border border-white gap-3 sm:gap-5 "
          >
            <AiOutlineSafetyCertificate className="headerTitle text-white" />
            <p className="text-[#f7f7f7]">Certifications</p>
            <p className="text-[#f7f7f7] font-light">6+ Certifications</p>
          </div>
        </div>
      </div>
    </div>
  );
};
