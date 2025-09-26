// PageMarker.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PageMarker({ index, setIndex, skillset = [] }) {
  if (!skillset.length) return null;

  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (i) => {
    setIndex([i, i > index ? 1 : -1]);
    setClickedIndex(i);
  };

  return (
    <>
      {/* MOBILE MARKERS */}
      <div className="lg:hidden flex absolute top-65 gap-x-5 mt-10 items-center ">
        {skillset.map((_, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={`cursor-pointer transition-all duration-300 transform ${
              i === index
                ? 'w-2 h-2 bg-white rotate-45'
                : 'w-1 h-1 bg-gray-500 rotate-0'
            }`}
          />
        ))}
      </div>

      {/* DESKTOP MARKERS */}
      <div className="hidden lg:flex  absolute top-160 gap-x-50 items-center">
        {skillset.map((slide, i) => {
          const Icon = slide.Icon;
          const isActive = i === index;
          const isClicked = clickedIndex === i;

          return (
            <div key={i} className="w-full flex items-center justify-center">
              <div className="relative w-14 h-14">
                {/* Background shadow */}
                <motion.div
                  key={isClicked ? `shadow-active-${i}` : `shadow-idle-${i}`}
                  initial={{
                    top: '1rem', // smaller offset
                    opacity: 0.5,
                    backgroundColor: '#ffffff33',
                  }}
                  animate={
                    isActive
                      ? {
                          top: 0,
                          opacity: [0.5, 1],
                          backgroundColor: '#ffffff',
                          scale: 1.15,
                        }
                      : {
                          top: '1rem',
                          opacity: 0.5,
                          backgroundColor: '#ffffff33',
                          scale: 0.9,
                        }
                  }
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute w-14 h-14 rounded-md z-10 rotate-45"
                  style={{ transformOrigin: 'center' }}
                />

                {/* Main clickable icon */}
                <motion.div
                  onClick={() => handleClick(i)}
                  className={`relative flex items-center justify-center cursor-pointer w-14 h-14 shadow-xl z-20 rounded-md border-1 ${
                    isActive ? 'rotate-45 scale-130' : 'rotate-45 scale-90'
                  }`}
                  animate={isActive ? { opacity: [1, 0.4, 1] } : { opacity: 1 }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                >
                  <Icon
                    className={`w-8 h-8  transition-colors duration-300 ${
                      isActive
                        ? 'text-black rotate-315 p-0.5'
                        : 'text-white rotate-315 p-1'
                    }`}
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
