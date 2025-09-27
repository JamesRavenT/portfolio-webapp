/**
 * PageMarker.jsx
 * Indicator of which Forte is the user viewing. Only available in Mobile View
 * Finalized for v1.0.0 release
 * Last Updated: 09/27
 */

import { useState } from 'react';

export default function PageMarker({ index, setIndex, skillset = [] }) {
  if (!skillset.length) return null;

  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (i) => {
    setIndex([i, i > index ? 1 : -1]);
    setClickedIndex(i);
  };

  return (
    <>
      <div className="flex  gap-x-5 mt-5 items-center ">
        {skillset.map((_, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={`cursor-pointer transition-all duration-300 transform ${
              i === index
                ? 'w-2 h-2 bg-white rotate-45'
                : 'w-1 h-1 bg-gray-500 rotate-0'
            }`}
          />
        ))}
      </div>
    </>
  );
}
