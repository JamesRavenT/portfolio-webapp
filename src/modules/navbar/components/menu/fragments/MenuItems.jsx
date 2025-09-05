import { useScroll } from "../../../helper/context";

import { Link } from "react-router-dom"

export default function MenuItems(){
    const { scrollToSection } = useScroll() ;
    return (
        <>
            <li>
                <button onClick={() => {scrollToSection("top")}}>HOME</button>
            </li>
            <li>
                <button onClick={() => {scrollToSection("basicinfo")}}>ABOUT ME</button>
            </li>
            <li>
                <button onClick={() => scrollToSection("skills")}>SKILLS</button>
            </li>
            <li>
                <button onClick={() => scrollToSection("projects")}>PROJECTS</button>
            </li>
        </>
    )
}