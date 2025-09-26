/**
 * Card.jsx
 * Container For Credentials
 * Finalized for v1.0.0 release
 * Last Updated: 09/26
 */

import { GraduationCap } from 'lucide-react';
import Credentials from './Credentials';

export default function Card({ data }) {
  return (
    <div className="flex items-center gap-x-4 lg:pr-15 bg-transparent lg:text-white hover:bg-white hover:text-black transition-colors duration-300 p-3  cursor-pointer">
      {/* Graduation Cap */}
      <GraduationCap className="size-15 stroke-1 text-current lg:ml-5" />
      {/* Divider */}
      <div className="w-[0.5px] h-[3rem] lg:w-[1.5px] lg:h-[4rem] bg-current transition-colors duration-300"/>
      {/* Credentials */}
      <div className="flex flex-col gap-y-1 lg:gap-y-0">
        <Credentials data={data} />
      </div>
    </div>
  );
}
