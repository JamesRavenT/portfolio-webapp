import Greetings from "./fragments/Greetings";
import PageLinks from "./fragments/PageLinks";
import SocialLinks from "./fragments/SocialLinks";
import GitHub from "./fragments/subfragments/GitHub";
import Gmail from "./fragments/subfragments/Gmail";
import LinkedIn from "./fragments/subfragments/LinkedIn";
import Number from "./fragments/subfragments/Number";
import ResumeQR from "./fragments/subfragments/ResumeQR";
import ViewMore from "./fragments/ViewMore";

export default function DesktopContent () {
    return(
        <>
        <div className='flex flex-col h-[70vh] w-full'>
            <Greetings />
            <hr className='w-[38.5%] border-0.5 my-4 ml-auto' /> 
            <div className="flex ml-auto">
              <div className="grid grid-cols-2 gap-x-2 mr-[-20px]">
                <div className="flex gap-x-2 items-center">
                    <LinkedIn />
                    <p className="text-xs">linkedin.com/in/jamesravent/</p>
                </div>
                <div className="flex gap-x-2 items-center">
                    <GitHub />
                    <p className="text-xs">github.com/JamesRavenT</p>
                </div>
                <div className="flex gap-x-2 items-center">
                    <Gmail />
                    <p className="text-xs">jraven.tabag@gmail.com</p>
                </div>
                <div className="flex gap-x-2 items-center">
                    <Number />
                    <p className="text-xs">{`(+63) 906 831 0261`}</p>
                </div>
                </div>
            <div className="mx-5 h-[100%] bg-white border-1"></div>
              <ResumeQR />
            </div>
        </div>
        </>
    )
}