import { useState } from "react";
import Fortes from './subcomponents/fortes/Fortes'
import Techstack from './subcomponents/techstack/Techstack'
import Background from './subcomponents/wallpaper/Background'
import MobileContent from "./subcomponents/MobileContent";
import DesktopContent from "./subcomponents/DesktopContent";
export default function Skills(){
    const [[index, direction], setIndex] = useState([0, 0]); // store index + direction

 

    return(
        <div id='skills' className='flex flex-col items-center h-[100vh] w-full pt-25 gap-y-3 font-electrolize'> 
        <Background />
        <MobileContent index={index} direction={direction} setIndex={setIndex}/>
        <DesktopContent index={index} direction={direction} setIndex={setIndex}/>
        </div>
    )
}