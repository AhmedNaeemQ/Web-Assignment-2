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

  return (
    <div className="fixed flex justify-between my-4 px-4 h-16 w-[calc(100%-6rem)] rounded-full border items-center backdrop-blur z-50">
      <h1 className="font-bigjohn-regular font-bold ml-4 cursor-pointer select-none">
        Ahmed Naeem
      </h1>

      <ul className="font-bigjohn-regular flex gap-12 lg:gap-20 h-full">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item)}
            className="relative group h- overflow-hidden"
          >
            <span className="bg-gradient-to-r from-violet-500 to-sky-500 w-full h-1 absolute z-10 bottom-3 transition ease-in duration-200 -translate-x-[110%] group-hover:translate-x-0"></span>
            {item}
          </button>
        ))}
      </ul>

      <div onClick={() => scrollToSection(refs.contactRef)}>
        <GradientButton />
      </div>
    </div>
  );
};
