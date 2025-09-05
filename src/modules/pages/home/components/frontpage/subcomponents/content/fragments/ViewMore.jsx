import { ChevronsDown, Diamond, ChartNoAxesGantt } from 'lucide-react'

export default function ViewMore() {
    return(
        <>
        <div className='w-full min-h-[20vh] z-[-1]'>
            <div className='flex flex-col w-full items-center animate-hint pt-8 *:mb-2'>
            <ChevronsDown />
            </div>
        </div>
        </>
    )
}