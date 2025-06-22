import { Outlet } from 'react-router-dom'

import DesktopMenu from './components/menu/MenuDesktop'
import MobileMenu from './components/menu/MenuMobile'
import Theme from './components/Theme'
import Logo from './components/Logo'
import { Dark, Light } from '../../assets/themes/colors'
import Navtext from './components/Navtext'


export default function Navbar({theme, toggle, section}){
    let bgColor = theme === 'Dark' ? Dark : Light
    let txtColor = theme === 'Dark' ? Light : Dark
    return(
        <div style={{backgroundColor: bgColor, color:txtColor}} className='w-[98.80%] ' >
            <div className='h-16 w-full sticky flex'>
                <nav className='flex mx-auto px-3.5 w-screen gap-x-2'>
                    <Logo />
                    <MobileMenu theme={theme}/>
                    {/* <DesktopMenu theme={theme}/> */}
                    <Navtext section={section}/>
                    <Theme theme={theme} toggle={toggle} />
                </nav> 
            </div>
            <main>
                <Outlet />
            </main>  
        </div>    
    )
}