import { ICO_VSCode } from "../icons/ICO_VSCode";

export default function TS_VSCode(){
    return(
        <>
        <div className="flex flex-col items-center gap-y-2">
            <ICO_VSCode className="size-5" />
            <p className="text-xs">VSCode</p>
        </div>
        </>
    )
}