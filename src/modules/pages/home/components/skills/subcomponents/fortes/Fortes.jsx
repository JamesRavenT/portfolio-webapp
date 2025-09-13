// src/components/Fortes.js
import { motion, AnimatePresence } from 'framer-motion';
import useIsDesktop from '../../../../../../../hooks/GetWindowSize';

import SkillTree from './skilltree/SkillTree';
import IndicatorMobile from './indicators/IndicatorMobile';
import WebDevIco from '../_icons/WebDevIco';
import AndDevIco from '../_icons/AndDevIco';
import SoftDevIco from '../_icons/SoftDevIco';

const slides = [
  {
    Icon: WebDevIco,
    title: 'Web Development',
    description: 'Building modern, responsive, and scalable web apps.',
  },
  {
    Icon: AndDevIco,
    title: 'Android Development',
    description: 'Creating native and cross-platform mobile applications.',
  },
  {
    Icon: SoftDevIco,
    title: 'Software Development',
    description: 'Designing and engineering software solutions.',
  },
]; // now using data instead of hard-coded components

export default function Fortes({ index, direction, setIndex }) {
  const isDesktop = useIsDesktop(768);

  const paginate = (dir) => {
    setIndex(([prevIndex]) => {
      let newIndex = prevIndex + dir;
      if (newIndex < 0) newIndex = 0;
      if (newIndex >= slides.length) newIndex = slides.length - 1;
      return [newIndex, dir];
    });
  };

  const variants = {
    enter: (dir) => (isDesktop ? { y: 0, opacity: 0 } : { x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, y: 0, opacity: 1 },
    exit: (dir) => (isDesktop ? { y: 0, opacity: 0 } : { x: dir > 0 ? -100 : 100, opacity: 0 }),
  };

  const CurrentSlide = slides[index];

  return (
    <div className="flex flex-col h-65 md:h-35 md:mt-20 items-center justify-center gap-y-5 pt-5 w-full">
      <div className="relative flex justify-center items-center w-full overflow-hidden">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            drag={isDesktop ? false : 'x'}
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            onDragEnd={(e, { offset }) => {
              if (!isDesktop) {
                if (offset.x > 100 && index > 0) paginate(-1);
                else if (offset.x < -100 && index < slides.length - 1) paginate(1);
              } else {
                if (offset.y > 100 && index > 0) paginate(-1);
                else if (offset.y < -100 && index < slides.length - 1) paginate(1);
              }
            }}
            className="w-full"
          >
            <SkillTree
              Icon={CurrentSlide.Icon}
              title={CurrentSlide.title}
              description={CurrentSlide.description}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <IndicatorMobile index={index} slides={slides} setIndex={setIndex} />
    </div>
  );
}
