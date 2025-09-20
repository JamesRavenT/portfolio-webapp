import { label } from '../../../../../_data/projects';

export default function ProjectStatus({ project }) {
  return (
    <div className="flex flex-col">
      <p className="lg:text-xl">{label.status}</p>
      <p className="text-xs lg:text-sm">{project.status}</p>
    </div>
  );
}
