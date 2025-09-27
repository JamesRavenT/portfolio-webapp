/**
 * DesktopView.jsx
 * Houses the components for the Desktop View
 * Finalized for v1.0.0 release
 * Last Updated: 09/27
 */

import { motion, AnimatePresence } from 'framer-motion';
import CarouselButton from '../components/CarouselButton';
import ForteLabel from '../components/ForteLabel';
import Fortes from '../components/Fortes';
import IndexCounter from '../components/IndexCounter';
import Techstack from '../components/Techstack';

export default function DesktopView({ index, direction, setIndex, paginate }) {
  return (
    <div className="hidden lg:flex h-[100dvh] w-full overflow-hidden">
      {/** Animate on index change */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index} // ensures re-render on index change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex w-full items-center "
        >
          <ForteLabel index={index} />
          <Fortes
            index={index}
            direction={direction}
            setIndex={setIndex}
            paginate={paginate}
          />
          <Techstack index={index} />
        </motion.div>
      </AnimatePresence>

      {/** Controls */}
      <div className="flex absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-x-2">
        <CarouselButton direction="left" onClick={() => paginate(-1)} />
        <IndexCounter index={index} />
        <CarouselButton direction="right" onClick={() => paginate(1)} />
      </div>
    </div>
  );
}
