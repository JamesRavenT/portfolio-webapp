
import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollContext } from './helper/context';
import MenuMobile from './components/menu/MenuMobile';
import MenuDesktop from './components/menu/MenuDesktop';

export default function Navbar({ section }) {
    const topRef = useRef(null);
  const basicInfoRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

    const scrollToSection = (id) => {
    const refs = {
      top: topRef,
      basicinfo: basicInfoRef,
      skills: skillsRef,
      projects: projectsRef,
    };
    refs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
        <ScrollContext.Provider
      value={{
        scrollToSection,
        topRef,
        basicInfoRef,
        skillsRef,
        projectsRef,
      }}
    >
    <div className="w-full">
      {/* Fixed transparent navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <nav className="flex items-center justify-between w-full px-4 py-3">
          {/* Mobile Menu */}
          <MenuMobile section={section} />
        </nav>
      </div>

      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 z-60">
        <MenuDesktop section={section} />
      </aside>

      {/* Pages with snap scrolling */}
      <main className="min-h-screen overflow-auto snap-y snap-mandatory scroll-smooth">
        <Outlet />
      </main>
    </div>
    </ScrollContext.Provider>
  );
}
