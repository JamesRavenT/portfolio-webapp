import { useState } from 'react';
import DesktopView from './layout/DesktopView';
import MobileView from './layout/MobileView';
import { projects } from '../../../_data/projects';

export default function Content() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectList = Object.values(projects); // turn object into array
  const currentProject = projectList[currentIndex];

  // Separate images for desktop and mobile
  const imagesDesktop = projectList.map((p) => p.imagePC);
  const imagesMobile = projectList.map((p) => p.imageMB);

  return (
    <>
      <DesktopView
        images={imagesDesktop}
        currentProject={currentProject}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <MobileView
        images={imagesMobile}
        currentProject={currentProject}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}
