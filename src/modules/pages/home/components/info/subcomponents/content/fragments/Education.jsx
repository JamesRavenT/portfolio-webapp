import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { AboutMe } from "../../../../../../../../assets/text/home";

export default function Education() {
      const [selected, setSelected] = useState("college");

    const items = [
        { key: "college", label: AboutMe.educ.college.year },
        { key: "shs", label: AboutMe.educ.shs.year },
    ];
    return (
        <>
        <div className="md:hidden flex flex-col items-center h-auto w-full py-3 gap-y-2">
            <hr className='w-[90%] border-0.5' /> 
            <p className="text-sm self-start mx-5">Educational background</p>
            <div className='flex gap-x-10'>          
                <div className="flex gap-x-2 justify-center items-center">     
                    <div className="flex gap-x-4 justify-center items-center">
                        {items.map((item) => {
                        const isActive = selected === item.key;
                        return (
                            <motion.div
                            key={item.key}
                            onClick={() => setSelected(item.key)}
                            className="relative cursor-pointer px-4 overflow-hidden"
                            initial={false}
                            >
                            {/* Background animation */}
                            {isActive && (
                                <motion.div
                                layoutId="selector-bg"
                                initial={{ width: 0, opacity: 1 }}
                                animate={{ width: "100%", opacity: 1 }}
                                exit={{ width: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0 bg-white z-0"
                                />
                            )}

                            <div className="relative flex gap-x-2 justify-center items-center z-10">
                                <div
                                className={`w-[10px] h-[10px]  ${
                                    isActive ? "bg-black" : "bg-white"
                                }`}
                                />
                                <p
                                className={`text-base ${
                                    isActive ? "text-black" : "text-white"
                                }`}
                                >
                                {item.label}
                                </p>
                            </div>
                            </motion.div>
                        );
                        })}
                    </div>
                </div>
            </div>
            <motion.div
                className="flex items-center gap-x-4"
                layout
                transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
                >
                {/* Graduation Cap + Divider stays static */}
                <GraduationCap className="size-15 stroke-1" />
                <div className="w-[0.5px] h-[3rem] bg-white" />

                {/* Content changes */}
                <motion.div
                    layout
                    key={selected} // same key for smooth layout, different content inside
                    className="flex flex-col gap-y-1"
                >
                    {selected === "college" ? (
                    <>
                        <p className="text-xl text-left">{AboutMe.educ.college.degree}</p>
                        <p className="text-xs text-left">{AboutMe.educ.college.school}</p>
                    </>
                    ) : (
                    <>
                        <p className="text-xl text-left">{AboutMe.educ.shs.strand}</p>
                        <p className="text-xs text-left">{AboutMe.educ.shs.school}</p>
                    </>
                    )}
                </motion.div>
            </motion.div>
        </div>

        <div className="hidden md:flex gap-x-5 w-[60%] h-[6rem]">
                <div className="flex w-[50%] bg-white items-center gap-x-5 rounded-md text-black">
                    <GraduationCap color='black' className="ml-5 stroke-1 size-15"/>
                    <div className='w-[1.5px] h-[4rem] bg-black'/>
                    <div className="flex flex-col">
                        <p className="text-xl text-left">{AboutMe.educ.college.year}</p>
                        <p className="text-lg text-left">{AboutMe.educ.college.degree}</p>
                        <p className="text-xs text-left">{AboutMe.educ.college.school}</p>
                    </div>
                </div>
                <div className='w-[0.5px] h-[6rem] bg-white'/>
                <div className="flex w-[50%] bg-white items-center gap-x-5 rounded-md text-black">
                    <GraduationCap color='black' className="ml-5 stroke-1 size-15"/>
                    <div className='w-[1.5px] h-[4rem] bg-black'/>
                    <div className="flex flex-col">
                        <p className="text-xl text-left">{AboutMe.educ.shs.year}</p>
                        <p className="text-lg text-left">{AboutMe.educ.shs.strand}</p>
                        <p className="text-xs text-left">{AboutMe.educ.shs.school}</p>
                    </div>
                </div>
            </div>        
        </>
    )
}