import { Menu } from 'lucide-react';

import { AnimatePresence, motion } from 'framer-motion';
import { ScrollHandle } from '../ScrollHandle';
import { useMenuScrollRestrictions } from '../../_hooks/useMenuScrollRestrictions';
import { useMenuCloseIfTop } from '../../_hooks/useMenuCloseIfTop';
import Sections from '../Sections';
import { useMenuCloseIfEsc } from '../../_hooks/useMenuCloseIfEsc';

export default function MobileView({ section, isOpen, setIsOpen, toggleMenu }) {
  useMenuScrollRestrictions(isOpen);
  useMenuCloseIfTop(section, setIsOpen);
  useMenuCloseIfEsc(setIsOpen);

  return (
    <nav className="lg:hidden flex fixed top-0 left-0 w-full items-center justify-between px-4 py-3 z-50 ">
      <div className="flex mr-auto items-center gap-x-2">
        <AnimatePresence mode="wait">
          {section !== '' && (
            <motion.button
              key="menu-mobile"
              initial={{ y: '-100%', opacity: 0, rotate: 360 }}
              animate={{ y: 0, opacity: 1, rotate: isOpen ? 270 : 360 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              onClick={toggleMenu}
              className="relative z-[999] py-5 px-3 rounded rotate-270"
            >
              <Menu size="30" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="menu-mobile-panel"
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="fixed left-0 top-0 h-full w-[80%] z-[998] bg-gradient-to-r from-black via-black/75 to-black/0"
            >
              <div className="flex h-full px-10 pt-20 gap-x-5">
                <ScrollHandle section={section} />

                <ul className="pt-10 flex flex-col justify-start space-y-10 text-white">
                  <Sections section={section} closeMenu={() => setIsOpen(false)} />
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
