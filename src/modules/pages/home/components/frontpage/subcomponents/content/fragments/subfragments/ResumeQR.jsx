import { resumeQR } from "../../../../../../../../../assets/images/images"

export default function ResumeQR() {
    return (
        <>
        <div className='flex flex-col ml-auto text-xs gap-y-1'>
            <p className="text-center">SCAN TO VIEW</p> 
            <img src={resumeQR} alt='resumeqr' className='size-21' /> 
            <p className="text-center">- RESUME -</p>  
        </div>
        </>
    )
}