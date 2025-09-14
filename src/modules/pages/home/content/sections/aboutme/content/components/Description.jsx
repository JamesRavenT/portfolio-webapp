import { description } from '../../../../data/aboutme';

export default function Description() {
  return (
    <div className="text-2xl text-center md:w-[60%]">
      {description.paragraphs.map((text, idx) => (
        <p key={idx} className="text-xs md:text-base m-3">
          {text}
        </p>
      ))}
    </div>
  );
}
