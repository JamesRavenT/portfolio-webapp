import SkillIcon from "../skillsets/SkillIcon";
import { ICO_AndroidSTD } from "../../../_icons/ICO_AndroidSTD";
import { ICO_FireStore } from "../../../_icons/ICO_FireStore";
import { ICO_Git } from "../../../_icons/ICO_Git";
import { ICO_Java } from "../../../_icons/ICO_Java";
import { ICO_Realm } from "../../../_icons/ICO_Realm";
import { ICO_SQLite } from "../../../_icons/ICO_SQLite";

export default function AndroidDevTS(){

  const androidSkills = [
  { Icon: ICO_Java, label: "Java" },
  { Icon: ICO_Realm, label: "Realm" },
  { Icon: ICO_SQLite, label: "SQLite" },
  { Icon: ICO_FireStore, label: "Firestore" },
  { Icon: ICO_Git, label: "Git" },
  { Icon: ICO_AndroidSTD, label: "AD Studio" },
];
    return(
        <div className="grid grid-cols-3 gap-x-3 gap-y-4 place-items-center w-full ">
              {androidSkills.map(({ Icon, label }, i) => (
                <SkillIcon key={i} Icon={Icon} label={label} />
              ))}
            </div>
    )
}