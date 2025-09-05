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
    <div className='flex mr-auto items-center gap-x-2 md:hidden'>
      <AnimatePresence mode='wait'>
        {section !== '' && (
          <motion.button
            key='menu-toggle'
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='relative z-[999] py-5 px-3 rounded rotate-90'
            onClick={toggleDrawer}
          >
            {isOpen ? <X /> : <Menu size='30'/>}
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence mode='wait'>
        {isOpen && (
          <motion.div
            key='menu-panel'
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
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
