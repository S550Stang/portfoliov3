import { useState } from "react";
import { HiOutlineMenu, HiOutlineMenuAlt4 } from "react-icons/hi";
import { NavbarDropDown } from "./NavbarDropDown";
import CV from "../../../assets/Prabhu_Resume.docx";

export const NavbarMenu = () => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <button onClick={handleClick} className="md:hidden cursor-pointer">
        {menu ? (
          <HiOutlineMenu className="w-7 h-7" />
        ) : (
          <HiOutlineMenuAlt4 className="w-7 h-7" />
        )}
      </button>
      <ul className="hidden md:flex justify-between items-center font-normal tracking-tighter md:gap-6 lg:gap-10 xl:gap-16 2xl:gap-28 md:text-md  ">
        <li>
          <a href="#Home" className="hover:underline  cursor-pointer">
            Home
          </a>
        </li>
        <li>
          <a href="#MyWork" className="hover:underline cursor-pointer ">
            My Work
          </a>
        </li>
        <li>
          <a href={CV} download className="hover:underline cursor-pointer ">
            Resume
          </a>
        </li>
        <li>
          <a href="#ContactMe" className="hover:underline cursor-pointer">
            Contact Me
          </a>
        </li>
      </ul>
      <NavbarDropDown menu={menu} />
    </div>
  );
};
