import { motion } from 'framer-motion';
import { projects } from '../../../../../_data/projects';

export default function ProjectIcon({ index }) {
  const projectList = Object.values(projects);
  const project = projectList[index];

  if (!project) return null;

  return (
     <motion.div
          key={index} 
          initial={{ opacity: 0 }}   
          animate={{ opacity: 1 }}     
          exit={{ opacity: 0 }}     
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="flex items-center justify-center z-[10] w-[55%] projects-icon-size-monitor"
        >
    
      <img
        src={project.icon}
        alt={`${project.name} icon`}
        className="object-contain size-75"
      />
 
    </motion.div>
  );
}
