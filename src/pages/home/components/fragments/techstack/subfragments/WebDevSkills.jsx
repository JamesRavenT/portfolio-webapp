import { placeholderICO } from "../../../../../../assets/icons/icons";
import SkillName from "./skillname/SkillName";

export default function WebDevSkills() {
    const a = placeholderICO
    return(
        <>
        <div className='flex flex-col w-full gap-y-2'>
            <p className="pl-5">Tech Stack</p>
            <div className="flex w-full gap-x-2 justify-center items-center">
                <SkillName icon={a} skill='Test' />
                <SkillName icon={a} skill='Test' />
                <SkillName icon={a} skill='Test' />
                <SkillName icon={a} skill='Test' />
            </div>
                        <div className="flex w-full gap-x-2 justify-center items-center">
                <SkillName icon={a} skill='Test' />
                <SkillName icon={a} skill='Test' />
                <SkillName icon={a} skill='Test' />
                <SkillName icon={a} skill='Test' />
            </div>
                        <div className="flex w-full gap-x-2 justify-center items-center">
                <SkillName icon={a} skill='Test' />
                <SkillName icon={a} skill='Test' />
                <SkillName icon={a} skill='Test' />
                <SkillName icon={a} skill='Test' />
            </div>
            
        </div>
        </>
    )
}