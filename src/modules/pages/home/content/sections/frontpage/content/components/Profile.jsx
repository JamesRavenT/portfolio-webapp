import { IdCard } from 'lucide-react';
import { resume } from '../../../../_data/frontpage';
export default function Profile() {
  return (
    <div className="flex h-[10vh] w-full mt-2 py-2 px-4 items-center">
      <div className="ml-auto">
        <button onClick={resume.openLink} className="flex flex-col justify-center items-center">
          <IdCard size="50" strokeWidth={1} />
          <p className="text-xs">{resume.text1}</p>
        </button>
      </div>
    </div>
  );
}
