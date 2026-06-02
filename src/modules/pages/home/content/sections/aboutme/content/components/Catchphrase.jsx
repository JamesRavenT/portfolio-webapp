import { catchphrase } from '../../../../_data/aboutme';

export default function Catchphrase() {
  return (
    <div className="flex flex-col w-full xl:mb-2 text-center ">
      {[catchphrase.line1].map((text, idx) => (
        <p
          key={idx}
          className="text-xl md:text-2xl lg:text-5xl scale-110 lg:scale-100 aboutme-text-header-monitor "
        >
          {text}
        </p>
      ))}
    </div>
  );
}
