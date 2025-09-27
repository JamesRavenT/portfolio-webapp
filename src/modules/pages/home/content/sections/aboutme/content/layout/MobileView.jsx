import Catchphrase from '../components/Catchphrase';
import Description from '../components/Description';
import Education from '../components/Education';

export default function MobileView() {
  return (
    <div className="lg:hidden flex flex-col h-[100dvh] items-center justify-center">
      <div className="flex h-[17%] w-full " />
      <div className="flex flex-col w-full ">
        <Catchphrase />
        <Description />
        <Education />
      </div>
      <div className="flex-1" />
    </div>
  );
}
