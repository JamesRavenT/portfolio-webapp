import { Diamond, Square } from 'lucide-react'
import Background from './subcomponents/wallpaper/Background'

import Education from './subcomponents/content/fragments/Education'
import MobileContent from './subcomponents/content/MobileContent'
import DesktopContent from './subcomponents/content/DesktopContent'

export default function BasicInfo(){
    return(
        <div id='basicinfo' className='flex flex-col items-center h-[100vh] w-full pt-25 gap-y-3 font-electrolize'> 
        <Background />
        <div className='md:hidden'>
             <MobileContent />
        </div>
        <div className='hidden md:flex'>
             <DesktopContent />
        </div>
        </div>
    ) 
}