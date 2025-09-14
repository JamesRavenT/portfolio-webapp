import Greetings from '../components/Greetings';
import Headline from '../components/Headline';
import SocialLinks from '../components/SocialLinks';
import ViewMore from '../components/ViewMore';

export default function DesktopView({ section }) {
  console.log(section);
  return (
    <div className="lg:flex lg:flex-col hidden">
      <div className="flex flex-col p-10">
        <Headline />
        <div className="flex flex-col h-[36vh] w-full"></div>
        <div className="flex flex-col h-[30vh] w-full">
          <Greetings />
          <hr className="w-[42%] border-0.5 my-4 ml-auto" />
          <div className="flex ml-auto">
            <SocialLinks />
          </div>
        </div>
      </div>
      <ViewMore section={section} />
    </div>
  );
}
