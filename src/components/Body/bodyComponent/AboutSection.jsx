import image from "../../../assets/dp.jpg";

export const AboutSection = () => {
  return (
    <div className="container mx-auto p-5 relative">
      <p
        className="absolute left-0 text-[#3F37C9]/40  font-bold break-all -z-10 text-[#3F37C9] opacity-20   text-9xl
         md:text-[200px] lg:text-[250px] xl:text-[320px] 2xl:text-[400px]"
      >
        ABOUT
      </p>
      <div className="flex flex-col space-y-4 lg:flex-row justify-between md:gap-10 items-center mt-20">
        <div className=" w-82  lg:w-[3000px]  ">
          <img src={image} alt="display" className=" bg-cover rounded-3xl" />
        </div>
        <p className="font-light md:font-extralight md:tracking-tighter break-words lg:text-2xl xl:text-3xl 2xl:text-4xl">
          Hey there! Thank you for dropping by, here's a little bit about me, I
          have a <span className="text-[#3F37C9]">Bachelors Degree</span> in
          computer science and a
          <span className="text-[#3F37C9]">Post Graduate Diploma</span> in
          global business. I am a quick learner, I love to fail just so i could
          raise back up stronger.
        </p>
      </div>
    </div>
  );
};
