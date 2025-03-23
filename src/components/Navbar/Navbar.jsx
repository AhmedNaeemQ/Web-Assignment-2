import { useState } from "react";
import { GradientButton } from "../GradientButton/Button";

export const Navbar = ({ scrollToSection, refs }) => {
  const navItems = ["Home", "Skills", "Work", "Resume"];

  const navigate = (section) => {
    if (section === "Home") {
      scrollToSection(refs.homeRef);
    } else if (section === "Skills") {
      scrollToSection(refs.skillsRef);
    } else if (section === "Work") {
      scrollToSection(refs.workRef);
    } else if (section === "Resume") {
      scrollToSection(refs.resumeRef);
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed flex justify-between my-4 px-4 h-16 w-[calc(100%-6rem)] rounded-full border items-center backdrop-blur z-50">
      <h1 className="font-bigjohn-regular font-bold ml-4 cursor-pointer select-none">
        Ahmed Naeem
      </h1>

      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <ul className={`font-bigjohn-regular flex-col gap-4 lg:flex lg:flex-row lg:gap-12 lg:items-center ${isMenuOpen ? 'absolute -bottom-40 bg-white w-full rounded-lg flex-col flex' : 'hidden'}`}>
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              navigate(item);
              setIsMenuOpen(false);
            }}
            className="relative group h- overflow-hidden"
          >
            <span className="bg-gradient-to-r from-violet-500 to-sky-500 w-full h-1 absolute z-10 bottom-0 transition ease-in duration-200 -translate-x-[110%] group-hover:translate-x-0"></span>
            {item}
          </button>
        ))}
      </ul>

      <div onClick={() => scrollToSection(refs.contactRef)} className="hidden lg:block">
        <GradientButton />
      </div>
    </div>
  );
};
