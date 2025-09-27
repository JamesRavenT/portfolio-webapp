import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CarouselButton({ direction, onClick }) {
  const isLeft = direction === 'left';

  return (
    <motion.button
      onClick={onClick}
      aria-label={isLeft ? 'Previous' : 'Next'}
      whileTap={{ scale: 0.85 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      {isLeft ? (
        <ChevronLeft className="size-20 stroke-1 hover:scale-110 transition-transform duration-500" />
      ) : (
        <ChevronRight className="size-20 stroke-1 hover:scale-110 transition-transform duration-500" />
      )}
    </motion.button>
  );
}
