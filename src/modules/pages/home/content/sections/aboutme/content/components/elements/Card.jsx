import { GraduationCap } from 'lucide-react';
import Credentials from './Credentials';

export default function Card({ data }) {
  return (
    <div className="flex items-center gap-x-4 lg:pr-15 ">
      {/* Graduation Cap */}
      <GraduationCap className="size-15 stroke-1 text-white  lg:ml-5" />

      {/* Divider */}
      <div className="w-[0.5px] h-[3rem] bg-white lg:w-[1.5px] lg:h-[4rem] " />

      {/* Credentials */}
      <div className="flex flex-col gap-y-1 lg:gap-y-0">
        <Credentials data={data} />
      </div>
    </div>
  );
}
