import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Section({ section }) {
  const prevSection = useRef("");
  const [triggerLineAnim, setTriggerLineAnim] = useState(false);

  useEffect(() => {
    if (prevSection.current === "" && section !== "") {
      setTriggerLineAnim(false);
      setTimeout(() => setTriggerLineAnim(true), 600);
    }
    prevSection.current = section;
  }, [section]);

  const show = section !== "";

  return (
    <div className="sticky top-13 z-40 w-full h-6 font-electrolize">
      <div className="flex h-15 items-center justify-center text-center gap-x-1">
        {/* Line */}
        <AnimatePresence>
          {show && (
            <motion.hr
              key="line"
              initial={triggerLineAnim ? { x: "-100%" } : { x: "0%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mr-auto w-[60%] border-1 origin-left"
            />
          )}
        </AnimatePresence>

        {/* Section text */}
        <AnimatePresence mode="wait">
          {show && (
            <motion.p
              key={section}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-lg w-25 mx-5.5"
            >
              {section.toUpperCase()}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
