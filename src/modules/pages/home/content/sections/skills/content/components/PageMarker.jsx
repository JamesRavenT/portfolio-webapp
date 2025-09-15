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
      <div className="lg:hidden flex absolute top-65 gap-x-5 mt-10 items-center">
        {skillset.map((_, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={`cursor-pointer transition-all duration-300 transform ${
              i === index ? 'w-2 h-2 bg-white rotate-45' : 'w-1 h-1 bg-gray-500 rotate-0'
            }`}
          />
        ))}
      </div>

      {/* DESKTOP MARKERS */}
      <div className="hidden lg:flex flex-col absolute top-45 right-0 gap-y-30 items-center w-60 h-[100vh] bg-gradient-to-l from-black via-black/50 to-transparent">
        {skillset.map((slide, i) => {
          const Icon = slide.Icon;
          const isActive = i === index;
          const isClicked = clickedIndex === i;

          return (
            <div key={i} className="w-full flex items-center justify-center">
              <div className="relative w-25 h-25">
                {/* Background shadow (offset when idle, moves up + blinks when clicked) */}
                <motion.div
                  key={isClicked ? `shadow-active-${i}` : `shadow-idle-${i}`}
                  initial={{
                    top: '1.25rem', // offset downward
                    opacity: 0.5,
                    backgroundColor: '#ffffff33',
                  }}
                  animate={
                    isActive
                      ? {
                          top: 0,
                          opacity: [0.5, 1], // blink once
                          backgroundColor: '#ffffff',
                        }
                      : {
                          top: '1.25rem',
                          opacity: 0.5,
                          backgroundColor: '#ffffff33',
                        }
                  }
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute rotate-45 w-20 h-20 rounded-md z-10"
                />

                {/* Sliding background(from right) */}
                <motion.div
                  key={isActive ? `bg-in-${i}` : `bg-out-${i}`}
                  initial={{ x: '100%', opacity: 0 }}
                  animate={isActive ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: isActive ? 0.2 : 0,
                    ease: 'easeOut',
                  }}
                  className="absolute -translate-x-[10px] -translate-y-[28px] w-50 h-34 rounded-md z-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,1.24))',
                  }}
                />

                {/* Main clickable icon */}
                <motion.div
                  onClick={() => handleClick(i)}
                  className={`relative flex items-center justify-center p-5  border-1 cursor-pointer w-20 h-20 shadow-xl z-20 rounded-md ${
                    isActive ? 'rotate-45 scale-120' : 'rotate-45 scale-100'
                  }`}
                  animate={isActive ? { opacity: [1, 0.4, 1] } : { opacity: 1 }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                >
                  <Icon
                    className={`w-18 h-18 transition-colors duration-300 ${
                      isActive ? 'text-black rotate-315' : 'text-white rotate-315'
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
