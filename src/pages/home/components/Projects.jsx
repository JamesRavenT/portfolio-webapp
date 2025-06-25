import { AboutMe } from "../../../assets/text/home"

export default function Projects(){
    return(
        <section id='projects' className='flex flex-col p-2.5 min-h-screen w-[95%] gap-y-2 snap-start'>
            <p className='text-3xl text-ce'>{AboutMe.cat}</p>

        </section>
    )
}