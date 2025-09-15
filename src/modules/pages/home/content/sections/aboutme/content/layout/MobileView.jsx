import Catchphrase from '../components/Catchphrase';
import Description from '../components/Description';
import Education from '../components/Education';

export default function MobileView() {
  return (
    <div className="lg:hidden flex flex-col h-screen items-center pt-25 gap-y-1 ">
      <div className="flex flex-col w-full justify-center">
        <Catchphrase />
        <Description />
        <Education />
      </div>
    </div>
  );
}
