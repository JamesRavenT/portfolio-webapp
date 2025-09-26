import { useRef } from 'react';
import { useScroll } from '../../../_hooks/useScroll';
import { useSectionObserver } from './content/_hooks/useSectionObserver';
import { useSmoothScrollSnap } from './content/_hooks/useSmoothScrollSnap';

import Frontpage from './content/sections/frontpage/Frontpage';
import Projects from './content/sections/projects/Projects';
import Skills from './content/sections/skills/Skills';
import AboutMe from './content/sections/aboutme/AboutMe';
import Category from './content/sections/Sections';
import Contacts from './content/sections/contacts/Contacts';

export default function Home({ section, setSection }) {
  const containerRef = useRef(null);
  const { frontpageRef, aboutmeRef, skillsRef, projectsRef, contactsRef } =
    useScroll();
  const refs = [frontpageRef, aboutmeRef, skillsRef, projectsRef, contactsRef];

  // Hooks
  useSmoothScrollSnap(containerRef, refs);
  useSectionObserver(refs, setSection);

  window.addEventListener('resize', () => {
    console.log('Viewport height:', window.innerHeight);
  });

  return (
    <div
      ref={containerRef}
      className="flex flex-col relative z-10 h-[100dvh] overflow-y-auto snap-container snap-y snap-mandatory scrollbar-hidden"
    >
      <Category section={section} />
      <section
        ref={frontpageRef}
        id="frontpage"
        className="relative snap-start h-[100dvh]"
      >
        <Frontpage section={section} />
      </section>
      <section
        ref={aboutmeRef}
        id="aboutme"
        className="relative snap-start h-[100dvh]"
      >
        <AboutMe />
      </section>
      <section
        ref={skillsRef}
        id="skills"
        className="relative snap-start h-[100dvh]"
      >
        <Skills />
      </section>
      <section
        ref={projectsRef}
        id="projects"
        className="relative snap-start h-[100dvh]"
      >
        <Projects />
      </section>
      <section
        ref={contactsRef}
        id="contacts"
        className="relative snap-start h-[100dvh]"
      >
        <Contacts />
      </section>
    </div>
  );
}
