import MenuItems from "./fragments/MenuItems"
// import { dark, light } from "../../../../assets/themes/colors"

export default function DesktopMenu({theme}){
    
    return(
        <div className={`hidden lg:flex flex-grow justify-center `}>
            <div className='flex h-16'>
                <ul className='flex items-center gap-x-5'>
                <MenuItems />
                </ul>
            </div>

        </div>
    )
}