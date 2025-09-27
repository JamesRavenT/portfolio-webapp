import { motion, AnimatePresence } from 'framer-motion';
import CarouselFloatingBtn from './elements/CarouselButton';
import CarouselControls from './elements/CarouselControl';

export default function Carousel({ images, height, currentIndex, next, prev }) {
  return (
    <div className={`relative w-full ${height || 'h-full'} overflow-hidden`}>
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`slide-${currentIndex}`}
            className="absolute top-0 left-0 w-full h-full object-cover lg:brightness-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/90 to-transparent" />
      <CarouselFloatingBtn
        direction="prev"
        onClick={prev}
        active={currentIndex > 0}
      />
      <CarouselFloatingBtn
        direction="next"
        onClick={next}
        active={currentIndex < images.length - 1}
      />
    </div>
  );
}
