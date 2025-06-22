import { AboutMe } from "../../../assets/text/home"

export default function Education(){
    return(
        <div className='flex flex-col p-2.5 h-auto w-[95%] gap-y-2'>
            <p className='text-3xl text-ce'>{AboutMe.cat}</p>
            <div className='h-0.2 w-[100%] justify-center items-center border-1' />
            <p className='text-2xs text-justify'>{AboutMe.txt}</p>
        </div>
    )
}