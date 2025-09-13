import Background from './content/components/Background';
import Content from './content/Content';

export default function Frontpage({ section }) {
  return (
    <div id="top" className="flex flex-col min-h-[100vh] w-full text-white font-electrolize">
      <Background />
      <Content section={section} />
    </div>
  );
}
