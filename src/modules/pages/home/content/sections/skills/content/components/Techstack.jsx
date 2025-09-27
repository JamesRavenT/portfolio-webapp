/**
 * Techstack.jsx
 * Component that houses the technologies used within a Forte.
 * Finalized for v1.0.0 release
 * Last Updated: 09/27
 */

import { motion, AnimatePresence } from 'framer-motion';
import { labels, skillset } from '../../../../_data/skills';
import SkillIcon from './ui/SkillIcon';
import { ICO_Tech } from '../../../../icons/ICO_Tech';

export default function Techstack({ index }) {
  const currentSlide = skillset[index];

  const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05, // delay between each category
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, x: 700 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.1, ease: 'easeOut' },
  },
};

  return (
    <>
      {/** MOBILE VIEW */}
      <div className="lg:hidden flex flex-col relative justify-center items-center w-full gap-y-5 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`ts-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="flex flex-col w-full justify-center items-center"
          >
            <div className="hidden lg:flex items-center gap-x-2 w-full m-1">
              <hr className="flex-grow border-0.5 ml-12" />
              <div className="h-5 w-5 bg-white rotate-45 flex-shrink-0" />
              <hr className="flex-grow border-0.5 mr-12" />
            </div>
            <div className="flex flex-col self-start w-60 mb-3 gap-y-1">
              <p className="self-start pl-7 lg:hidden text-gray-300">
                {labels.techstack}
              </p>
            </div>
            {/** RENDER SKILL ICONS */}
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-3 lg:gap-x-2 gap-y-4 lg:gap-y-7 place-items-center w-full">
              {currentSlide.skills.map(({ Icon, label }, i) => (
                <SkillIcon key={i} Icon={Icon} label={label} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/** DESKTOP VIEW */}
      <div className="hidden lg:flex flex-col w-full h-full mt-45 gap-y-2 scale-95 skills-techstacks-monitor">
        {/** TECHNOLOGY STACK LABEL */}
        <div className="flex py-2 items-center bg-gradient-to-r from-cyan-800 via-cyan-800/40 to-transparent rounded-md">
          <ICO_Tech className="size-8 ml-3 mr-1 rotate-45" />
          <p className="text-3xl">{labels.techstack}</p>
        </div>

        {/** TECHNOLOGY STACK CATEGORIES */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={currentSlide.title} // re-triggers on index change
          className="flex flex-col gap-y-2"
        >
          {currentSlide.skillscat?.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={categoryVariants}
              className="group flex flex-col gap-y-2 p-2 rounded-md bg-black/70 hover:bg-gray-700/50 hover:scale-105 transition-transform duration-500"
            >
              <div className="flex items-center gap-x-2">
                <div className="h-2 w-2 rotate-45 bg-white" />
                <p className="text-2xl">{category.label}</p>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-white/100 to-transparent" />
              <div className="flex flex-wrap gap-10">
                {category.items.map(({ Icon, label }, itemIndex) => (
                  <SkillIcon key={itemIndex} Icon={Icon} label={label} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
    </div>
    </>
  );
}
