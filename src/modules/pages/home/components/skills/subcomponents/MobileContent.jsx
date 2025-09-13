import Fortes from './fortes/Fortes';
import Techstack from './techstack/Techstack';

export default function MobileContent({ index, direction, setIndex }) {
  return (
    <div className="md:hidden flex w-full">
      <div className="flex flex-col w-full items-center justify-center">
        <Fortes index={index} direction={direction} setIndex={setIndex} />
        <hr className="w-[90%] border-0.5 my-5" />
        <Techstack index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}
