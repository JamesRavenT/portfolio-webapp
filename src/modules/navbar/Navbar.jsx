import { Outlet } from 'react-router-dom'

import DesktopMenu from './components/menu/MenuDesktop'
import MobileMenu from './components/menu/MenuMobile'
import Theme from './components/Theme'
import Logo from './components/Logo'
import { Dark, Light } from '../../assets/variables/colors'



export default function Navbar({toggle, section}){


    console.log(section)
    return(
        <div  className='w-full ' >
            <div className='flex h-25 w-full sticky top-0 z-50'>
                <nav className='flex mx-auto px-3.5 w-screen gap-x-2'>

                    
                    <MobileMenu  section={section} />
                    {/* <Theme theme={theme} toggle={toggle} /> */}
                </nav> 
            </div>
            
            <main>
                <Outlet />
            </main>  
        </div>    
    )
}

{/* <DesktopMenu theme={theme}/> */}