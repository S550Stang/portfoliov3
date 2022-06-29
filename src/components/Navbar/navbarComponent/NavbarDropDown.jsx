import CV from "../../../assets/Prabhu_Resume.docx";
import { motion } from "framer-motion";

export const NavbarDropDown = ({ menu }) => {
  return (
    <>
      {menu ? (
        <motion.div
          animate={{ y: 1 }}
          className="md:hidden fixed mt-3 right-0 left-0  w-screen h-28 bg-gradient-to-br from-[#3F37C9]  to-transparent bg-opacity-40  backdrop-blur-md shadow-xl rounded-b-2xl"
        >
          <ul className="md:hidden px-5 font-light">
            <motion.li
              initial={{ x: "100vw" }}
              animate={{ x: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0 }}
            >
              <a href="#Home" className="hover:underline">
                Home
              </a>
            </motion.li>
            <motion.li
              initial={{ x: "100vw" }}
              animate={{ x: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            >
              <a href="#MyWork" className="hover:underline">
                My Work
              </a>
            </motion.li>
            <motion.li
              initial={{ x: "100vw" }}
              animate={{ x: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            >
              <a href={CV} download className="hover:underline cursor-pointer ">
                Resume
              </a>
            </motion.li>
            <motion.li
              initial={{ x: "100vw" }}
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
