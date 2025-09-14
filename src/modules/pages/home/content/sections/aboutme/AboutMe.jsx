import { Diamond, Square } from 'lucide-react';
import Background from './content/components/Background';
import Content from './content/Content';

export default function AboutMe() {
  return (
    <div
      id="aboutme"
      className="flex flex-col items-center justify-center h-[100vh] w-full gap-y-3 font-electrolize"
    >
      <Background />
      <Content />
    </div>
  );
}
