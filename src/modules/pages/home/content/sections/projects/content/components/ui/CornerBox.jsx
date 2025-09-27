import { motion } from 'framer-motion';

export default function CornerBox({ children, animateKey }) {
  return (
    <motion.div className="relative inline-block p-2" whileHover="hover">
      {}
      <div className="absolute inset-0 pointer-events-none">
        {}
        <motion.span
          key={animateKey + '-tl-h'}
          className="absolute top-0 left-0 h-0.5 bg-white"
          initial={{ width: 0, left: '50%' }}
          animate={{ width: '1rem', left: 0 }}
          variants={{ hover: { width: '1.5rem' } }}
          transition={{ duration: 0.4 }}
        />
        <motion.span
          key={animateKey + '-tl-v'}
          className="absolute top-0 left-0 w-0.5 bg-white"
          initial={{ height: 0, top: '50%' }}
          animate={{ height: '1rem', top: 0 }}
          variants={{ hover: { height: '1.5rem' } }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />

        {}
        <motion.span
          key={animateKey + '-br-h'}
          className="absolute bottom-0 right-0 h-0.5 bg-white"
          initial={{ width: 0, right: '50%' }}
          animate={{ width: '1rem', right: 0 }}
          variants={{ hover: { width: '1.5rem' } }}
          transition={{ duration: 0.4 }}
        />
        <motion.span
          key={animateKey + '-br-v'}
          className="absolute bottom-0 right-0 w-0.5 bg-white"
          initial={{ height: 0, bottom: '50%' }}
          animate={{ height: '1rem', bottom: 0 }}
          variants={{ hover: { height: '1.5rem' } }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />
      </div>

      {}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
