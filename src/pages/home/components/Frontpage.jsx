import { ChevronsDown, Diamond, ChartNoAxesGantt } from 'lucide-react'
import { Front } from "../../../assets/text/home"
import { githubICO, linkedinICO } from '../../../assets/icons/icons' 
import { links } from '../../../assets/variables/links'
export default function Frontpage(){

    const viewGithub = () => {
        window.location.href = links.github
    }
     const viewLinkedIn = () => {
        window.location.href = links.linkedin
    }
     const viewResume = () => {
        window.location.href = links.resume
    }

    return(
        <section id='top' className='flex flex-col min-h-[82vh] w-[100%] justify-center snap-start font-electrolize '>
            <p className='text-3xl pl-1 '>{Front.greeting}</p>
            <p className='text-6xl font-bold'>{Front.name}</p>
            <p className=' pl-1 font-bold'>{Front.role}</p>
            <div className='flex gap-x-2'>
                <hr className='m-auto w-[94%] border-1' />
                <Diamond />
            </div>  
            <hr className='mb-3 w-[80%] border-1' />
            <p className=' mb-3 w-[87%] text-sm text-justify font-bold'>{Front.description}</p>
            <div className='flex w-full'>
            <hr className='mt-0.5 mb-0.5 ml-auto w-[80%] border-1' />
            </div>
            <div className='flex gap-x-2'>
                <Diamond />
                <hr className='m-auto w-[94%] border-1' />
            </div>  
            <div className='flex flex-col w-full pt-4 gap-y-3 items-center justify-center'> 
                <button onClick={viewGithub} className='flex h-fit py-2.5 px-7 gap-x-2 items-center text-white text-lg bg-black font-light rounded-[5px]'>
                    <img src={githubICO} 
                         alt='github' 
                         className='size-6'/>
                    {Front.github}
                </button> 
                <button onClick={viewLinkedIn} className='flex h-fit py-2.5 px-5 gap-x-2 items-center text-white text-lg bg-[#0A66C2] font-light rounded-[5px]'>
                    <img src={linkedinICO} 
                         alt='github' 
                         className='size-6'/>
                    {Front.linkedin}
                </button>     
                <button onClick={viewResume} className='flex h-fit py-2.5 px-5 gap-x-2 items-center text-white text-lg bg-black font-light rounded-[5px]'>
                    <ChartNoAxesGantt className='size-6'/> 
                    {Front.resume}
                </button>   
            </div>

            <div className='flex flex-col mt-auto w-full items-center animate-hint'>
                <ChevronsDown />
                <p>{Front.more}</p>
            </div>

        </section>
    )
}