import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from "react-icons/di";
import { FiGithub } from "react-icons/fi";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import Mmemoirs from "../../../assets/Mmemoirs.png";
import Lotide from "../../../assets/Lotide.png";

export const ProjectsSection1 = () => {
  return (
    <div className="container mx-auto p-5 ">
      <p
        className="absolute left-0 text-[#3F37C9]/40  font-bold break-all -z-10 text-[#3F37C9] opacity-20   text-9xl
   md:text-[200px] lg:text-[250px] xl:text-[320px] 2xl:text-[400px]"
      >
        PROJECTS
      </p>
      <div className="mt-10 sm:mt-20  grid grid-cols-1 gap-y-4 sm:gap-y-8   text-white 2xl:px-20 ">
        {/** Front - End Grid #1 */}
        <div className="mx-auto bg-gradient-to-l from-[#3F37C9]  to-transparent bg-opacity-40  backdrop-blur-md  border border-[#3F37C9] rounded-3xl w-52 md:w-96 lg:w-4/5 xl:w-5/6 2xl:w-5/6 h-52 2xl:h-[400px] px-3 lg:px-0 flex overflow-hidden  font-normal">
          <di
            v
            className="flex flex-col text-left justify-center items-start gap-y-3 2xl:gap-y-6 lg:px-5"
          >
            <p className="inline-block break-words xl:text-xl 2xl:text-2xl ">
              LOTIDE-LIBRARY
            </p>
            <p className="inline-block break-words text-sm xl:text-lg 2xl:text-xl font-thin   ">
              Its a simple Loadash library clone built with just javascript
            </p>
            <button className="bg-[#3F37C9] text-xs sm:text-sm xl:text-lg 2xl:text-xl  text-white cursor-pointer rounded-full px-5 py-1 hover:scale-110 transition duration-300 ease-in-out flex items-center  ">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/S550Stang/lotide"
              >
                Github
              </a>{" "}
              <FiGithub className="ml-2" />
            </button>
          </di>
          <div className="flex flex-col items-center justify-end p-1 ">
            <DiJavascript1 className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
          </div>
          <div className="hidden lg:inline-flex w-2/3 xl:w-96 2xl:w-[800px] h-full bg-[#3F37C9] ">
            <img className="w-full" src={Lotide} alt="Loadash" />
          </div>
        </div>
        {/** Back - End Grid #2 */}
        <div className="mx-auto bg-gradient-to-r from-[#3F37C9]  to-transparent bg-opacity-40  backdrop-blur-md  border border-[#3F37C9] rounded-3xl w-52 md:w-96 lg:w-4/5 xl:w-5/6 2xl:w-5/6 h-52 2xl:h-[400px] px-3 lg:px-0 flex lg:flex-row-reverse  overflow-hidden  font-normal">
          <div className="flex">
            <div className="flex flex-col   text-left justify-center items-start gap-y-1 2xl:gap-y-6 lg:px-5">
              <p className="inline-block break-words xl:text-xl 2xl:text-2xl ">
                MMEMOIRS
              </p>
              <p className="inline-block break-words text-sm xl:text-lg 2xl:text-xl font-thin   ">
                A Full-Stack image uploading app created with React
              </p>
              <button className="bg-[#3F37C9] text-xs sm:text-sm xl:text-lg 2xl:text-xl  text-white cursor-pointer rounded-full px-5 py-1 hover:scale-110 transition duration-300 ease-in-out flex items-center  ">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/S550Stang/Memoirs-Final-Project"
                >
                  Github
                </a>{" "}
                <FiGithub className="ml-2" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-end p-1 2xl:p-2 ">
              <DiCss3Full className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
              <DiReact className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
              <SiTailwindcss className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
              <SiExpress className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
              <DiHtml5 className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
              <DiJavascript1 className="text-4xl 2xl:text-5xl text-[#3F37C9]" />
            </div>
          </div>
          {/**Place Image here */}
          <div className="hidden lg:inline-flex w-2/3 xl:w-96 2xl:w-[800px] h-full bg-[#3F37C9] ">
            <img className="w-full" src={Mmemoirs} alt="memoirs picture" />
          </div>
        </div>
      </div>
    </div>
  );
};
