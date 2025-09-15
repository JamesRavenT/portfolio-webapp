import Fortes from '../components/Fortes';
import PageMarker from '../components/PageMarker';
import Techstack from '../components/Techstack';

export default function DesktopView({ index, direction, setIndex }) {
  return (
    <div className="hidden lg:flex w-full ">
      <div className="flex w-[25%]" />
      <div className="flex flex-col w-full items-center justify-center mx-10">
        <Fortes index={index} direction={direction} setIndex={setIndex} />

        <Techstack index={index} setIndex={setIndex} />
        {/* <div className="absolute top-50 left-60 h-[30rem] border-r-1" /> */}
        <PageMarker index={index} direction={direction} setIndex={setIndex} />
      </div>
      <div className="flex w-[25%] justify-center items-center"></div>
    </div>
  );
}
