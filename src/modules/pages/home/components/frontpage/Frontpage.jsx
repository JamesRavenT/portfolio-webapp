// import ViewMore from './subcomponents/frontpage/ViewMore';
import Background from './subcomponents/wallpaper/Background';
import Headline from './subcomponents/headline/Headline';
import TopBar from './subcomponents/topbar/TopBar';
import MobileContent from './subcomponents/content/MobileContent';
import DesktopContent from './subcomponents/content/DesktopContent';
// import FrontPageTOC from './subcomponents/frontpage/FrontPageTOC';
// import Resume from './subcomponents/frontpage/Resume';

export default function Frontpage() {
  return (
    <div id="top" className="flex flex-col min-h-[100vh] w-full text-white font-electrolize">
      <Background />

      {/* Mobile View */}
      <div className="md:hidden">
        <TopBar />
        <div className="flex flex-col items-center justify-center pt-7 px-2.5 sm:px-5 ">
          <Headline />
          <MobileContent />
        </div>
      </div>

      {/* Desktop View */}
      <div className="md:flex md:flex-col hidden">
        <div className="flex flex-col p-10">
          <Headline />
          <DesktopContent />
        </div>
      </div>
    </div>
  );
}
