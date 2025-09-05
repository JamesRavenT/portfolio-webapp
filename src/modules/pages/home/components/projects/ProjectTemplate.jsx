import { Skills } from "../../../../../assets/text/home";


export default function ProjectTemplate(){
    return(
        <>
        <div className="flex flex-col w-full gap-y-5">
            <div className='h-30'></div>
            <div className="flex flex-col items-center gap-y-2">
                <p className='ml-auto pr-3 text-2xl'>WEB DEVELOPMENT</p>
                <hr className='h-[10%] w-[90%] border-1' />
          
                <hr className='h-[10%] w-[90%] border-1' />
                <p className="px-5 text-justify">{Skills.webdev.desc}</p>
               
            </div>
        </div>
        </>
    )
}