import DesktopView from './layout/DesktopView';
import MobileView from './layout/MobileView';

export default function Content({ index, direction, setIndex }) {
  return (
    <>
      <MobileView index={index} direction={direction} setIndex={setIndex} />
      <DesktopView index={index} direction={direction} setIndex={setIndex} />
    </>
  );
}
