import { Outlet } from 'react-router-dom'

import DesktopMenu from './components/menu/MenuDesktop'
import MobileMenu from './components/menu/MenuMobile'
import Theme from './components/Theme'
import Logo from './components/Logo'
import { Dark, Light } from '../../assets/variables/colors'
import Navtext from './components/Navtext'


export default function Navbar({theme, toggle, section}){
    const style = {
        backgroundImage : (theme === 'Dark' ) ? 
                          'linear-gradient(to bottom right, #000000, #434343, #bdc3c7)' :
                          'linear-gradient(to bottom right, #ffffff, #bdc3c7, #434343)',
        color : (theme === 'Dark' ) ? Light : Dark
    }
    return(
        <div style={style} className='w-full ' >
            <div className='h-18 w-full sticky flex'>
                <nav className='flex mx-auto px-3.5 w-screen gap-x-2'>
                    {section !== '' && <Logo section={section} />}
                    <Navtext section={section}/>
                    <Theme theme={theme} toggle={toggle} />
                    <MobileMenu theme={theme}/>
                    {/* <DesktopMenu theme={theme}/> */}
                </nav> 
            </div>
            <main>
                <Outlet />
            </main>  
        </div>    
    )
}