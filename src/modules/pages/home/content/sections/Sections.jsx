import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Section({ section }) {
  const prevSection = useRef('');
  const [triggerLineAnim, setTriggerLineAnim] = useState(false);

  useEffect(() => {
    if (prevSection.current === '' && section !== '') {
      setTriggerLineAnim(false);
      setTimeout(() => setTriggerLineAnim(true), 600);
    }
    prevSection.current = section;
  }, [section]);

  const show = section !== '';

  return (
    <div className="sticky top-13 z-40 w-full h-6 font-electrolize">
      <div className="md:hidden flex h-15 items-center justify-center text-center gap-x-1">
        {/* Line */}
        <AnimatePresence>
          {show && (
            <motion.div
              key="line"
              initial={triggerLineAnim ? { x: '-100%' } : { x: '0%' }}
              animate={{ x: '0%' }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex w-[60%] h-5 mr-auto border-r-2 origin-left justify-center items-center pr-3 "
            >
              <hr className="w-[100%] border-1 mr-auto origin-top" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section text */}
        <AnimatePresence mode="wait">
          {show && (
            <motion.p
              key={section}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="text-lg w-25 mx-5.5"
            >
              {section.toUpperCase()}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex h-15 items-center justify-center align- text-center gap-x-1">
        {/* Line */}
        <AnimatePresence>
          {show && (
            <motion.div
              key="line-desktop"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex w-[60%] h-10 mr-auto origin-top border-r-2 items-center justify-center pr-5"
            >
              <hr className="w-[100%] border-1 mr-auto origin-top" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Section text */}
        <AnimatePresence mode="wait">
          {show && (
            <motion.p
              key={section}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="text-2xl w-1/4 mx-5.5 "
            >
              {section.toUpperCase()}
            </motion.p>
          )}
        </AnimatePresence>
        {/* Line */}
        <AnimatePresence>
          {show && (
            <motion.div
              key="line-desktop"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex w-[60%] h-10 ml-auto origin-top border-l-2 items-center justify-center pl-5"
            >
              <hr className="w-[100%] border-1 ml-auto origin-top" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
