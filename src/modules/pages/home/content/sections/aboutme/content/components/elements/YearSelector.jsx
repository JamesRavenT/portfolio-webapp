import { motion } from 'framer-motion';

export default function YearSelector({ item, isActive, onSelect }) {
  return (
    <motion.div
      key={item.key}
      onClick={() => onSelect(item.key)}
      className="relative cursor-pointer px-4 overflow-hidden"
      initial={false}
    >
      {isActive && (
        <motion.div
          layoutId="selector-bg"
          initial={{ width: 0, opacity: 1 }}
          animate={{ width: '100%', opacity: 1 }}
          exit={{ width: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-white z-0"
        />
      )}

      <div className="relative flex gap-x-2 items-center z-10">
        <div
          className={`w-[10px] h-[10px] ${isActive ? 'bg-black' : 'bg-white'}`}
        />
        <p className={`text-base ${isActive ? 'text-black' : 'text-white'}`}>
          {item.label}
        </p>
      </div>
    </motion.div>
  );
}
