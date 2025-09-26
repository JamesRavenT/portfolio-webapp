/**
 * Profile.jsx
 * Clickable QR Link to my Resume via Google Docs. Only Available in the Desktop View.
 * Finalized for v1.0.0 release
 * Last Updated: 09/26
 */

import { resume } from '../../../../_data/frontpage';

export default function ResumeQR() {
  return (
    <div className="flex flex-col ml-auto text-xs gap-y-1 text-white shadow-xl">
      <p className="text-center">{resume.text2}</p>
      <img
        src={resume.qr}
        onClick={resume.openLink}
        alt="resumeqr"
        className="size-21"
      />
      <p className="text-center">{resume.text3}</p>
    </div>
  );
}
