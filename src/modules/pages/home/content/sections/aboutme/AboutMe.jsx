import { Diamond, Square } from 'lucide-react';
import Background from './content/components/Background';
import Content from './content/Content';

export default function AboutMe() {
  return (
    <div
      id="aboutme"
      className="flex flex-col justify-center min-h-screen w-full gap-y-3 font-electrolize"
    >
      <Background />
      <Content />
    </div>
  );
}
