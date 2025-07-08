import { ChevronsDown, Diamond, ChartNoAxesGantt } from 'lucide-react'
import { Front } from '../../../assets/text/home'
import { githubICO, linkedinICO } from '../../../assets/icons/icons' 
import { links } from '../../../assets/variables/links'

export default function Frontpage() {
  const viewGithub = () => (window.location.href = links.github);
  const viewLinkedIn = () => (window.location.href = links.linkedin);
  const viewResume = () => (window.location.href = links.resume);

  return (
    <div 
      id='top'
      className='
        flex 
        flex-col 
        items-center justify-center 
        min-h-[100vh] w-full 
        pt-24 
        px-2.5 sm:px-5 
        text-white 
        font-electrolize'>

      {/* SECTION 1 -- Name + Role */}
      <div className='
            flex 
            flex-col 
            w-[95%]'>
        {/* SECTION 1.1 -- Greeting */}
        <p className='
            text-3xl 
            pl-1 sm:pl-2'>
            {Front.greeting} </p>
        {/* SECTION 1.2 -- Name */}
        <p className='
            text-6xl sm:text-9xl
            font-bold'>
            {Front.name} </p>
        {/* SECTION 1.3 -- Role */}   
        <p className='
            sm:text-3xl 
            pl-1 sm:pl-2
            font-bold '> {Front.role} </p>

      {/* SECTION 2 -- Quote */}
        {/* SECTION 2.1 -- Line 1 */}
        <div className='
              flex 
              gap-x-2 sm:gap-y-2'>
          <hr className='
                m-auto 
                w-[94%] sm:w-[100%]
                border-1'/>
          <Diamond 
              className='
              fill-white
                sm:size-7'/>
        </div>
        {/* SECTION 2.2 -- Line 2 */}
        <hr className='
              mb-3 
              w-[80%] border-1' />

        {/* SECTION 2.3 -- Quotation */}
        <p className='
            mb-3 sm:my-5
            w-[87%] sm:w-[100%] 
            text-sm sm:text-2xl
            sm:text-center 
            text-justify 
            font-bold'>
            {Front.description} </p>

        {/* SECTION 2.4 -- Line 3 */}
        <div className='
              flex 
              w-full'>
          <hr className='
                my-0.5 
                ml-auto 
                w-[80%] sm:w-[90%]
                border-1' />
        </div>

        {/* SECTION 2.5 -- Line 4 */}
        <div className='
              flex 
              gap-x-2'>
          <Diamond className='
                  fill-white
                    sm:size-7'/>
          <hr className='
                m-auto 
                w-[94%] sm:w-[100%]
                border-1' />
        </div>

      {/* SECTION 3 -- Social Links */}
        <div className='
              flex 
              flex-col sm:flex-row
              w-full 
              pt-4 
              gap-y-3 sm:gap-x-5
              items-center 
              justify-center'>
                
          {/* SECTION 3.1 -- GitHub */}
          <button
            onClick={viewGithub}
            className='
            bg-black 
              flex 
              h-fit
              px-7 sm:px-10
              py-2.5 sm:py-5
              gap-x-2 sm:gap-x-3
              items-center 
              text-lg sm:text-xl
              font-light
              border-1 
              rounded-[5px]'>
            <img src={githubICO} alt='github' className='size-6 sm:size-7' />
            {Front.github}
          </button>

          {/* SECTION 3.1 -- Linked In */}
          <button
            onClick={viewLinkedIn}
            className='flex h-fit py-2.5 px-5 gap-x-2 items-center text-white text-lg bg-[#0A66C2] font-light rounded-[5px] border-1'
          >
            <img src={linkedinICO} alt='linkedin' className='size-6' />
            {Front.linkedin}
          </button>
          {/* SECTION 3.1 -- Resume */}
          <button
            onClick={viewResume}
            className='flex h-fit py-2.5 px-5 gap-x-2 items-center text-white text-lg bg-black font-light rounded-[5px] border-1'
          >
            <ChartNoAxesGantt className='size-6' />
            {Front.resume}
          </button>
        </div>
        
      </div>
      <div className='w-full min-h-[20vh] z-[-1]'>
        <div className='flex flex-col w-full items-center animate-hint pt-8 *:mb-2'>
          <ChevronsDown />
          <p>{Front.more}</p>
        </div>
      </div>

        <video
        className='absolute top-0 left-0 w-full min-h-[105vh] object-cover z-[-2] blur-xs'
        src='/backgrounds/frontpage2.mp4'
        autoPlay muted loop playsInline />
    </div>
  );
}
