/**
 * Content.jsx
 * Wrapper for the different layouts for Skills
 * Finalized for v1.0.0 release
 * Last Updated: 09/27
 */

import { useState } from 'react';
import { motion } from 'framer-motion';

import { paginate as paginateUtil } from '../../../_utils/pagination';
import { skillset } from '../../../_data/skills';
import DesktopView from './layout/DesktopView';
import MobileView from './layout/MobileView';

export default function Content() {
  const [[index, direction], setIndex] = useState([0, 0]); // index + direction
  const paginate = (dir) => {
    setIndex(([prevIndex]) => [
      paginateUtil(prevIndex, dir, skillset.length - 1),
      dir,
    ]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <MobileView
        index={index}
        direction={direction}
        setIndex={setIndex}
        paginate={paginate}
      />
      <DesktopView
        index={index}
        direction={direction}
        setIndex={setIndex}
        paginate={paginate}
      />
    </motion.div>
  );
}
