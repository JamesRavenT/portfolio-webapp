import {Sparkle, Moon} from 'lucide-react'

export default function Theme({theme, toggle}) {

    return(
        <div className='flex mr-2 items-center'>
            <button
                className='flex z-[999] relative'
                onClick={toggle}>
                {theme == 'Dark' ? <Moon /> : <Sparkle />} 
            </button>   
        </div>
    )
}