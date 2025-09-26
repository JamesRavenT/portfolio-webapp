/**
 * ViewMore.jsx
 * Clickable, blinking button to go to the next section below. Only Available in Mobile View.
 * Finalized for v1.0.0 release
 * Last Updated: 09/26
 */

import { ChevronsDown } from 'lucide-react';
import { useScroll } from '../../../../../../../../_hooks/useScroll';

export default function ViewMore({ section }) {
  console.log(section);
  const { scrollToSection } = useScroll();
  if (section != '') return null;
  return (
    <div className="w-full min-h-[20vh]">
      <div className="flex flex-col w-full items-center animate-hint mt-5 lg:pt-0 *:mb-2 z-[99]">
        <button onClick={() => scrollToSection('aboutme')}>
          <ChevronsDown />
        </button>
      </div>
    </div>
  );
}
