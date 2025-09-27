import { Menu } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useMenuScrollRestrictions } from '../_hooks/useMenuScrollRestrictions';
import { useMenuCloseIfTop } from '../_hooks/useMenuCloseIfTop';
import { useMenuCloseIfEsc } from '../_hooks/useMenuCloseIfEsc';
import { ScrollHandle } from '../components/ScrollHandle';
import Sections from '../components/Sections';

export default function MobileView({ section, isOpen, setIsOpen, toggleMenu }) {
  useMenuScrollRestrictions(isOpen);
  useMenuCloseIfTop(section, setIsOpen);
  useMenuCloseIfEsc(setIsOpen);

  return (
    <nav className="lg:hidden fixed top-0 left-0 w-full flex items-center justify-between px-4 py-3 z-50">
      <div className="flex items-center gap-x-2 mr-auto">
        {}
        <AnimatePresence mode="wait">
          {section && section !== 'contacts' && (
            <motion.button
              key="menu-mobile"
              onClick={toggleMenu}
              initial={{ y: '-100%', opacity: 0, rotate: 360 }}
              animate={{ y: 0, opacity: 1, rotate: isOpen ? 270 : 360 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="relative z-[999] px-3 py-5 rounded rotate-270"
            >
              <Menu size={30} />
            </motion.button>
          )}
        </AnimatePresence>

        {}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="menu-mobile-panel"
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="fixed top-0 left-0 h-full w-[80%] bg-gradient-to-r from-black via-black/75 to-black/0 z-[998]"
            >
              <div className="flex h-full px-10 pt-20 gap-x-5">
                <ScrollHandle section={section} />
                <ul className="flex flex-col pt-10 space-y-10 text-white">
                  <Sections
                    section={section}
                    closeMenu={() => setIsOpen(false)}
                  />
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
