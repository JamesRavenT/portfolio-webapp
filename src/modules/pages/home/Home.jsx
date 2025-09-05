import { useEffect, useRef } from 'react';
import { useScroll } from '../../navbar/helper/context'; //
import Frontpage from './components/frontpage/Frontpage';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import BasicInfo from './components/info/Information';
import Category from './components/Sections';
import { Outlet } from 'react-router-dom';
import { ScrollContext } from '../../navbar/helper/context';


export default function Home({ section, setSection }) {
  const containerRef = useRef(null);
  const { topRef, basicInfoRef, skillsRef, projectsRef } = useScroll();

  // Smooth section snapping with wheel
  useEffect(() => {
    const container = containerRef.current;
    let isScrolling = false;

const onWheel = (e) => {
  if (isScrolling) return;
  e.preventDefault();

  const direction = e.deltaY > 0 ? 1 : -1;
  const container = containerRef.current;
  const sections = [topRef, basicInfoRef, skillsRef, projectsRef].map(
    (ref) => ref.current
  );

  const sectionHeight = window.innerHeight;
  
  // 👇 adjust based on scroll direction
  const currentIndex =
    direction > 0
      ? Math.floor(container.scrollTop / sectionHeight)
      : Math.ceil(container.scrollTop / sectionHeight);

  let nextIndex = Math.min(
    sections.length - 1,
    Math.max(0, currentIndex + direction)
  );

  if (sections[nextIndex]) {
    isScrolling = true;
    sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => (isScrolling = false), 750);
  }
};

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, []);

  // Intersection observer for section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const id = visible.target.id;
          if (id === 'top') setSection('');
          else if (id === 'basicinfo') setSection('About Me');
          else if (id === 'skills') setSection('Skills');
          else if (id === 'projects') setSection('Projects');
        }
      },
      { threshold: 0.5 }
    );

    const elements = [topRef, basicInfoRef, skillsRef, projectsRef];
    elements.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [setSection]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col relative z-10 h-screen overflow-y-auto snap-container snap-y snap-mandatory scrollbar-hidden"
    >
      <Category section={section} />
      <section ref={topRef} id="top" className="snap-start h-screen">
        <Frontpage />
      </section>
      <section ref={basicInfoRef} id="basicinfo" className="snap-start h-screen">
        <BasicInfo />
      </section>
      <section ref={skillsRef} id="skills" className="snap-start h-screen">
        <Skills />
      </section>
      <section ref={projectsRef} id="projects" className="snap-start h-screen">
        <Projects />
      </section>
    </div>
  );
}
