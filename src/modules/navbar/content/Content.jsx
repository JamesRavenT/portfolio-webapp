/**
 * Content.jsx
 * Houses the layouts for the Mobile and Desktop View
 * Cleaned for v1.0.0 release
 * Last Updated: 09/21
 */

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MobileView from './layout/MobileView';
import DesktopView from './layout/DesktopView';

export default function Content({ section }) {
  // State and handler for controlling the menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <MobileView section={section} isOpen={isOpen} setIsOpen={setIsOpen} toggleMenu={toggleMenu} />
      <DesktopView
        section={section}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleMenu={toggleMenu}
      />
      <main className="min-h-screen overflow-auto snap-y snap-mandatory scroll-smooth">
        <Outlet />
      </main>
    </>
  );
}
