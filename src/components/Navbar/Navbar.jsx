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
                    <nav className='flex mx-auto px-3.5 w-screen content-center gap-x-2'>
                        <div className='hidden lg:flex w-15 size-fit items-center'>
                            <img src={logo} alt='icon'/>
                        </div>
                        <div className='lg:hidden flex items-center gap-x-2'>
                            <MobileMenu />
                        </div>
                        <div className='hidden lg:flex flex-grow justify-center'>
                            <DesktopMenu />
                        </div>
                        <div className='flex ml-auto lg:w-10'>
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