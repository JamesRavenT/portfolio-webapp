import { motion, AnimatePresence } from 'framer-motion';
import { label } from '../../../../_data/projects';
import CarouselControls from './elements/CarouselControl';
import LastChanges from './elements/LastChanges';
import ProjectHeader from './elements/ProjectHeader';
import ProjectStatus from './elements/ProjectStatus';
import Technologies from './elements/Technologies';
import ProjectDescription from './ProjectDescription';
import Divider from './ui/Divider';

export default function ProjectDetails({
  project,
  currentIndex,
  images,
  goTo,
  next,
  prev,
}) {
  if (!project) return null;

  return (
    <>
      {}
      <div className="lg:hidden relative flex flex-col h-full w-full px-5 z-20 pt-36 bg-gradient-to-t from-black via-black/99 to-transparent gap-y-2">
        <ProjectHeader project={project} />
        <div className="grid grid-cols-2 gap-x-4 mt-1">
          <ProjectStatus project={project} />
          <LastChanges project={project} />
        </div>
        <Technologies project={project} />
        <Divider />
        <ProjectDescription project={project} label={label} />
      </div>

      {}
      <div className="hidden lg:flex flex-col mt-45 w-full z-[99] gap-y-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="ml-auto w-90 border-l-12 ">
              <div className="flex flex-col ml-1 pl-2 border-l-5 ">
                <ProjectDescription project={project} label={label} />
              </div>
            </div>
            <hr className="w-90 border-0.5 mt-3 ml-auto" />
            <div className="grid grid-cols-2 w-90 ml-auto ">
              <ProjectStatus project={project} />
              <LastChanges project={project} />
            </div>
            <hr className="w-90 border-0.5 mt-2 ml-auto" />
            <div className="ml-auto w-90">
              <Technologies project={project} />
            </div>
          </motion.div>
        </AnimatePresence>
        <CarouselControls
          currentIndex={currentIndex}
          total={images?.length || 0}
          onSelect={goTo}
          next={next}
          prev={prev}
        />
      </div>
    </>
  );
}
