import { PiPlaceholder } from "react-icons/pi";
import SoftDevIco from "./icons/SoftDevIco";

export default function SoftwareDev() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center gap-y-3">
      <SoftDevIco className="size-25"/>
      <h2 className="text-xl font-semibold">Software Development</h2>
      <p className="text-sm text-center text-gray-300">
        Designing and engineering software solutions.
      </p>
            <hr className="w-[90%] border-0.5 my-5" />

      <p className="mb-2">Related Tech Stacks</p>

      {/* Grid of icons */}
      <div className="grid grid-cols-3 gap-4 place-items-center w-full ">
        <PiPlaceholder className="size-10" />
        <PiPlaceholder className="size-10" />
        <PiPlaceholder className="size-10" />
        <PiPlaceholder className="size-10" />
        <PiPlaceholder className="size-10" />
        <PiPlaceholder className="size-10" />
        <PiPlaceholder className="size-10" />
        <PiPlaceholder className="size-10" />
        <PiPlaceholder className="size-10" />
      </div>
    </div>
  );
}
