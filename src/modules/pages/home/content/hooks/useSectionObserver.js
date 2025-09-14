import { useEffect } from 'react';

export function useSectionObserver(refs, setSection) {
  useEffect(() => {
    if (!refs || refs.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (!visible) return;

        const id = visible.target.id;
        switch (id) {
          case 'frontpage':
            setSection('');
            break;
          case 'aboutme':
            setSection('About Me');
            break;
          case 'skills':
            setSection('Skills');
            break;
          case 'projects':
            setSection('Projects');
            break;
          default:
            break;
        }
      },
      { threshold: 0.5 }
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [refs, setSection]);
}
