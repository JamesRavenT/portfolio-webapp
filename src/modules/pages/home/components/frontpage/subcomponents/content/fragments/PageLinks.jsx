import { useScroll } from "../../../../../../../navbar/helper/context";

export default function PageLinks(){
    const { scrollToSection } = useScroll();
    return(
        <>
        <div className='flex flex-col h-auto w-[97%] mt-5 gap-y-3 items-center
                '>
                <p onClick={() => scrollToSection("basicinfo")} className='text-xl'>About Me </p>  
                <p onClick={() => scrollToSection("skills")} className='text-xl'>Skills</p>      
                <p onClick={() => scrollToSection("projects")} className='text-xl'>Projects</p>             
        </div>
        </>
    )
}