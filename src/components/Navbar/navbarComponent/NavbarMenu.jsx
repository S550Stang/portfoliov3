import { useState } from "react";
import { HiOutlineMenu, HiOutlineMenuAlt4 } from "react-icons/hi";
import { NavbarDropDown } from "./NavbarDropDown";

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
      <ul className="hidden md:flex justify-between items-center font-extralight md:gap-6 lg:gap-10 xl:gap-16 2xl:gap-28 md:text-md lg:text-lg xl:text-xl 2xl:text-2xl ">
        <li>
          <a href="#Home" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#MyWork" className="hover:underline">
            My Work
          </a>
        </li>
        <li>
          <a href="#Resume" className="hover:underline">
            Resume
          </a>
        </li>
        <li>
          <a href="#ContactMe" className="hover:underline">
            Contact Me
          </a>
        </li>
      </ul>
      <NavbarDropDown menu={menu} />
    </div>
  );
};
