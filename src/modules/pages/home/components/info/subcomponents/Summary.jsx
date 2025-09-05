import { AboutMe } from "../../../../../../assets/text/home";

export default function Summary(){
    return(
        <>
        <div className="flex flex-col w-[95%] ">
            <p className='text-xs text-justify mx-5 whitespace-pre-line'>
                {AboutMe.desc}
            </p>
        </div>
        </>
    )
}