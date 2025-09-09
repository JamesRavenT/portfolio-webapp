import { PiPlaceholder } from "react-icons/pi";
import { AndDevIco } from "./icons/AndDevIco";

export default function AndroidDev() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3">
      <AndDevIco className="size-25" />
      <h2 className="text-xl font-semibold">Android Development</h2>
      <p className="text-sm text-center text-gray-300">
        Creating native and cross-platform mobile applications.
      </p>
            <hr className="w-[90%] border-0.5 my-5" />

      <p className="mb-2">Related Tech Stacks</p>

      {/* Grid of icons 
          Java
          SQLite
          Realm
          FireStore
          Git
          Android Studio
      */}
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
