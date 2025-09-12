import Fortes from "./fortes/Fortes";
import IndicatorDesktop from "./fortes/indicators/IndicatorDesktop";
import Techstack from "./techstack/Techstack";

export default function DesktopContent({index, direction, setIndex}){
    return(
         <div className='hidden md:flex w-full '>
            <div className='flex w-[25%]' />
             <div className='flex flex-col w-full items-center justify-center mx-10'>
                
                <Fortes index={index} direction={direction} setIndex={setIndex}/>
                
                <Techstack index={index} setIndex={setIndex}/>
                {/* <div className="absolute top-50 left-60 h-[30rem] border-r-1" /> */}
                <IndicatorDesktop index={index} direction={direction} setIndex={setIndex}/>

             </div>
             <div className='flex w-[25%] justify-center items-center'>
                
             </div>
     
        </div>
    )
}