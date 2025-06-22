import { useState } from "react"
import { Link } from "react-router-dom"

export default function SplashScreen({onDone}){

    const [isClicked, setState] = useState(false)
    const handleClick = () => {
        setState(true)
        setTimeout(() => {
        onDone() // tell App to show the rest
        }, 300) // give a little time for fade animation (optional)
    }

    return(
        <div style={{display: (isClicked) ? 'none' : 'block' }} className=' flex h-screen w-screen justify-center items-center z-[999]'>
            <Link to ='/home'>
            <button className='center' onClick={handleClick}> AAAA </button>
            </Link>
        </div>
    )
}

