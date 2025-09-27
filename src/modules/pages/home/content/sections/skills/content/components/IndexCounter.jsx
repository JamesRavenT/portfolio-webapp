import { skillset } from '../../../../_data/skills';

export default function IndexCounter({ index }) {
  return (
    <div className="text-3xl text-gray-300">
      {index + 1} / {skillset.length}
    </div>
  );
}
