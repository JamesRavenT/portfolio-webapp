import { motion } from 'framer-motion';
import { useState } from 'react';
import DesktopView from './layout/DesktopView';
import MobileView from './layout/MobileView';
import { projects } from '../../../_data/projects';

export default function Content() {
  const [[currentIndex, direction], setState] = useState([0, 0]);

  const projectList = Object.values(projects);
  const currentProject = projectList[currentIndex];
  const imagesDesktop = projectList.map((p) => p.imagePC);
  const imagesMobile = projectList.map((p) => p.imageMB);

  const next = () => {
    if (currentIndex < projectList.length - 1) {
      setState([currentIndex + 1, 1]);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setState([currentIndex - 1, -1]);
    }
  };

  const goTo = (index) => {
    if (index >= 0 && index < projectList.length) {
      setState([index, index > currentIndex ? 1 : -1]);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <DesktopView
          images={imagesDesktop}
          currentProject={currentProject}
          currentIndex={currentIndex}
          direction={direction}
          next={next}
          prev={prev}
          goTo={goTo}
        />
        <MobileView
          images={imagesMobile}
          currentProject={currentProject}
          currentIndex={currentIndex}
          direction={direction}
          next={next}
          prev={prev}
          goTo={goTo}
        />
      </motion.div>
    </>
  );
}
