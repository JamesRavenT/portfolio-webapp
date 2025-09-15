import { useState } from 'react';
import Content from './content/Content';
import Background from './content/components/Background';
export default function Skills() {
  const [[index, direction], setIndex] = useState([0, 0]); // store index + direction

  return (
    <div
      id="skills"
      className="flex flex-col items-center h-[100vh] w-full pt-25 gap-y-3 font-electrolize"
    >
      <Background />
      <Content index={index} direction={direction} setIndex={setIndex} />
    </div>
  );
}
