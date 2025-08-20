import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

export default function FrontPageTOC () {
    return(
        <>
        <div className='
                flex
                flex-col
                w-full
                pt-5
                pl-2
                '>
            <hr className='
                    w-[97%]
                    border-0.5' />  
            <SocialLinks />  
            <hr className='
                    w-[97%]
                    border-0.5
                    mt-4' /> 
            <PageLinks /> 
            <hr className='
                    w-[97%]
                    border-0.5
                    mt-4' />     
        </div>
        </>
    )
}