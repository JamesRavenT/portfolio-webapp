import { Outlet } from 'react-router-dom'

import DesktopMenu from './subcomponents/menu/MenuDesktop'
import MobileMenu from './subcomponents/menu/MenuMobile'
import Theme from './subcomponents/Theme'
import Logo from './subcomponents/Logo'
import { Dark, Light } from '../../assets/themes/colors'


export default function Navbar({theme, toggle}){
    let bgColor = theme === 'Dark' ? Dark : Light
    let txtColor = theme === 'Dark' ? Light : Dark
    return(
        <div style={{backgroundColor: bgColor, color:txtColor}}>
            <div className='h-16 w-screen sticky flex inset-0'>
                <nav className='flex mx-auto px-3.5 w-screen content-center gap-x-2'>
                    <Logo />
                    <MobileMenu theme={theme}/>
                    <DesktopMenu theme={theme}/>
                    <Theme theme={theme} toggle={toggle} />
                </nav> 
            </div>
            <main>
                <Outlet />
            </main>  
        </div>    
    )
}