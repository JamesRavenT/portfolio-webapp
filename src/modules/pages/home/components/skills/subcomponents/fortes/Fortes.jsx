"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import slide components
import WebDev from "./webdev/WebDev";
import AndroidDev from "./androiddev/AndroidDev";
import SoftwareDev from "./softwaredev/SoftwareDev";

const slides = [WebDev, AndroidDev, SoftwareDev];

export default function Fortes() {
  const [[index, direction], setIndex] = useState([0, 0]); // store index + direction

  const paginate = (dir) => {
    setIndex(([prevIndex]) => {
      let newIndex = prevIndex + dir;

      // Dead-end logic
      if (newIndex < 0) newIndex = 0;
      if (newIndex >= slides.length) newIndex = slides.length - 1;

      return [newIndex, dir]; // keep track of direction
    });
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const CurrentSlide = slides[index];

  return (
    <div className="flex flex-col items-center justify-center gap-y-5 pt-5 w-full">
      <div className="relative flex justify-center items-center w-full overflow-hidden">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset }) => {
              if (offset.x > 100 && index > 0) paginate(-1); // swipe right
              else if (offset.x < -100 && index < slides.length - 1) paginate(1); // swipe left
            }}
            className=" w-full"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className=" flex  gap-x-5 mt-10 items-center">
        {slides.map((_, i) => (
            <div
            key={i}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            className={`cursor-pointer transition-all duration-300 transform 
                ${i === index 
                ? "w-2 h-2 bg-white rotate-45" 
                : "w-1 h-1 bg-gray-500 rotate-0"}`
            }
            />
        ))}
        </div>
    </div>
  );
}
