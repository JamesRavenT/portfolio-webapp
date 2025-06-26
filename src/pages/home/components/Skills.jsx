import { AboutMe } from "../../../assets/text/home"

export default function Skills(){
    return(
         <div className='flex flex-col p-2.5 w-[95%] gap-y-2 h-full'>
            <p className='text-3xl text-ce'>{AboutMe.cat}</p>
            <div className='h-0.5 w-full justify-center items-center border-1' />
            <p className='text-2xs text-justify'>{AboutMe.txt}</p>
        </div>
    )
}