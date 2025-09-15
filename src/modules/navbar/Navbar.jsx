import { ScrollContext } from '../../_hooks/useScroll';
import { useSectionRefs } from '../../_hooks/useSectionRef';
import Content from './content/Content';

export default function Navbar({ section }) {
  const { frontpageRef, aboutmeRef, skillsRef, projectsRef } = useSectionRefs();
  const scrollToSection = (id) => {
    const refs = {
      frontpage: frontpageRef,
      aboutme: aboutmeRef,
      skills: skillsRef,
      projects: projectsRef,
    };
    refs[id]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider
      value={{ scrollToSection, frontpageRef, aboutmeRef, skillsRef, projectsRef }}
    >
      <div className="w-full">
        <Content section={section} />
      </div>
    </ScrollContext.Provider>
  );
}
