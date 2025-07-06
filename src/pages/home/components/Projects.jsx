import { Square } from 'lucide-react'
import { AboutMe } from "../../../assets/text/home"
import WebDev from './fragments/projects/ProjectTemplate'

export default function Projects(){
    return(
        <div className='flex flex-col items-center min-h-[90vh] w-full pt-28 gap-y-2 font-electrolize'>   
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