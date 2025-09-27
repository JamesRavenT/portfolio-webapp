import { motion, AnimatePresence } from 'framer-motion';
import { useWindowSizeChecker } from '../../../../_hooks/useWindowSizeChecker';
import { getVariants } from '../../../../_utils/variants';
import { createDragEndHandler } from '../../../../_utils/dragHandlers';
import { skillset } from '../../../../_data/skills';
import SkillTree from './ui/SkillTree';
import PageMarker from './PageMarker';

export default function Fortes({ index, direction, setIndex, paginate }) {
  const isDesktop = useWindowSizeChecker(768);
  const variants = getVariants(isDesktop);
  const { Icon, title } = skillset[index];
  const handleDragEnd = createDragEndHandler({
    index,
    slidesLength: skillset.length,
    isDesktop,
    paginate,
  });

  return (
    <>
      {}
      <div className="lg:hidden flex flex-col mt-15 items-center justify-center w-full">
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
              onDragEnd={handleDragEnd}
              className="w-full"
            >
              <SkillTree Icon={Icon} title={title} />
            </motion.div>
          </AnimatePresence>
        </div>
        <PageMarker index={index} setIndex={setIndex} skillset={skillset} />
      </div>

      {}
      <div className="hidden lg:flex flex-col items-center justify-center w-[70%] mt-10 skills-forte-icon-monitor">
        <div className="relative flex items-center justify-center">
          <div className="flex items-center justify-center overflow-hidden ">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="flex justify-center items-center gap-x-6 w-full"
              >
                <SkillTree Icon={Icon} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
