import { useEffect } from "react";
import Frontpage from "./components/Frontpage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home({ theme, setSection }) {
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 2;
      const intro = document.getElementById("top");
      const skills = document.getElementById("skills");
      const projects = document.getElementById("projects");

      if (projects && projects.getBoundingClientRect().top < offset) {
        setSection("Projects");
      } else if (skills && skills.getBoundingClientRect().top < offset) {
        setSection("Skills");
      } else if (intro && intro.getBoundingClientRect().top < offset) {
        setSection("");
      }
    };

    // ✅ use window as scroll source
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSection]);

  return (
    <div className="flex flex-col relative z-10">
        <section id="top" className="snap-start h-screen">
            <Frontpage />
        </section>
        <section id="skills" className="snap-start h-screen">
            <Skills />
        </section>
        <section id="skills" className="snap-start h-screen">
            <Skills />
        </section>
        <section id="skills" className="snap-start h-screen">
            <Skills />
        </section>
        
    </div>
  );
}