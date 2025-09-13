import { GraduationCap } from 'lucide-react';
import Catchphrase from './fragments/Catchphrase';
import Description from './fragments/Description';
import Education from './fragments/Education';
import { AboutMe } from '../../../../../../../assets/text/home';

export default function DesktopContent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Catchphrase />
      <Description />
      <hr className="w-[60%] border-0.5 my-5" />
      <Education />
    </div>
  );
}
