/**
 * useSectionRef.js
 * Custom hook that provides references for key page sections to enable scroll and navigation control
 * Finalized for v1.0.0 release
 * Last Updated: 09/22
 */

import { useRef } from 'react';

export function useSectionRefs() {
  const frontpageRef = useRef(null);
  const aboutmeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  return { frontpageRef, aboutmeRef, skillsRef, projectsRef, contactsRef };
}
