import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MobileView from './layout/MobileView';
import DesktopView from './layout/DesktopView';

export default function Content({ section }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <MobileView
        section={section}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleMenu={toggleMenu}
      />
      <DesktopView
        section={section}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleMenu={toggleMenu}
      />
      <main className="h-[100dvh] overflow-auto snap-y snap-mandatory scroll-smooth">
        <Outlet />
      </main>
    </>
  );
}
