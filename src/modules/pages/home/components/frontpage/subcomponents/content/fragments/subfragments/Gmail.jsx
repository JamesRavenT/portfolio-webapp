import { gmailICO } from "../../../../../../../../../assets/icons/icons"
import { links } from "../../../../../../../../../assets/variables/links"

const viewGithub = () => (window.location.href = links.github);

export default function Gmail() {
    return (
        <>
        <button className='
                      bg-white flex h-fit p-1 sm:h-12
                      items-center 
                      border-1 md:border-0
                      rounded-sm'
                onClick={viewGithub}> 
                <img src={gmailICO} alt='gmail' className='size-9' />
              </button>
        </>
    )
}