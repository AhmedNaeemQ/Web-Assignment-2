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

function App() {
  return (
    <div className="px-12 ">
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Projects />
      <Work />
      <Achivements />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
