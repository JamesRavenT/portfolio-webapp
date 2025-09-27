import { label } from '../../../../../_data/projects';
export default function Technologies({ project }) {
  return (
    <div className="flex flex-col mt-1 mb-2 gap-y-2">
      <p className="lg:text-xl">{label.techstack}</p>
      <div className="flex gap-x-3 lg:gap-x-5">
        {project.stack.map((Icon, idx) => (
          <Icon key={idx} className="size-7 lg:size-8 text-white" />
        ))}
      </div>
    </div>
  );
}
