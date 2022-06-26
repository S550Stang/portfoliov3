import React from "react";
import { motion } from "framer-motion";

export const NavbarDropDown = ({ menu }) => {
  return (
    <>
      {menu ? (
        <motion.div
          animate={{ y: 1 }}
          className="fixed left-0 right-0 w-screen h-28 bg-[#3F37C9] rounded-b-2xl"
        >
          <ul className="px-5 font-light">
            <motion.li
              initial={{ x: 100 }}
              animate={{ x: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            >
              <a href="#Home" className="hover:underline">
                Home
              </a>
            </motion.li>
            <motion.li
              initial={{ x: 100 }}
              animate={{ x: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            >
              <a href="#MyWork" className="hover:underline">
                My Work
              </a>
            </motion.li>
            <motion.li
              initial={{ x: 100 }}
              animate={{ x: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            >
              <a href="#Resume" className="hover:underline">
                Resume
              </a>
            </motion.li>
            <motion.li
              initial={{ x: 100 }}
              animate={{ x: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            >
              <a href="#ContactMe" className="hover:underline">
                Contact Me
              </a>
            </motion.li>
          </ul>
        </motion.div>
      ) : null}
    </>
  );
};
