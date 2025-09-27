import { description } from '../../../../_data/aboutme';

export default function Description() {
  return (
    <div className="text-center mx-2 lg:w-[60%]">
      {description.paragraphs.map((text, idx) => (
        <p
          key={idx}
          className="text-xs lg:text-base aboutme-text-description-monitor mt-4 lg:m-4"
        >
          {text}
        </p>
      ))}
    </div>
  );
}
