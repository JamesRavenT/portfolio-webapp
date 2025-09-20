import { label } from '../../../../../_data/projects';

export default function LastChanges({ project }) {
  return (
    <div className="flex flex-col">
      <p className="lg:text-xl">{label.lastUpdate}</p>
      <p className="text-xs lg:text-sm">{project.lastchange}</p>
    </div>
  );
}
