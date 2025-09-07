import { Menu } from 'lucide-react';
import MenuItems from './fragments/MenuItems';


export default function DesktopMenu({ section }) {

const indicatorPositions = {
  "" : "translate-y-10 2xl:translate-y-14",
  "About Me": "translate-y-32 2xl:translate-y-38",
  "Skills": "translate-y-57 2xl:translate-y-62",
  "Projects": "translate-y-80 2xl:translate-y-86",
};

  
  return (
    <div className="hidden lg:flex flex-grow">
      <div
        className={`flex flex-col m-5 px-5 transition-all duration-1000 ease-in-out ${
          section !== '' ? 'lg:pt-25 xl:pt-35' : 'pt-50'
        }`}
      >
        <Menu size={50} />
        <div className="flex">
          <div className="mx-5 h-[60vh] w-0.5 bg-amber-50 relative">
            <div
              className={`absolute left-0 w-2.5 bg-cyan-600 transition-transform duration-500 -translate-x-1 ${
                indicatorPositions[section] || ""
              }`}
              style={{ height: "3rem" }} // same height as li
            />
          </div>

          <div className=' h-[60vh]'>
            <ul className='flex flex-col 2xl:mt-15 md:mt-10 gap-y-17 text-xl font-electrolize [&>li]:w-30'>  
              <MenuItems section={section}/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
