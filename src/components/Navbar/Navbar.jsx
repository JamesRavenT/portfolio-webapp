import placeholder from '../../assets/icons/placeholder.png'
import darkmode from '../../assets/icons/toggle_darkmode.png'
import DesktopMenu from './subcomponents/DesktopMenu'
import MobileMenu from './subcomponents/MobileMenu'
import Theme from './subcomponents/Theme'

function Navbar(){
    const logo = placeholder
    const theme = darkmode
    

    return(
        <div>
            <header className='h-16 w-screen fixed flex inset-0 bg-[#000000]'>
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
            </header>
        </div>   
    )

} export default Navbar