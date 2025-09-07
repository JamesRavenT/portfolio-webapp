import { githubICO } from "../../../../../../../../../assets/icons/icons"
import { links } from "../../../../../../../../../assets/variables/links"

const viewGithub = () => (window.location.href = links.github);

export default function GitHub() {
    return (
        <>
        <button className='
                      bg-black flex h-fit px-3 sm:h-12
                      py-2.5 sm:py-5
                      gap-x-2 sm:gap-x-3
                      items-center 
                      border-1 md:border-0
                      rounded-sm'
                onClick={viewGithub}> 
                <img src={githubICO} alt='github' className='size-5' />
              </button>
        </>
    )
}