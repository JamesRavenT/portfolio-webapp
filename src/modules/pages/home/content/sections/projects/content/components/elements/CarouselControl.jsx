export default function CarouselControls({ currentIndex, total, onSelect }) {
  return (
    <div className="absolute top-145 bottom-0 left-4 flex w-100 items-center gap-6 z-100">
      {/* Project Code */}
      <span className="text-white text-4xl lg:text-6xl font-bold tracking-wider">
        PRJCT-{String(currentIndex + 1).padStart(2, '0')}
      </span>

      {/* Indicators */}
      <div className="flex gap-5">
        {Array.from({ length: total }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`
              w-4 h-4 transition-all duration-300
              ${
                idx === currentIndex
                  ? 'bg-white rotate-45 scale-110'
                  : 'bg-gray-500 hover:bg-gray-300 rotate-0'
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
