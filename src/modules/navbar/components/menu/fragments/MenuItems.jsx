import { Link } from "react-router-dom"

export default function MenuItems(){
    return (
        <>
            <li>
                <Link to ='/home'>
                <button>Home</button>
                </Link>
            </li>
            <li>
                <Link to ='/home'>
                <button>Skills</button>
                </Link>
            </li>
            <li>
                <Link to ='/projects'>
                <button>Projects</button>
                </Link>
            </li>
        </>
    )
}