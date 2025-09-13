import Background from './subcomponents/wallpaper/Background';
import MobileContent from './subcomponents/MobileContent';
import DesktopContent from './subcomponents/DesktopContent';

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center h-[100vh] w-full gap-y-3 font-electrolize"
    >
      <Background />
      <MobileContent />
      <DesktopContent />
    </div>
  );
}
