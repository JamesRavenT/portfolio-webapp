import {Sun, Moon} from 'lucide-react'
import { useState } from 'react'
export default function Theme() {
    const[isDark, setTheme] = useState(false)
    const toggleTheme = () => {
        setTheme(!isDark)
    }
    return(
        <>
         <button
            className='z-[999] relative'
            onClick={toggleTheme}>
                {isDark ? <Sun /> : <Moon />} 
            </button>   
        </>
    )
}