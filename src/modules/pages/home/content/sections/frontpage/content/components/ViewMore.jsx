import { ChevronsDown } from 'lucide-react';
import { useScroll } from '../../../../../../../../hooks/useScroll';

export default function ViewMore({ section }) {
  console.log(section);
  const { scrollToSection } = useScroll();
  if (section != '') return null;
  return (
    <div className="w-full min-h-[20vh]">
      <div className="flex flex-col w-full items-center animate-hint pt-8 lg:pt-0 *:mb-2">
        <button onClick={() => scrollToSection('basicinfo')}>
          <ChevronsDown />
        </button>
      </div>
    </div>
  );
}
