/**
 * MobileView.jsx
 * Mobile and Tablet Layout for Frontpage
 * Finalized for v1.0.0 release
 * Last Updated: 09/26
 */

import Profile from '../components/Profile';
import Headline from '../components/Headline';
import SocialLinks from '../components/SocialLinks';
import PageLinks from '../components/PageLinks';
import ViewMore from '../components/ViewMore';
import LinkToContactForm from '../components/LinkToContactForm';

export default function MobileView({ section }) {
  return (
    <div className="lg:hidden h-[100dvh] flex flex-col">
      <Profile />
      <div className="flex flex-1 flex-col items-center px-2.5 sm:px-5 md:gap-y-2 justify-center">
        <Headline />
        <div className="flex flex-col w-full pt-5 ">
          <hr className="w-[97%] border-0.5" />
          <SocialLinks />
          <hr className="w-[97%] border-0.5 mt-4 md:mt-5" />
          <PageLinks />
          <hr className="w-[97%] border-0.5 mt-4 md:mt-5" />
          <LinkToContactForm section={section} />
          <ViewMore section={section} />
        </div>
      </div>
    </div>
  );
}
