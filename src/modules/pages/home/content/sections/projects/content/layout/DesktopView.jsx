import Carousel from '../components/Carousel';
import CarouselControls from '../components/elements/CarouselControl';
import ProjectBanner from '../components/ProjectBanner';
import ProjectDetails from '../components/ProjectDetails';
import ProjectIcon from '../components/ui/ProjectIcon';

export default function DesktopView({
  images,
  currentProject,
  currentIndex,
  direction,
  next,
  prev,
  goTo,
}) {
  return (
    <div className="hidden lg:flex flex-col items-center h-[100vh] w-full gap-y-3 font-electrolize">
      <div className="flex absolute h-full w-screen content-center items-center z[-99]">
        <Carousel
          images={images}
          currentIndex={currentIndex}
          direction={direction}
          next={next}
          prev={prev}
          goTo={goTo}
        />
      </div>
      <div className="flex h-full w-full">
        <ProjectDetails
          project={currentProject}
          currentIndex={currentIndex}
          images={images}
          goTo={goTo}
          next={next}
          prev={prev}
        />
        <ProjectIcon index={currentIndex} />
        <ProjectBanner project={currentProject} index={currentIndex} />
      </div>
    </div>
  );
}
