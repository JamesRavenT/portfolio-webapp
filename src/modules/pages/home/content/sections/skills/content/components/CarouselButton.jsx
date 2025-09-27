/**
 * CarouselButton.jsx
 * Switch to change index of the carousel. for Desktop View Only.
 * Finalized for v1.0.0 release
 * Last Updated: 09/27
 */

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CarouselButton({ direction, onClick }) {
  const isLeft = direction === 'left';

  return (
    <motion.button
      onClick={onClick}
      aria-label={isLeft ? 'Previous' : 'Next'}
      whileTap={{ scale: 0.85 }} // scales down when clicked
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
