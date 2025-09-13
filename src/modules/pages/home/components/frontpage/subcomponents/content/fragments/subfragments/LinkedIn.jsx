import { links } from '../../../../../../../../../assets/variables/links';
import { FaLinkedinIn } from 'react-icons/fa';

const viewLinkedIn = () => (window.location.href = links.linkedin);

export default function LinkedIn() {
  return (
    <>
      <button
        onClick={viewLinkedIn}
        className="
                      bg-[#0A66C2] 
                      flex 
                      h-fit 
                      px-3 sm:h-12
                      py-2.5 sm:py-4
                      gap-x-2 sm:gap-x-3
                      border-1 md:border-0
                      rounded-sm"
      >
        <FaLinkedinIn className="size-5 " />
      </button>
    </>
  );
}
