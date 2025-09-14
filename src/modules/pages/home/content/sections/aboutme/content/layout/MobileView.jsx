import Catchphrase from '../components/Catchphrase';
import Description from '../components/Description';
import Education from '../components/Education';

export default function MobileView() {
  return (
    <div className="lg:hidden flex flex-col items-center justify-center gap-y-1">
      <Catchphrase />
      <Description />
      <Education />
    </div>
  );
}
