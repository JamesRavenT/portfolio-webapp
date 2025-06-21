import MenuItems from "./fragments/MenuItems";

export default function DesktopMenu(){
    return(
        <div>
            <div className='flex h-16'>
                <ul className='flex items-center gap-x-5'>
                <MenuItems />
                </ul>
            </div>

        </div>
    )
}