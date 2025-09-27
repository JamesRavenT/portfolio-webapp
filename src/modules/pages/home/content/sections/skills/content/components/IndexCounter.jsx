/**
 * IndexCounter.jsx
 * Indicator of which Forte is the user viewing. Only available in Desktop View
 * Finalized for v1.0.0 release
 * Last Updated: 09/27
 */

import { skillset } from '../../../../_data/skills';

export default function IndexCounter({ index }) {
  return (
    <div className="text-3xl text-gray-300">
      {index + 1} / {skillset.length}
    </div>
  );
}
