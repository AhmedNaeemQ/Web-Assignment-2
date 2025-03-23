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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataEntry from "./components/DataEntry/DataEntry";
import { UserDetailsProvider } from "./context/UserDetails";
import Footer from "./components/Footer/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = img;

    const fontBold = new FontFaceObserver("BigJohn-Bold");
    const fontLight = new FontFaceObserver("BigJohn-Light");
    const fontRegular = new FontFaceObserver("BigJohn-Regular");

    Promise.all([
      document.fonts.ready,
      fontBold.load(),
      fontLight.load(),
      fontRegular.load(),
      new Promise((resolve) => {
        preloadImage.onload = resolve;
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
    <UserDetailsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DataEntry />} />
          <Route
            path="/portfolio"
            element={
              <div className={`${darkMode && "bg-black text-white"}`}>
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
                    <label className="absolute top-24 right-4 flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={darkMode}
                          onChange={() => setDarkMode(!darkMode)}
                        />
                        <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                        <div
                          className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                            darkMode ? "transform translate-x-full bg-black" : ""
                          }`}
                        ></div>
                      </div>
                      <div className="ml-3 text-gray-700 font-medium">
                        {darkMode ? "Dark Mode" : "Light Mode"}
                      </div>
                    </label>
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
                    <Footer />
                  </div>
                )}
              </div>
            }
          />
        </Routes>
      </Router>
    </UserDetailsProvider>
  );
}

export default App;
