import { Diamond, Square } from 'lucide-react'

import Summary from './subcomponents/Summary'
import Education from './subcomponents/Education'

export default function BasicInfo(){
    return(
        <div
            id='basicinfo'
            className='flex flex-col items-center min-h-[90vh] w-full pt-28 gap-y-3 font-electrolize'
        >   
            <div className='flex w-full items-center gap-x-2'> 
                <hr className='h-[10%] w-[20%] border-1' />
                <Square className='size-3'/>
                <p>
                    Hello World
                </p>
            </div>
            <Summary />
            <div className='flex w-full items-center gap-x-2'> 
                <hr className='h-[10%] w-[20%] border-1' />
                <Square className='size-3'/>
                <p>
                    Education
                </p>
            </div>
            <Education />
        </div>
    ) 
}