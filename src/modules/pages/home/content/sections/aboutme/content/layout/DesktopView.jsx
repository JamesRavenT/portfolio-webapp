import Catchphrase from '../components/Catchphrase';
import Description from '../components/Description';
import Education from '../components/Education';

export default function DesktopView() {
  return (
    <div className="hidden lg:flex flex-col w-full items-center pt-20 justify-center">
      <Catchphrase />
      <Description />
      <hr className="w-[60%] border-0.5 my-5" />
      <Education />
    </div>
  );
}
