import { useEffect } from 'react';

export function useSmoothScrollSnap(containerRef, refs) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !refs || refs.length === 0) return;

    let isScrolling = false;

    const onWheel = (e) => {
      if (isScrolling) return;
      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;
      const sections = refs.map((ref) => ref.current);
      const sectionHeight = window.innerHeight;

      const currentIndex =
        direction > 0
          ? Math.floor(container.scrollTop / sectionHeight)
          : Math.ceil(container.scrollTop / sectionHeight);

      const nextIndex = Math.min(sections.length - 1, Math.max(0, currentIndex + direction));

      if (sections[nextIndex]) {
        isScrolling = true;
        sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => (isScrolling = false), 750);
      }
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, [containerRef, refs]);
}
