import {Sun, Moon} from 'lucide-react'

export default function Theme({theme, toggle}) {

    return(
        <div className='flex ml-auto lg:w-10 items-center'>
            <button
                className='flex z-[999] relative'
                onClick={toggle}>
                {theme == 'Dark' ? <Moon /> : <Sun />} 
            </button>   
        </div>
    )
}