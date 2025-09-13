import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Sections from '../components/Sections';
import { ScrollHandlePos } from '../components/ScrollHandle';

export default function DesktopView({ section, isOpen, toggleMenu }) {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-70 z-60 flex-col items-start">
      {/* Adjust page depending on section*/}
      <div
        className={`flex flex-col m-5  transition-all duration-1000 ease-in-out ${
          section !== '' ? 'pt-25'  : 'lg:pt-50 xl:pt-45'
        }`}
      >
        {/* Menu Button */}
        <div className="w-60 self-center flex mx-5">
          <motion.button
            onClick={toggleMenu}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ originX: 0.5, originY: 0.5 }}
            className="w-14 h-14 flex items-center justify-center"
          >
            <Menu size={70} />
          </motion.button>
        </div>

        {/* Categories Panel */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              key="categories-panel"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="ml-6 mt-3 w-60"
            >
              <div className="flex">
                {/* Scroll Handle */}
                <div className="mx-5 h-[60vh] w-0.5 bg-amber-50 relative">
                  <div
                    className={`absolute left-0 w-2.5 bg-cyan-600 transition-transform duration-500 -translate-x-1 ${
                      ScrollHandlePos[section] || ''
                    }`}
                    style={{ height: '3rem' }}
                  />
                </div>

                {/* Sections */}
                <div className="h-[60vh] flex-1">
                  <ul className="flex flex-col mt-15 gap-y-17 text-xl font-electrolize [&>li]:w-30">
                    <Sections section={section} />
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
}
