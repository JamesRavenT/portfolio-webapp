/**
 * CornerBox.jsx
 * UI element that wraps the credentials
 * Finalized for v1.0.0 release
 * Last Updated: 09/26
 */

import { motion } from 'framer-motion';

export default function CornerBox({ children, animateKey }) {
  return (
    <motion.div
      className="relative p-2 cursor-pointer" // wrapper is now motion-enabled
      whileHover="hover"
    >
      {/* Corners container */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left horizontal */}
        <motion.span
          key={animateKey + '-tl-h'}
          className="absolute top-0 left-0 h-0.5 bg-white"
          initial={{ width: 0, left: '50%' }}
          animate={{ width: '0.75rem', left: 0 }}
          variants={{ hover: { width: '1.5rem' } }}
          transition={{ duration: 0.4 }}
        />
        {/* Top-left vertical */}
        <motion.span
          key={animateKey + '-tl-v'}
          className="absolute top-0 left-0 w-0.5 bg-white"
          initial={{ height: 0, top: '50%' }}
          animate={{ height: '0.75rem', top: 0 }}
          variants={{ hover: { height: '1.5rem' } }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />

        {/* Top-right */}
        <motion.span
          key={animateKey + '-tr-h'}
          className="absolute top-0 right-0 h-0.5 bg-white"
          initial={{ width: 0, right: '50%' }}
          animate={{ width: '0.75rem', right: 0 }}
          variants={{ hover: { width: '1.5rem' } }}
          transition={{ duration: 0.4 }}
        />
        <motion.span
          key={animateKey + '-tr-v'}
          className="absolute top-0 right-0 w-0.5 bg-white"
          initial={{ height: 0, top: '50%' }}
          animate={{ height: '0.75rem', top: 0 }}
          variants={{ hover: { height: '1.5rem' } }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />

        {/* Bottom-left */}
        <motion.span
          key={animateKey + '-bl-h'}
          className="absolute bottom-0 left-0 h-0.5 bg-white"
          initial={{ width: 0, left: '50%' }}
          animate={{ width: '0.75rem', left: 0 }}
          variants={{ hover: { width: '1.5rem' } }}
          transition={{ duration: 0.4 }}
        />
        <motion.span
          key={animateKey + '-bl-v'}
          className="absolute bottom-0 left-0 w-0.5 bg-white"
          initial={{ height: 0, bottom: '50%' }}
          animate={{ height: '0.75rem', bottom: 0 }}
          variants={{ hover: { height: '1.5rem' } }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />

        {/* Bottom-right */}
        <motion.span
          key={animateKey + '-br-h'}
          className="absolute bottom-0 right-0 h-0.5 bg-white"
          initial={{ width: 0, right: '50%' }}
          animate={{ width: '0.75rem', right: 0 }}
          variants={{ hover: { width: '1.5rem' } }}
          transition={{ duration: 0.4 }}
        />
        <motion.span
          key={animateKey + '-br-v'}
          className="absolute bottom-0 right-0 w-0.5 bg-white"
          initial={{ height: 0, bottom: '50%' }}
          animate={{ height: '0.75rem', bottom: 0 }}
          variants={{ hover: { height: '1.5rem' } }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
