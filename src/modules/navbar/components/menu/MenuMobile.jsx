import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MenuItems from './fragments/MenuItems';

export default function MobileMenu({ theme, section }) {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className='lg:hidden flex mr-auto items-center gap-x-2'>
      <AnimatePresence>
        {section !== '' && (
          <motion.button
            key='menu-toggle'
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='relative z-[999] p-2 rounded rotate-90'
            onClick={toggleDrawer}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key='menu-panel'
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className='fixed left-0 right-0 top-16 overflow-y-auto h-full z-[998] backdrop-blur-2xl bg-black/60'
          >
            <ul className='flex flex-col min-h-[100dvh] w-screen text-center space-y-5 pt-10 text-white'>
              <MenuItems />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
