import { ChevronsDown, Diamond, ChartNoAxesGantt, Download, Eye } from 'lucide-react'
import { FaLinkedinIn } from "react-icons/fa"
import { links } from '../../../../../assets/variables/links'
import { Front } from '../../../../../assets/text/home'
import { githubICO, linkedinICO } from '../../../../../assets/icons/icons' 
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
              <div className='flex mr-auto items-center gap-x-2'>
               <button
                  onClick={viewGithub}
                  className='
                    bg-black 
                      flex 
                      h-fit
                      px-3 sm:px-10
                      py-2.5 sm:py-5
                      gap-x-2 sm:gap-x-3
                      items-center 
                      border-1
                      rounded-sm'>
                  <img src={githubICO} alt='github' className='size-5 sm:size-7' />
              </button>
              <p className='text-xl'>Github</p>
              </div>
             

            {/* Divider */}
        
              <div className='
                      w-[1px]
                      h-[40px]
                      bg-white
                      '/>
                    

            {/* Linked In */}
            <div className='flex ml-auto items-center gap-x-2'>
              <button
                  onClick={viewLinkedIn}
                  className='
                      bg-[#0A66C2] 
                      flex 
                      h-fit 
                      px-3 sm:px-10
                      py-2.5 sm:py-5
                      gap-x-2 sm:gap-x-3
                      border-1
                      rounded-sm'>
                  <FaLinkedinIn className='size-5 sm:size-7' />
            </button>
            <p className='text-xl'>LinkedIn</p>
              </div>

            </div>


        </>
    )
}