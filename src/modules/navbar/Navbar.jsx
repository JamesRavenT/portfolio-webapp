/**
 * Navbar.jsx
 * Navbar Main Component
 * Finalized for v1.0.0 release
 * Last Updated: 09/22
 */

import { ScrollContext } from '../../_hooks/useScroll';
import { useSectionRefs } from '../../_hooks/useSectionRef';
import Content from './content/Content';

export default function Navbar({ section }) {
  const { frontpageRef, aboutmeRef, skillsRef, projectsRef, contactsRef } =
    useSectionRefs();
  const scrollToSection = (id) => {
    const refs = {
      frontpage: frontpageRef,
      aboutme: aboutmeRef,
      skills: skillsRef,
      projects: projectsRef,
      contacts: contactsRef,
    };
    refs[id]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider
      value={{
        scrollToSection,
        frontpageRef,
        aboutmeRef,
        skillsRef,
        projectsRef,
        contactsRef,
      }}
    >
      <div className="w-full">
        <Content section={section} />
      </div>
    </ScrollContext.Provider>
  );
}
