import { useScroll } from '../../../../../../../../hooks/useScroll';
import { sections } from '../../../../data/frontpage';

export default function PageLinks() {
  const { scrollToSection } = useScroll();
  return (
    <div className="flex flex-col h-auto w-[97%] mt-5 gap-y-3 items-center">
      <p onClick={() => scrollToSection('basicinfo')} className="text-xl">
        {sections.aboutme}
      </p>
      <p onClick={() => scrollToSection('skills')} className="text-xl">
        {sections.skills}
      </p>
      <p onClick={() => scrollToSection('projects')} className="text-xl">
        {sections.projects}
      </p>
    </div>
  );
}
