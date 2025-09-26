/**
 * PageLinks.jsx
 * Navigation links for sections in the Mobile View
 * Finalized for v1.0.0 release
 * Last Updated: 09/26
 */

import { useScroll } from '../../../../../../../../_hooks/useScroll';
import { sections } from '../../../../_data/frontpage';

export default function PageLinks() {
  const { scrollToSection } = useScroll();
  const links = [
    { id: 'aboutme', label: sections.aboutme },
    { id: 'skills', label: sections.skills },
    { id: 'projects', label: sections.projects },
  ];

  return (
    <div className="flex flex-col h-auto w-[97%] mt-5 gap-y-3 md:gap-y-5 items-center">
      {links.map((link) => (
        <p
          key={link.id}
          onClick={() => scrollToSection(link.id)}
          className="text-xl md:text-2xl cursor-pointer"
        >
          {' '}
          {link.label}{' '}
        </p>
      ))}
    </div>
  );
}
