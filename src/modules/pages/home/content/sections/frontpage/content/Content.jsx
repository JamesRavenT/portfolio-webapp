import DesktopView from './layout/DesktopView';
import MobileView from './layout/MobileView';

export default function Content({ section }) {
  return (
    <>
      <MobileView section={section} />
      <DesktopView section={section} />
    </>
  );
}
