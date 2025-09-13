import Catchphrase from './fragments/Catchphrase';
import Description from './fragments/Description';
import Education from './fragments/Education';

export default function MobileContent() {
  return (
    <div className="text-2xl text-center">
      <Catchphrase />
      <Description />
      <Education />
    </div>
  );
}
