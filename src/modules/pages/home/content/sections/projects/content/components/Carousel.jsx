import { motion, AnimatePresence } from 'framer-motion';
import CarouselFloatingBtn from './elements/CarouselButton';
import CarouselControls from './elements/CarouselControl';
import { useRef, useState } from 'react';

export default function Carousel({
  images,
  height,
  currentIndex,
  setCurrentIndex,
}) {
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev

  const next = () => {
    if (currentIndex < images.length - 1) {
      setDirection(-1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setDirection(1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={`relative w-full ${height || 'h-full'} overflow-hidden`}>
      {/* wrapper to hold absolute images */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`slide-${currentIndex}`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ x: direction * 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>

      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/90 to-transparent" />

      {/* Floating buttons */}
      <CarouselFloatingBtn
        direction="prev"
        onClick={prev}
        active={currentIndex > 0} // active only if there is a previous slide
      />

      <CarouselFloatingBtn
        direction="next"
        onClick={next}
        active={currentIndex < images.length - 1} // active only if there is a next slide
      />

      {/* Controls */}
      <CarouselControls
        currentIndex={currentIndex}
        total={images.length}
        onSelect={(index) => {
          setDirection(index > currentIndex ? 1 : -1);
          setCurrentIndex(index);
        }}
      />
    </div>
  );
}
