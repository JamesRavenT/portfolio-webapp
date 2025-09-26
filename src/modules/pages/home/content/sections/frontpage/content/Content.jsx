/**
 * Content.jsx
 * Wrapper for the different layouts for Frontpage
 * Finalized for v1.0.0 release
 * Last Updated: 09/26
 */

import { motion } from 'framer-motion';
import DesktopView from './layout/DesktopView';
import MobileView from './layout/MobileView';

export default function Content({ section }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <MobileView section={section} />
      <DesktopView section={section} />
    </motion.div>
  );
}
