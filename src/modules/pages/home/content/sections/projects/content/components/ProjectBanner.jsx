import { motion, AnimatePresence } from 'framer-motion';
import ProjectHeader from './elements/ProjectHeader';

export default function ProjectBanner({ project, index }) {
  return (
    <div className="flex flex-col z-[99] mt-auto mb-auto w-full gap-y-2 projects-banner-size-monitor">
      <AnimatePresence mode="wait">
        <motion.div
          key={index} 
          initial={{ x: 100, opacity: 0 }}   
          animate={{ x: 0, opacity: 1 }}     
          exit={{ x: 100, opacity: 0 }}     
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="w-128"
        >
          <ProjectHeader project={project} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
