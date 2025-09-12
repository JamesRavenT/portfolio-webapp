import SkillIcon from "../skillsets/SkillIcon";
import { ICO_CPP } from "../../../_icons/ICO_CPP";
import { ICO_QT } from "../../../_icons/ICO_QT";

export default function SoftwareDevTS(){
 const softwareSkills = [
  { Icon: ICO_CPP, label: "C++" },
  { Icon: ICO_QT, label: "Qt" },
];
    return(
        <div className="grid grid-cols-3 gap-x-3 gap-y-4 place-items-center w-full">
      {softwareSkills.map(({ Icon, label }, i) => (
        <SkillIcon key={i} Icon={Icon} label={label} />
      ))}
    </div>
    )
}