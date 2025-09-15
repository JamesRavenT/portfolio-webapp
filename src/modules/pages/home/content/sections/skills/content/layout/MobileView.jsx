import Fortes from '../components/Fortes';
import Techstack from '../components/Techstack';

export default function MobileView({ index, direction, setIndex }) {
  return (
    <div className="lg:hidden flex flex-col h-screen items-center pt-15 gap-y-1 ">
      <div className="flex flex-col w-full items-center justify-center">
        <Fortes index={index} direction={direction} setIndex={setIndex} />
        <hr className="w-[90%] border-0.5 my-5" />
        <Techstack index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}
