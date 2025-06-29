import { GraduationCap } from "lucide-react";
import { AboutMe } from "../../../../../assets/text/home";

export default function Education() {
    return (
        <>
         <div className="flex flex-col w-[95%] gap-y-5">
            <div className="flex w-full items-center border-1">
            <GraduationCap className="size-15 ml-3 stroke-1"/>
            <div className="w-px h-12 bg-black mx-4" />
            <div className="flex flex-col w-full">
                <p className="text-xl">{AboutMe.educ.college.year}</p>
                <p className="text-base">{AboutMe.educ.college.degree}</p>
                <p className="text-xs">{AboutMe.educ.college.school}</p>
            </div>
           </div>
           <div className="flex w-full items-center border-1">
            <GraduationCap className="size-15 ml-3 stroke-1"/>
            <div className="w-px h-12 bg-black mx-4" />
            <div className="flex flex-col w-full">
                <p className="text-xl">{AboutMe.educ.shs.year}</p>
                <p className="text-base">{AboutMe.educ.shs.strand}</p>
                <p className="text-xs">{AboutMe.educ.shs.school}</p>
            </div>
           </div>
           
        </div>
        </>
    )
}