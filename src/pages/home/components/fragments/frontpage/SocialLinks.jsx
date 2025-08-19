import { ChevronsDown, Diamond, ChartNoAxesGantt, Download, Eye } from 'lucide-react'
import { FaLinkedinIn } from "react-icons/fa"
import { links } from '../../../../../assets/variables/links'
import { Front } from '../../../../../assets/text/home'
import { githubICO, linkedinICO } from '../../../../../assets/icons/icons' 
const viewGithub = () => (window.location.href = links.github);
const viewLinkedIn = () => (window.location.href = links.linkedin);
const viewResume = () => (window.location.href = links.resume);

export default function SocialLinks(){
    return(
        <>
        <div className='
              flex 
              flex-row
              w-full 
              pt-4 
              gap-x-2
              items-center 
              justify-center'>
            <div className='flex items-center gap-x-2 w-fit justify-center'>
              {/* GitHub */}
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

            {/* Linked In */}
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
            </div>      

          {/* Divider */}
        
          <div className='
                  w-[1px]
                  h-[40px]
                  bg-white
                  '/>
                 
          {/* Resume */}
          <div className='flex items-center gap-x-2 w-auto justify-center'>
          <button
            onClick={viewResume}
            className='
                bg-black 
                flex 
                h-fit
                px-7 sm:px-10
                py-1.5 sm:py-5
                gap-x-2 sm:gap-x-3
                items-center 
                text-lg sm:text-xl
                font-light
                border-1
                rounded-sm'>
            <Eye className='size-6' />
            {Front.resume}
          </button>
          </div>
        </div>

        </>
    )
}