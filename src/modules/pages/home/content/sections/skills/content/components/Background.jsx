/**
 * Background.jsx
 * Image Background for Skills
 * Finalized for v1.0.0 release
 * Last Updated: 09/27
 */

import { background } from '../../../../_config/background';

export default function Background() {
  return (
    <>
      <img
        className="absolute top-0 left-0 w-full h-[100dvh] object-cover z-[-2] filter brightness-30"
        src={background.skills}
      />
    </>
  );
}
