
import { ChevronLeft, ChevronRight } from "lucide-react";
import { placeholderICO } from "../../../../../assets/icons/icons";
import { motion, AnimatePresence } from "framer-motion";

export default function CarouselSkills({currentIndex, setCurrentIndex}) {

  const skills = [
    placeholderICO,
    placeholderICO,
    placeholderICO,
    placeholderICO,
    placeholderICO
  ]

  const nextSlide = () => {
    if (currentIndex != skills.length - 1) setCurrentIndex(currentIndex + 1)
  };

  const prevSlide = () => {
    if (currentIndex != 0) setCurrentIndex(currentIndex - 1)
  };

  return (
    <>
    <div className="h-[250px] w-full border-2 relative overflow-hidden">
      <motion.div
        className="flex h-full"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}>
        {skills.map((skill, index) => (
          <div key={index} className='min-w-[100%] h-[100%] flex items-center justify-center'>
            <img src={`${skill}`} className="w-20 h-20 rotate-45 shadow-lg" />
          </div>
        ))}
      </motion.div>
      
      <button
        className={`absolute left-0 top-1/2 -translate-y-1/2 pl-3
          ${currentIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`
          }
        onClick={prevSlide}>
        <ChevronLeft className="size-10" />
      </button>
      <button
        className={`absolute right-0 top-1/2 -translate-y-1/2 pr-3
          ${currentIndex === skills.length-1 ? "opacity-0 pointer-events-none" : "opacity-100"}`
          }
        onClick={nextSlide}>
        <ChevronRight className="size-10" />
      </button>
    </div>
    </>
  );
}



