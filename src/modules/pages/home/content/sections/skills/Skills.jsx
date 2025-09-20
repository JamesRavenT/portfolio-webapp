import { useState } from 'react';
import { layout } from '../../_config/layout';
import Content from './content/Content';
import Background from './content/components/Background';
export default function Skills() {
  const [[index, direction], setIndex] = useState([0, 0]); // store index + direction

  return (
    <div className={layout.page}>
      <Background />
      <Content index={index} direction={direction} setIndex={setIndex} />
    </div>
  );
}
