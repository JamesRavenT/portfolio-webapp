/**
 * DesktopView.jsx
 * Sidebar navigation for large screens
 * Finalized for v1.0.0 release
 * Last Updated: 09/22
 */

import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollHandlePos } from '../components/ScrollHandle';
import Sections from '../components/Sections';

export default function DesktopView({ section, isOpen, toggleMenu }) {
  // Do not render sidebar on the contacts section
  if (section === 'contacts') return null;

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-70 z-60 flex-col items-start">
      {/* Adjusts top padding based on active section */}
      <div
        className={`flex flex-col my-4 transition-all duration-1000 ease-in-out ${
          section !== '' ? 'pt-25 ' : 'pt-45 mx-4'
        }`}
      >
        {/* Menu toggle button */}
        <div className="w-60 self-center flex mx-5">
          <motion.button
            onClick={toggleMenu}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ originX: 0.5, originY: 0.5 }}
            className="w-14 h-14 flex items-center justify-center"
          >
            <Menu size={50} />
          </motion.button>
        </div>

        {/* Categories panel (hidden when menu is open) */}
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
                {/* Scroll progress handle */}
                <div className="mx-5 h-[60vh] w-0.25 bg-amber-50 relative">
                  <div
                    className={`absolute left-0 w-2 bg-cyan-600 transition-transform duration-500 -translate-x-1 ${
                      ScrollHandlePos[section] || ''
                    }`}
                    style={{ height: '3rem' }}
                  />
                </div>

                {/* Section links */}
                <div className="h-[60vh] flex-1">
                  <ul className="flex flex-col mt-15 gap-y-17 text-lg font-electrolize [&>li]:w-30">
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
