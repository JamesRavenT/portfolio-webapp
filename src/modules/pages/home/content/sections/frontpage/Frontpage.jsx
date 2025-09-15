import Background from './content/components/Background';
import Content from './content/Content';

export default function Frontpage({ section }) {
  return (
    <div
      id="frontpage"
      className="flex flex-col min-h-screen w-full text-white font-electrolize justify-center"
    >
      <Background />
      <Content section={section} />
    </div>
  );
}
