import React from "react";

export const SkillsSection = () => {
  return (
    <div className="text-white container mx-auto p-5 ">
      <p
        className="absolute left-0 text-[#3F37C9]/40  font-bold break-all -z-10 text-[#3F37C9] opacity-20   text-9xl
         md:text-[200px] lg:text-[250px] xl:text-[320px] 2xl:text-[400px]"
      >
        SKILLS
      </p>
      <div className=" mt-10 sm:mt-20 grid grid-cols-1 md:flex gap-y-4 sm:gap-y-8  text-white ">
        {/** Front - End Grid #1 */}
        <div className="mx-auto bg-gradient-to-l from-[#3F37C9]  to-transparent bg-opacity-40  backdrop-blur-md border border-white rounded-3xl w-52 lg:w-72 2xl:w-96 2xl:h-72  h-52  text-center  font-normal">
          <div className="my-2">
            <p className="inline-block break-words text-sm 2xl:text-2xl  p-5">
              FRONT-END
            </p>
            <div className="flex items-center justify-center gap-x-4  xl:gap-x-10">
              <div className="flex flex-col text-left  gap-y-2 2xl:font-light">
                <p className="inline-block break-words text-sm 2xl:text-2xl  ">
                  HTML
                </p>
                <p className="inline-block break-words text-sm 2xl:text-2xl">
                  JAVASCRIPT
                </p>
                <p className="inline-block break-words text-sm 2xl:text-2xl ">
                  TAILWINDCSS
                </p>
                <p className="inline-block break-words text-sm 2xl:text-2xl ">
                  BOOTSTRAP
                </p>
              </div>
              <div className="flex flex-col text-left gap-y-2 2xl:font-light">
                <p className="inline-block break-words text-sm 2xl:text-2xl ">
                  CSS
                </p>
                <p className="inline-block break-words text-sm 2xl:text-2xl ">
                  REACTJS
                </p>
                <p className="inline-block break-words text-sm 2xl:text-2xl ">
                  NEXTJS
                </p>
                <p className="inline-block break-words text-sm 2xl:text-2xl ">
                  MATERIALUI
                </p>
              </div>
            </div>
          </div>
        </div>
        {/** Back - End Grid #2 */}
        <div className="mx-auto bg-gradient-to-r from-[#3F37C9]  to-transparent bg-opacity-40  backdrop-blur-md border border-white rounded-3xl w-52 lg:w-72 2xl:w-96 2xl:h-72  h-52 text-center">
          <div className="my-2">
            <p className="inline-block break-words text-sm 2xl:text-2xl  p-5">
              BACK-END
            </p>
            <div className="flex items-center justify-center gap-x-10 xl:gap-x-10">
              <div className="flex flex-col text-left gap-y-2 2xl:font-light">
                <p className="inline-block break-words text-sm 2xl:text-2xl ">
                  NODEJS
                </p>
                <p className="inline-block break-words text-sm 2xl:text-2xl ">
                  PYTHON
                </p>
                <p className="inline-block break-words text-sm 2xl:text-2xl ">
                  RUBY
                </p>
                <p className="inline-block break-words text-sm 2xl:text-2xl ">
                  EXPRESS
                </p>
              </div>
              <div className="flex flex-col text-left gap-y-2 2xl:font-light">
                <p className="inline-block break-words text-sm 2xl:text-2xl ">
                  MYSQL
                </p>
                <p className="inline-block break-words text-sm 2xl:text-2xl ">
                  POSTGRES
                </p>
                <p className="inline-block break-words text-sm 2xl:text-2xl ">
                  EJS
                </p>
                <p className="inline-block break-words text-sm 2xl:text-2xl ">
                  RESTful API
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
