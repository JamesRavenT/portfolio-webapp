import Carousel from '../components/Carousel';
import ProjectDetails from '../components/ProjectDetails';

export default function DesktopView({
  images,
  currentProject,
  currentIndex,
  setCurrentIndex,
}) {
  return (
    <div className="hidden md:flex flex-col items-center h-[100vh] w-full pt-25 gap-y-3 font-electrolize">
      <div className="flex h-full w-screen content-center items-center ">
        <Carousel
          images={images}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>

      <div className="flex h-[80vh] w-[35rem] translate-y-[4%] right-5 absolute ">
        <ProjectDetails project={currentProject} />
      </div>
    </div>
  );
}
