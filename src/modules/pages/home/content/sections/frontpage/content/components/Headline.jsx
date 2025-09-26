/**
 * Headline.jsx
 * Introduction for myself and role
 * Finalized for v1.0.0 release
 * Last Updated: 09/26
 */

import { headlines } from '../../../../_data/frontpage';

export default function Headline() {
  return (
    <div className="flex flex-col w-[95%] sm:gap-y-2">
      {/* Greeting */}
      <p className="pl-1 text-2xl md:text-2xl lg:text-xl">
        {headlines.greeting}
      </p>
      {/* Name */}
      <p className="font-bold text-6xl sm:text-9xl md:text-8xl lg:text-7xl">
        {headlines.name}
      </p>
      {/* Role */}
      <div className="flex w-full gap-x-1 md:pl-1">
        <p className="lg:w-[30%] md:w-[55%] w-[80%] bg-white pl-2  font-bold text-black sm:text-3xl md:text-2xl lg:text-xl">
          {headlines.role}
        </p>
        <div className="lg:w-[2%] md:w-[3%] w-[5%] bg-white" />
      </div>
    </div>
  );
}
