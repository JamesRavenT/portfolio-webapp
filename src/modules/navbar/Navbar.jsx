import { ScrollContext } from '../../hooks/useScroll';
import { useSectionRefs } from '../../hooks/useSectionRef';
import MenuDesktop from './content/layout/DesktopView';
import Content from './content/Content';

export default function Navbar({ section }) {
  const { topRef, basicInfoRef, skillsRef, projectsRef } = useSectionRefs();
  const scrollToSection = (id) => {
    const refs = {
      top: topRef,
      basicinfo: basicInfoRef,
      skills: skillsRef,
      projects: projectsRef,
    };
    refs[id]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider
      value={{ scrollToSection, topRef, basicInfoRef, skillsRef, projectsRef }}
    >
      <div className="w-full">
        <Content section={section} />
      </div>
    </ScrollContext.Provider>
  );
}
