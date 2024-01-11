import SmoothScroll from "smooth-scroll";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="bg-[#FF2E63] w-full sm:h-16 h-44 rounded rounded-t-none flex sm:flex-row flex-col items-center justify-center gap-1 sm:gap-0 sm:justify-center px-10 md:gap-5 lg:gap-7 xl:gap-10"
    >
      <div className="text-4xl font-bold bg-white w-[50px] h-[50px] rounded-full text-[#FF2E63] flex items-center justify-center select-none">
        G
      </div>
      <div className="flex justify-center items-center gap-x-2">
        <a
          data-scroll
          className="border-none outline-none nav-item-hover transition-all duration-1000  px-4 py-2 rounded-lg"
          href="#home"
        >
          Home
        </a>
        <a
          data-scroll
          className="border-none outline-none nav-item-hover transition-all duration-1000 px-4 py-2 rounded-lg"
          href="#about"
        >
          About
        </a>
        <a
          data-scroll
          className="border-none outline-none nav-item-hover transition-all duration-1000  px-4 py-2 rounded-lg"
          href="#projects"
        >
          Projects
        </a>
      </div>
      <a
        data-scroll
        className="border p-2 rounded-md bg-transparent transition-colors hover:bg-[#FFF] hover:text-[#FF2E63]"
        href="#contact"
      >
        Contact Me
      </a>
    </motion.nav>
  );
};

export default Navbar;
