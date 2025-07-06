import { useState } from "react";
import { Square } from 'lucide-react'
import { AboutMe } from "../../../assets/text/home"

import CarouselSkills from './fragments/skills/CarouselSkills'


export default function Skills(){
 
    const [currentIndex, setCurrentIndex] = useState(0);
    return(
        <div className='flex flex-col items-center min-h-[90vh] w-full pt-28 gap-y-2 font-electrolize'>   
            <div className='flex w-full items-center gap-x-2'> 
                <hr className='h-[10%] w-[25%] border-1' />
                <Square className='size-3'/>
                <p>
                    Fortes
                </p>
            </div>
            <CarouselSkills currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
        </div>
    )
}