import { useEffect, useRef } from "react";
import Frontpage from "./components/Frontpage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";



export default function Home({theme, setSection}){
    const scrollRef = useRef(null);
    
    useEffect(() => {
        const container = scrollRef.current;
        const handleScroll = () => {
        const offset = window.innerHeight / 2;
        const intro = document.getElementById('top');
        const skills = document.getElementById('skills');
        const projects = document.getElementById('projects');

        if (projects && projects.getBoundingClientRect().top < offset) {
            setSection('Projects');
        } else if (skills && skills.getBoundingClientRect().top < offset) {
            setSection('Skills');
        } else if (intro && intro.getBoundingClientRect().top < offset) {
            setSection('');
        }
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [setSection])

    return(
        
        <div ref={scrollRef} className='h-screen w-[100%] flex flex-col p-4 gap-2 overflow-y-scroll scrollbar-hidden !scroll-smooth snap-y snap-mandatory'>
            <Frontpage />
            {/* <Skills />
            <Projects /> */}
        </div>
    )
}