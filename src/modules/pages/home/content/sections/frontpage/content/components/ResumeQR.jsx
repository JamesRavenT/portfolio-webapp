import { resume } from '../../../../_data/frontpage';

export default function ResumeQR() {
  return (
    <div className="flex flex-col ml-auto text-xs gap-y-1 text-black shadow-xl">
      <p className="text-center">{resume.text2}</p>
      <img src={resume.qr} onClick={resume.openLink} alt="resumeqr" className="size-21" />
      <p className="text-center">{resume.text3}</p>
    </div>
  );
}
