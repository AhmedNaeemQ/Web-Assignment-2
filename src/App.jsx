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
import { useEffect, useRef, useState } from "react";
import coding from "./assets/coding.gif";
import img from "./assets/img.png";
import Loader from "./components/Loader/Loader";
import FontFaceObserver from "fontfaceobserver";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = img;

    // Observe the custom fonts
    const fontBold = new FontFaceObserver("BigJohn-Bold");
    const fontLight = new FontFaceObserver("BigJohn-Light");
    const fontRegular = new FontFaceObserver("BigJohn-Regular");

    // Check if the document and fonts are loaded
    Promise.all([
      document.fonts.ready,
      fontBold.load(),
      fontLight.load(),
      fontRegular.load(),
      new Promise((resolve) => {
        preloadImage.onload = resolve; // Resolve when the image is loaded
      }),
    ])
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        console.error("Font loading failed or took too long.");
        setIsLoading(false);
      });
  }, []);

  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="px-12 select-none">
          <Navbar
            scrollToSection={scrollToSection}
            refs={{
              homeRef,
              skillsRef,
              workRef,
              resumeRef,
              contactRef,
            }}
          />
          <div ref={homeRef}>
            <Home />
          </div>
          <Aboutme />
          <div ref={skillsRef}>
            <Skills />
          </div>
          <Projects />
          <div ref={workRef}>
            <Work />
          </div>
          <Achivements />
          <div ref={resumeRef}>
            <Resume />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
          <img className="mx-auto" src={coding} />
        </div>
      )}
    </>
  );
}

export default App;
