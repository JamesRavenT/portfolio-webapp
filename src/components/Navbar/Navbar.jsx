import placeholder from '../../assets/icons/placeholder.png'
import darkmode from '../../assets/icons/toggle_darkmode.png'
import DesktopMenu from './subcomponents/menu/MenuDesktop'
import MobileMenu from './subcomponents/menu/MenuMobile'
import Theme from './subcomponents/Theme'
import { Outlet } from 'react-router-dom'

export default function Navbar(){
    const logo = placeholder
    const theme = darkmode

    return(
            <div>
                <div className='h-16 w-screen sticky flex inset-0 bg-[#000000]'>
                    <nav className='flex mx-auto px-3.5 w-screen content-center border-2 gap-x-2'>
                        <div className='lg:hidden flex items-center gap-x-2'>
                            <MobileMenu />
                        </div>
                        <div className='lg:flex items-center hidden gap-x-2'>
                            <DesktopMenu />
                        </div>
                        <div className='flex ml-auto'>
                            <Theme />
                        </div>
                    </nav> 
                </div>
                <main>
                    <Outlet />
                </main>  
            </div>    
    )

}