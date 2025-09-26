import { motion, AnimatePresence } from 'framer-motion';
import { useWindowSizeChecker } from '../../../../_hooks/useWindowSizeChecker';
import SkillTree from './ui/SkillTree';
import PageMarker from './PageMarker';
import { paginate as paginateUtil } from '../../../../_utils/pagination';
import { getVariants } from '../../../../_utils/variants';
import { createDragEndHandler } from '../../../../_utils/dragHandlers';
import { skillset } from '../../../../_data/skills';

export default function Fortes({ index, direction, setIndex }) {
  const isDesktop = useWindowSizeChecker(768);
  const { Icon, title, description } = skillset[index];

  const paginate = (dir) => {
    setIndex(([prevIndex]) => [
      paginateUtil(prevIndex, dir, skillset.length - 1),
      dir,
    ]);
  };

  const variants = getVariants(isDesktop);
  const handleDragEnd = createDragEndHandler({
    index,
    slidesLength: skillset.length,
    isDesktop,
    paginate,
  });

  return (
    <div className="flex flex-col h-65 lg:h-fit lg:m-5  items-center justify-center gap-y-5  w-full">
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
            <SkillTree Icon={Icon} title={title} description={description} />
          </motion.div>
        </AnimatePresence>
      </div>
      <PageMarker index={index} setIndex={setIndex} skillset={skillset} />
    </div>
  );
}
