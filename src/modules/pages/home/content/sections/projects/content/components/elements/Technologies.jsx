import { label } from '../../../../../_data/projects';

export default function Technologies({ project }) {
  const useGrid = project.stack.length > 7;

  return (
    <div className="flex flex-col mt-1 mb-2 gap-y-2">
      <p className="lg:text-xl">{label.techstack}</p>

      <div
        className={
          useGrid
            ? 'grid grid-cols-7 gap-3 lg:gap-5'
            : 'flex gap-x-3 lg:gap-x-5'
        }
      >
        {project.stack.map((Icon, idx) => (
          <Icon key={idx} className="size-7 lg:size-8 text-white" />
        ))}
      </div>
    </div>
  );
}