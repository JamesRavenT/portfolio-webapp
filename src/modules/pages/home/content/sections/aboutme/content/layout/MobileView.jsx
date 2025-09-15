import Catchphrase from '../components/Catchphrase';
import Description from '../components/Description';
import Education from '../components/Education';

export default function MobileView() {
  return (
    <div className="lg:hidden flex flex-col  justify-center gap-y-1">
      <div className="w-full h-[5vh]" />
      <div className="flex flex-col w-full h-[95vh]  justify-center">
        <Catchphrase />
        <Description />
        <Education />
      </div>
    </div>
  );
}
