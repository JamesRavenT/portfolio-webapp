import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from 'framer-motion'
import MenuItems from "./fragments/MenuItems"
// import { dark, light } from "../../../../assets/themes/colors"


export default function MobileMenu({theme}){
    // const bgColor = (theme == 'Dark') ? dark : light
    // const txtColor = (theme == 'Dark') ? light : dark
    const [isOpen, setIsOpen]= useState(false)
    const toggleDrawer = () => {
        console.log("toggle menu")
        setIsOpen(!isOpen)
    }

    useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

    useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);


    return(
        <div className='lg:hidden flex ml-auto items-center gap-x-2'>
            <button
            className='z-[999] relative'
            onClick={toggleDrawer}>
                {isOpen ? <X /> : <Menu />} 
            </button>
            <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: isOpen? '0%' : '100%'}} 
                
                className='fixed left-0 right-0 top-16 overflow-y-auto h-full z-[]998 backdrop-blur-2xl'>
                    <ul className='flex flex-col min-h-[100dvh] w-screen text-center space-y-5 '>
                       {<MenuItems />} 
                    </ul>
            </motion.div>
        </div>
    )
}