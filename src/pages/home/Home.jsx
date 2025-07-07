import { useEffect, useRef, useState } from 'react';
import Frontpage from './components/Frontpage';
import Projects from './components/Projects';
import Skills from './components/Skills';
import BasicInfo from './components/BasicInfo';
import Category from './components/Category';

export default function Home({ section, setSection }) {

  const topRef = useRef(null);
  const basicInfoRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const id = visible.target.id;
          console.log('intersecting:', id); // ✅ debug log
          if (id === 'top') setSection('');
          else if (id === 'basicinfo') setSection('About Me');
          else if (id === 'skills') setSection('Skills');
          else if (id === 'projects') setSection('Projects');
        }
      },
      {
        threshold: 0.5,
      }
    );

    const elements = [topRef, basicInfoRef, skillsRef, projectsRef];

    elements.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [setSection]);



  return (
    <div className='flex flex-col relative z-10'>
      <Category section={section}/>
      <section ref={topRef} id='top' className='snap-start h-screen'>
        <Frontpage />
      </section>
      <section ref={basicInfoRef} id='basicinfo' className='snap-start h-screen'>
        <BasicInfo />
      </section>
      <section ref={skillsRef} id='skills' className='snap-start h-screen'>
        <Skills />
      </section>
      <section ref={projectsRef} id='projects' className='snap-start h-screen'>
        <Projects />
      </section>
    </div>
  );
}
