import Carousel from '../components/Carousel';
import ProjectDetails from '../components/ProjectDetails';

export default function MobileView({
  images,
  currentProject,
  currentIndex,
  direction,
  next,
  prev,
  goTo,
}) {
  return (
    <div className="md:hidden relative flex flex-col items-center h-[100vh] w-full pt-25 gap-y-3 font-electrolize">
      {}
      <div className="absolute top-10 left-0 w-full ">
        <Carousel
          images={images}
          height="h-[40vh]"
          currentIndex={currentIndex}
          direction={direction}
          next={next}
          prev={prev}
          goTo={goTo}
        />
      </div>

      <div className="relative w-full h-[70vh]">
        <ProjectDetails project={currentProject} />
      </div>
    </div>
  );
}
