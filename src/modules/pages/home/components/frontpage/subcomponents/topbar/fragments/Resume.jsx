import { links } from '../../../../../../../../assets/variables/links'
import { IdCard } from "lucide-react";

export default function Resume() {

    const viewResume = () => (window.location.href = links.resume);
    return(
        <>
        <div className='flex h-[9vh] w-full mt-2 py-2 px-4 items-center'>
            <div className='ml-auto'>
                <button onClick={viewResume} className='flex flex-col justify-center items-center' > 
                    <IdCard size='50' strokeWidth={1}/>
                    <p className='text-xs'>Resume</p>
                </button>
            </div>
        </div>
        </>
    )
}   