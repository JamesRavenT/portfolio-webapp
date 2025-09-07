import { ChevronsDown, Diamond, ChartNoAxesGantt } from 'lucide-react'
import { useScroll } from '../../../../../../../navbar/helper/context'

export default function ViewMore() {
    const { scrollToSection } = useScroll();
    return(
        <>
        <div className='w-full min-h-[20vh]'>
            <div className='flex flex-col w-full items-center animate-hint pt-8 *:mb-2'>
                <button onClick={() => scrollToSection("basicinfo")} >
                    <ChevronsDown />
                </button>
            
            </div>
        </div>
        </>
    )
}