import { Menu } from 'lucide-react';
import MenuItems from './fragments/MenuItems';


export default function DesktopMenu({ section }) {

  
  return (
    <div className="hidden lg:flex flex-grow">
      <div
        className={`flex flex-col m-5 px-5 transition-all duration-1000 ease-in-out ${
          section !== '' ? 'pt-25' : 'pt-45'
        }`}
      >
        <Menu size={50} />
        <div className="flex">
          <div className="mx-5 h-[60vh] bg-amber-50 border-1"></div>
          <div className=' h-[60vh]'>
            <ul className='flex flex-col mt-15 gap-y-17 text-xl font-electrolize [&>li]:w-30'>  
              <MenuItems />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
