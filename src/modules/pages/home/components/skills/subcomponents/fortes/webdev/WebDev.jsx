import {WebDevIco} from "./fragments/icons/WebDevIco";
import TS_CSS3 from "./fragments/techstack/TS_CSS3";
import TS_Git from "./fragments/techstack/TS_Git";
import TS_VSCode from "./fragments/techstack/TS_VSCode";
import TS_HTML5 from "./fragments/techstack/TS_HTML5";
import TS_Javascript from "./fragments/techstack/TS_Javascript";
import TS_NodeJS from "./fragments/techstack/TS_NodeJS";
import TS_ReactJS from "./fragments/techstack/TS_React";
import TS_Tailwind from "./fragments/techstack/TS_Tailwind";


export default function WebDev() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3">

      <WebDevIco className="size-25" />
      <h2 className="text-xl font-semibold">Web Development</h2>
      <p className="text-sm text-center text-gray-300">
        Building modern, responsive, and scalable web apps.
      </p>

      <hr className="w-[90%] border-0.5 my-5" />

      <p className="mb-2">Related Tech Stacks</p>

      {/* Grid of icons */}
      
        <div className="grid grid-cols-3 gap-x-3 gap-y-4 place-items-center w-full ">
          <TS_HTML5 />
          <TS_CSS3 />
          <TS_Tailwind />
          <TS_Javascript />
          <TS_ReactJS />
          <TS_NodeJS />
          <TS_Git />
          <TS_VSCode />
        </div>
   
    </div>
  );
}
