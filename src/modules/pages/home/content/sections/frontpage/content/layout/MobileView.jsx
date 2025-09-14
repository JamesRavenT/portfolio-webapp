import Profile from '../components/Profile';
import Headline from '../components/Headline';
import SocialLinks from '../components/SocialLinks';
import PageLinks from '../components/PageLinks';
import ViewMore from '../components/ViewMore';

export default function MobileView({ section }) {
  return (
    <div className="lg:hidden">
      <Profile />
      <div className="flex h-[80vh] justify-center">
        <div className="flex flex-col w-full items-center justify-center px-2.5 sm:px-5 ">
          <Headline />
          <div className="flex flex-col w-full pt-5 pl-2">
            <hr className="w-[97%] border-0.5" />
            <SocialLinks />
            <hr className="w-[97%] border-0.5 mt-4" />
            <PageLinks />
            <hr className="w-[97%] border-0.5 mt-4" />
            <ViewMore section={section} />
          </div>
        </div>
      </div>

      <div className="w-full h-[10vh]" />
    </div>
  );
}
