import { motion, AnimatePresence } from 'framer-motion';
import { skillset } from '../../../../_data/skills';
import SkillIcon from './ui/SkillIcon';

export default function Techstack({ index }) {
  const currentSlide = skillset[index];
  return (
    <div className="relative flex flex-col justify-center items-center w-full gap-y-5 overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`ts-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="flex flex-col w-full justify-center items-center"
        >
          <div className="hidden lg:flex items-center gap-x-2  w-full m-1">
            <hr className="flex-grow border-0.5 ml-12" />
            <div className="h-5 w-5 bg-white rotate-45 flex-shrink-0" />
            <hr className="flex-grow border-0.5 mr-12" />
          </div>
          <div className="flex flex-col self-start w-60 mb-3 gap-y-1">
            <p className="self-start pl-7 lg:hidden text-gray-300">
              Related Tech Stacks
            </p>
          </div>

          {/* Render skill icons */}
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-3 lg:gap-x-2 gap-y-4 lg:gap-y-7 place-items-center w-full">
            {currentSlide.skills.map(({ Icon, label }, i) => (
              <SkillIcon key={i} Icon={Icon} label={label} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
