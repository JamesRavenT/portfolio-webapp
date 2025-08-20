
import SocialLinks from './fragments/frontpage/SocialLinks';
import ViewMore from './fragments/frontpage/ViewMore';
import BackgroundFP from './fragments/frontpage/BackgroundFP';
import FrontPageLabel from './fragments/frontpage/FrontPageLabel';
import FrontPageTOC from './fragments/frontpage/FrontPageTOC';
import FrontPageUpperBlock from './fragments/frontpage/FrontPageUpperBlock';

export default function Frontpage() {

  return (
    <div 
      id='top'
      className='
        flex 
        flex-col 
        min-h-[100vh] w-full 
        text-white 
        font-electrolize'>
          <FrontPageUpperBlock />
          <div className='
            flex
            flex-col
            items-center justify-center
            pt-7
            px-2.5 sm:px-5 '>
            <FrontPageLabel /> 
            <FrontPageTOC />  
            <ViewMore />
            <BackgroundFP />
          </div>
    
    </div>
  );
}
