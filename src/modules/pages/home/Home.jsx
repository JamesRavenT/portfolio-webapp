import { useRef } from 'react';
import { useScroll } from '../../../_hooks/useScroll';
import { useSectionObserver } from './content/_hooks/useSectionObserver';
import { useSmoothScrollSnap } from './content/_hooks/useSmoothScrollSnap';

import Frontpage from './content/sections/frontpage/Frontpage';
import Projects from './components/projects/Projects';
import Skills from './content/sections/skills/Skills';
import AboutMe from './content/sections/aboutme/AboutMe';
import Category from './content/sections/Sections';

export default function Home({ section, setSection }) {
  const containerRef = useRef(null);
  const { frontpageRef, aboutmeRef, skillsRef, projectsRef } = useScroll();
  const refs = [frontpageRef, aboutmeRef, skillsRef, projectsRef];

  // Hooks
  useSmoothScrollSnap(containerRef, refs);
  useSectionObserver(refs, setSection);

  return (
    <div
      ref={containerRef}
      className="flex flex-col relative z-10 h-screen overflow-y-auto snap-container snap-y snap-mandatory scrollbar-hidden"
    >
      <Category section={section} />
      <section ref={frontpageRef} id="frontpage" className="relative snap-start h-screen">
        <Frontpage section={section} />
      </section>
      <section ref={aboutmeRef} id="aboutme" className="relative snap-start h-screen">
        <AboutMe />
      </section>
      <section ref={skillsRef} id="skills" className="relative snap-start h-screen">
        <Skills />
      </section>
      <section ref={projectsRef} id="projects" className="relative snap-start h-screen">
        <Projects />
      </section>
    </div>
  );
}
