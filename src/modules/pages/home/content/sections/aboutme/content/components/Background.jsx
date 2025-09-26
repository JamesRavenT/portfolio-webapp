/**
 * Background.jsx
 * Image Background for AboutMe
 * Finalized for v1.0.0 release
 * Last Updated: 09/26
 */

import { background } from '../../../../_config/background';

export default function Background() {
  return (
    <>
      <img
        className="absolute top-0 left-0 w-full h-[100dvh] object-cover z-[-2] mask-fade filter brightness-35"
        src={background.aboutme}
      />
    </>
  );
}
