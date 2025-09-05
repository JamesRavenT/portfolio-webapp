import { ChevronsDown, Diamond, ChartNoAxesGantt, Download, Eye } from 'lucide-react'
import { FaLinkedinIn } from "react-icons/fa"
import { links } from '../../../../../../../../assets/variables/links'
import { Front } from '../../../../../../../../assets/text/home'
import { githubICO, linkedinICO } from '../../../../../../../../assets/icons/icons' 
import GitHub from './subfragments/GitHub'
import LinkedIn from './subfragments/LinkedIn'
const viewGithub = () => (window.location.href = links.github);
const viewLinkedIn = () => (window.location.href = links.linkedin);


export default function SocialLinks(){
    return(
        <>
        <div className='
              flex 
              flex-row
              w-full 
              pt-4
              px-3
              gap-x-2
              items-center 
              justify-center'>
         
              {/* GitHub */}
              <div className='flex mx-auto items-center gap-x-2'>
              <GitHub />
                
              <p className='text-xl'>Github</p>
              </div>
             
            {/* Divider */}
        
              <div className='
                      w-[1px]
                      h-[40px]
                      bg-white
                      '/>
                    
            {/* Linked In */}
            <div className='flex mx-auto items-center gap-x-2'>
              <LinkedIn />
              
            <p className='text-xl'>LinkedIn</p>
              </div>

            </div>


        </>
    )
}