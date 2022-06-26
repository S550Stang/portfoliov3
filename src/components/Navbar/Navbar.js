import { NavbarMenu } from "./navbarComponent/NavbarMenu";
import { NavbarLogo } from "./navbarComponent/NavbarLogo";

export const Navbar = () => {
  return (
    <div
      className="text-white flex justify-between
     items-center w-screen h-20 p-5 md:px-8 lg:px-12 xl:px-16 2xl:px-24  bg-[#3F37C9] rounded-b-2xl"
    >
      <NavbarLogo />
      <NavbarMenu />
    </div>
  );
};
