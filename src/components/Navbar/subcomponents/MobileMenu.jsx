import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion } from 'framer-motion'

export default function MobileMenu(){
    const [isOpen, setIsOpen]= useState(false)
    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }
    return(
        <>
            <button
            className='z-[999] relative'
            onClick={toggleDrawer}>
                {isOpen ? <X /> : <Menu />} 
            </button>
            <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: isOpen? '0%' : '-100%'}} 
            className='fixed left-0 right-0 top-16 overflow-y-auto h-full'>
                <ul>
                    <li>TEST</li>
                    <li>TEST</li>
                    <li>TEST</li>
                    <li>TEST</li>
                </ul>
            </motion.div>
        </>
    )
}