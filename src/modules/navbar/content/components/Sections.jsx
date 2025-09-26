/**
 * useMenuCloseIfTop.js
 * Custom hook to close a menu when the at the top section of the page
 * Finalized for v1.0.0 release
 * Last Updated: 09/22
 */

import { useScroll } from '../../../../_hooks/useScroll';

export default function Sections({ section, closeMenu }) {
  const { scrollToSection } = useScroll();

  const menuItems = [
    { id: 'frontpage', label: 'HOME' },
    { id: 'aboutme', label: 'ABOUT ME' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contacts', label: '' },
  ];

  return (
    <>
      {menuItems.map((item) => {
        const isActive =
          section.toLowerCase() === item.label.toLowerCase() ||
          (item.id === 'frontpage' && section === '') ||
          item.id === 'contacts';

        return (
          <li key={item.id}>
            <button
              onClick={() => {
                scrollToSection(item.id);
                closeMenu();
              }}
              className={`
                relative transition-colors duration-300
                after:block after:h-[2px] after:bg-cyan-600 after:origin-left
                after:transition-transform after:duration-500
                hover:text-cyan-600
                ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'}
              `}
            >
              {item.label}
            </button>
          </li>
        );
      })}
    </>
  );
}
