import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MenuItems from './fragments/MenuItems';

export default function MobileMenu({ theme, section }) {
  const [isOpen, setIsOpen] = useState(false);
  const indicatorPositions = {
  "" : "translate-y-10 2xl:translate-y-14",
  "About Me": "translate-y-26",
  "Skills": "translate-y-43",
  "Projects": "translate-y-59",
};

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Close drawer if we return to top
  useEffect(() => {
    if (section === '') setIsOpen(false);
  }, [section]);

  return (
    <div className='flex mr-auto items-center gap-x-2 md:hidden'>
      <AnimatePresence mode='wait'>
        {section !== '' && (
          <motion.button
            key='menu-toggle'
            initial={{ y: '-100%', opacity: 0, rotate: 360 }}
            animate={{ y: 0, opacity: 1, rotate: isOpen ? 270 :360 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={toggleDrawer}
            className='relative z-[999] py-5 px-3 rounded rotate-270'
          >
            <Menu size='30' />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence mode='wait'>
        {isOpen && (
         <motion.div
            key="menu-panel"
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed left-0 top-0 h-full w-[80%] z-[998] bg-gradient-to-r from-black via-black/75 to-black/0"
          >
            <div className="flex h-full px-10 pt-20 gap-x-5">
              {/* Vertical bar */}
              <div className="w-0.25 bg-amber-50 h-[50vh] self-start">
                
                <div
                  className={`absolute left-0 mx-10 w-2 bg-cyan-600 transition-transform duration-500 -translate-x-1 ${
                    indicatorPositions[section] || ""
                  }`}
                  style={{ height: "2rem" }} // same height as li
                />
            
              </div>

              {/* Menu items */}
              <ul className="pt-10 flex flex-col justify-start space-y-10 text-white">
                <MenuItems section={section} closeMenu={() => setIsOpen(false)} />
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
