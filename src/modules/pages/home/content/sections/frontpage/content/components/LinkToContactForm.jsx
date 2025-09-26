/**
 * LinkToContactForm.jsx
 * Clickable text that will redirect the user to the Contact Form Section.
 * Finalized for v1.0.0 release
 * Last Updated: 09/26
 */

import { useScroll } from '../../../../../../../../_hooks/useScroll';
import { labels } from '../../../../_data/frontpage';

export default function LinkToContactForm({ section }) {
  const { scrollToSection } = useScroll();
  if (section != '') return null;
  return (
    <div className="w-full mt-5 md:mt-6 flex justify-center">
      <p
        className="text-sm md:text-xl text-center cursor-pointer px-2"
        onClick={() => scrollToSection('contacts')}
      >
        {labels.linktocontacts}
      </p>
    </div>
  );
}
