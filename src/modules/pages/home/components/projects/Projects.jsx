import { Square } from 'lucide-react'
import { AboutMe } from "../../../../../assets/text/home"
import WebDev from './ProjectTemplate'

export default function Projects(){
    return(
        <div id='projects' className='flex flex-col items-center h-[100vh] w-full pt-25 gap-y-3 font-electrolize'> 
            <div className='flex w-full items-center gap-x-2'> 
                <hr className='h-[10%] w-[25%] border-1' />
                <Square className='size-3'/>
                <p>
                Fortes
                </p>
            </div>
            <WebDev />
        </div>
    )
}