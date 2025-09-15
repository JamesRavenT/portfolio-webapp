import Fortes from '../components/Fortes';
import PageMarker from '../components/PageMarker';
import Techstack from '../components/Techstack';

export default function DesktopView({ index, direction, setIndex }) {
  return (
    <div className="hidden lg:flex w-full pt-10">
      <div className="flex w-[20%]" />
      <div className="flex flex-col w-full items-center justify-center mx-10 gap-y-3">
        <Fortes index={index} direction={direction} setIndex={setIndex} />
        <Techstack index={index} setIndex={setIndex} />
        <PageMarker index={index} direction={direction} setIndex={setIndex} />
      </div>
      <div className="flex w-[20%] justify-center items-center"></div>
    </div>
  );
}
