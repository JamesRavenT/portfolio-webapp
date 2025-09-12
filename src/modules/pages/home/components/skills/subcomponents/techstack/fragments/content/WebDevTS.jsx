import SkillIcon from "../skillsets/SkillIcon";
import { ICO_HTML5 } from "../../../_icons/ICO_HTML5";
import { ICO_CSS3 } from "../../../_icons/ICO_CSS3";
import { ICO_Tailwind } from "../../../_icons/ICO_Tailwind";
import { ICO_Javascript } from "../../../_icons/ICO_Javascript";
import { ICO_ReactJS } from "../../../_icons/ICO_ReactJS";
import { ICO_NodeJS } from "../../../_icons/ICO_NodeJS";
import { ICO_Git } from "../../../_icons/ICO_Git";
import { ICO_VSCode } from "../../../_icons/ICO_VSCode";


export default function WebDevTS(){
 const webSkills = [
  { Icon: ICO_HTML5, label: "HTML5" },
  { Icon: ICO_CSS3, label: "CSS3" },
  { Icon: ICO_Tailwind, label: "Tailwind" },
  { Icon: ICO_Javascript, label: "JavaScript" },
  { Icon: ICO_ReactJS, label: "ReactJS" },
  { Icon: ICO_NodeJS, label: "NodeJS" },
  { Icon: ICO_Git, label: "Git" },
  { Icon: ICO_VSCode, label: "VS Code" },
];
    return(
        <div className="grid grid-cols-3 gap-x-3 gap-y-4 place-items-center w-full">
          {webSkills.map(({ Icon, label }, i) => (
            <SkillIcon key={i} Icon={Icon} label={label} />
          ))}
        </div>
    )
}