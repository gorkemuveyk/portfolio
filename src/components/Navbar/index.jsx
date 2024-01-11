import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-[#FF2E63] w-full max-w-[1200px] sm:h-16 h-44 rounded flex sm:flex-row flex-col items-center justify-center gap-1 sm:gap-0 sm:justify-between px-10 md:fixed md:top-0 md:z-50">
      <div className="text-4xl font-bold bg-white w-[50px] h-[50px] rounded-full text-[#FF2E63] flex items-center justify-center select-none">
        G
      </div>
      <div className="flex justify-center items-center gap-x-2">
        <a
          className="border-none outline-none nav-item-hover transition-all duration-1000  px-4 py-2 rounded-lg"
          href="#home"
        >
          Home
        </a>
        <a
          className="border-none outline-none nav-item-hover transition-all duration-1000 px-4 py-2 rounded-lg"
          href="#about"
        >
          About
        </a>
        <a
          className="border-none outline-none nav-item-hover transition-all duration-1000  px-4 py-2 rounded-lg"
          href="#projects"
        >
          Projects
        </a>
      </div>
      <a
        className="border p-2 rounded-md bg-transparent transition-colors hover:bg-[#FFF] hover:text-[#FF2E63]"
        href="#contact"
      >
        Contact Me
      </a>
    </nav>
  );
};

export default Navbar;
