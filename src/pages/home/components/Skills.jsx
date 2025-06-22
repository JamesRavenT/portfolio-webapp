import { AboutMe } from "../../../assets/text/home"

export default function Skills(){
    return(
        <section id='skills' className='flex flex-col p-2.5 min-h-screen w-[95%] gap-y-2 snap-start'>
            <p className='text-3xl text-ce'>{AboutMe.cat}</p>
            <div className='h-0.2 w-[100%] justify-center items-center border-1' />
            <p className='text-2xs text-justify'>{AboutMe.txt}</p>
            <p className='text-2xs text-justify'>{AboutMe.txt}</p>
        </section>
    )
}