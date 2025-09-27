/**
 * ForteLabel.jsx
 * Categories of Skills. Text Label for Desktop View Only.
 * Finalized for v1.0.0 release
 * Last Updated: 09/27
 */


import { skillset } from '../../../../_data/skills';
import CornerBox from './ui/CornerBox';
import { motion } from 'framer-motion';

export default function ForteLabel({ index }) {
  const { title } = skillset[index];

  return (
    <div className="flex flex-col w-full items-end mt-10 hover:scale-105 transition-transform duration-500">
        <CornerBox animateKey={index}>
            <motion.div
                key={index} // triggers animation every time index changes
                initial={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
                animate={{ backgroundColor: 'rgba(255,255,255,0)' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                <p className="text-3xl px-6 skills-forte-text-monitor">{title}</p>
            </motion.div>
        </CornerBox>
    </div>
  );
}
