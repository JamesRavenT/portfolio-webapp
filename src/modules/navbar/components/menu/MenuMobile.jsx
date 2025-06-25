import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion } from 'framer-motion'
import MenuItems from "./fragments/MenuItems"
// import { dark, light } from "../../../../assets/themes/colors"


export default function MobileMenu({theme}){
    // const bgColor = (theme == 'Dark') ? dark : light
    // const txtColor = (theme == 'Dark') ? light : dark
    const [isOpen, setIsOpen]= useState(false)
    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }
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
                className='fixed left-0 right-0 top-16 overflow-y-auto h-full'>
                    <ul className='flex-col h-screen w-screen text-center space-y-5'>
                       {<MenuItems />} 
                    </ul>
            </motion.div>
        </div>
    )
}