import { catchphrase } from '../../../../data/aboutme';

export default function Catchphrase() {
  return (
    <div className="flex flex-col w-full h-fit  lg:pt-15 lg:pb-8 xl:pb-10 text-center">
      <p className="text-lg lg:text-5xl">{catchphrase.line1}</p>
      <p className="text-lg lg:text-5xl">{catchphrase.line2}</p>
    </div>
  );
}
