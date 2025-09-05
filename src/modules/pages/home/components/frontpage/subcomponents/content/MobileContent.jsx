import PageLinks from "./fragments/PageLinks";
import SocialLinks from "./fragments/SocialLinks";
import ViewMore from "./fragments/ViewMore";

export default function MobileContent () {
    return(
        <>
        <div className='flex flex-col w-full pt-5 pl-2'>
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
            <ViewMore />
        </div>
        </>
    )
}