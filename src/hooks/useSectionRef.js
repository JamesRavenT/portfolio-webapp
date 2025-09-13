import { useRef } from 'react';

export function useSectionRefs() {
  const topRef = useRef(null);
  const basicInfoRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  return { topRef, basicInfoRef, skillsRef, projectsRef };
}
