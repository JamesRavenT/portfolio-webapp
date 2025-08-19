import { motion, AnimatePresence } from 'framer-motion';
import { Diamond } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';


export default function Category({ section }) {
  const prevSection = useRef('');
  const [hasLineAnimated, setHasLineAnimated] = useState(false);

  useEffect(() => {
    if (prevSection.current === '' && section !== '') {
      setHasLineAnimated(true);
    }
    prevSection.current = section;
  }, [section]);

  const show = section !== '';

  return (
    <div className='sticky top-16 z-40 w-full h-6 font-electrolize'>
      <AnimatePresence mode='wait'>
        {show && (
          <motion.div
            key='container'
            initial={!hasLineAnimated ? { scaleX: 0, opacity: 0 } : false}
            animate={{ x: '0%', opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='flex h-15 items-center justify-center text-center gap-x-1'
          >
            <hr className='mr-auto w-[60%] border-1 origin-left ' />
       
              <motion.p
                key={section}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='text-lg w-25 mx-5.5'
              >
                {section.toUpperCase()}
              </motion.p>
          
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
