import { useRef } from 'react';

export function useSectionRefs() {
  const frontpageRef = useRef(null);
  const aboutmeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null); // <-- add this

  return { frontpageRef, aboutmeRef, skillsRef, projectsRef, contactsRef };
}
