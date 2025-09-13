import { useRef } from 'react';
import { useScroll } from '../../../hooks/useScroll';
import { useSectionObserver } from './content/hooks/useSectionObserver';
import { useSmoothScrollSnap } from './content/hooks/useSmoothScrollSnap';

import Frontpage from './content/sections/frontpage/Frontpage';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import BasicInfo from './components/info/Information';
import Category from './content/sections/Sections';

export default function Home({ section, setSection }) {
  const containerRef = useRef(null);
  const { topRef, basicInfoRef, skillsRef, projectsRef } = useScroll();
  const refs = [topRef, basicInfoRef, skillsRef, projectsRef];

  // Hooks
  useSmoothScrollSnap(containerRef, refs);
  useSectionObserver(refs, setSection);

  return (
    <div
      ref={containerRef}
      className="flex flex-col relative z-10 h-screen overflow-y-auto snap-container snap-y snap-mandatory scrollbar-hidden"
    >
      <Category section={section} />
      <section ref={topRef} id="top" className="relative snap-start h-screen">
        <Frontpage section={section} />
      </section>
      <section ref={basicInfoRef} id="basicinfo" className="relative snap-start h-screen">
        <BasicInfo />
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
