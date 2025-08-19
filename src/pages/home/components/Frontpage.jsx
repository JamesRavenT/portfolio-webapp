import { ChevronsDown, Diamond, ChartNoAxesGantt } from 'lucide-react'
import { Front } from '../../../assets/text/home'


import SocialLinks from './fragments/frontpage/SocialLinks';
import ViewMore from './fragments/frontpage/ViewMore';
import FrontPageLabel from './fragments/frontpage/FrontPageLabel';
import BackgroundFP from './fragments/frontpage/BackgroundFP';
import FrontPageMenu from './fragments/frontpage/FrontPageMenu';

export default function Frontpage() {


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
      <FrontPageLabel /> 
      <FrontPageMenu />  
      
      <ViewMore />
      <BackgroundFP />
    </div>
  );
}
