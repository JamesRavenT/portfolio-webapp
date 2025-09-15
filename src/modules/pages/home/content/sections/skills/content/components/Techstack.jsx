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
          <hr className="hidden md:flex w-[95%] border-0.5 md:m-3" />
          <div className="flex flex-col self-start w-67 mb-3">
            <p className="self-start pl-5 md:text-2xl text-gray-300">Related Tech Stacks</p>
            <div className="hidden md:flex items-center justify-center gap-x-2 pl-5">
              <hr className="w-[100%] border-0.5" />
              <div className="h-3 w-3 bg-white rotate-45" />
            </div>
          </div>

          {/* Render skill icons */}
          <div className="grid grid-cols-3 gap-x-3 gap-y-4 place-items-center w-full">
            {currentSlide.skills.map(({ Icon, label }, i) => (
              <SkillIcon key={i} Icon={Icon} label={label} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
