/**
 * DesktopView.jsx
 * Desktop Layout for Frontpage
 * Finalized for v1.0.0 release
 * Last Updated: 09/26
 */

import Headline from '../components/Headline';
import Greetings from '../components/Greetings';
import SocialLinks from '../components/SocialLinks';
import LinkToContactForm from '../components/LinkToContactForm';

export default function DesktopView({ section }) {
  return (
    <div className="lg:flex lg:flex-col hidden">
      <div className="flex flex-col min-h-screen p-10">
        <Headline />
        <div className="flex-1" />
        <div className="flex flex-col w-full">
          <Greetings />
          <hr className="w-[42%] border-0.5 my-4 ml-auto" />
          <div className="flex ml-auto">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
