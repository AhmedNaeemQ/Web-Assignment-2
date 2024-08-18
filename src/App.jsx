import "./App.css";
import { Aboutme } from "./components/AboutMe/Aboutme";
import { Resume } from "./components/Resume/Resume";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Work } from "./components/Work/Work";
import { Contact } from "./components/Contact/Contact";
import { Achivements } from "./components/Achievements/Achievements";
import { useRef } from "react";

function App() {
  const homeRef = useRef(null);
  // const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  // const projectsRef = useRef(null);
  const workRef = useRef(null);
  // const achievementsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-12">
      <Navbar
        scrollToSection={scrollToSection}
        refs={{
          homeRef,
          // aboutRef,
          skillsRef,
          // projectsRef,
          workRef,
          // achievementsRef,
          resumeRef,
          contactRef,
        }}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      {/* <div ref={aboutRef}> */}
        <Aboutme />
      {/* </div> */}
      <div ref={skillsRef}>
        <Skills />
      </div>
      {/* <div ref={projectsRef}> */}
        <Projects />
      {/* </div> */}
      <div ref={workRef}>
        <Work />
      </div>
      {/* <div ref={achievementsRef}> */}
        <Achivements />
      {/* </div> */}
      <div ref={resumeRef}>
        <Resume />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
