import CarouselFloatingBtn from './CarouselButton';

export default function CarouselControls({
  currentIndex,
  total,
  onSelect,
  next,
  prev,
}) {
  return (
    <div className="flex flex-col w-90 gap-6 mt-auto ml-auto mb-30 z-[99] projects-carouselcontrol-space-monitor">
      {}
      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`
              w-full h-1 transition-all duration-300
              ${
                idx === currentIndex
                  ? 'bg-white'
                  : 'bg-gray-500 hover:bg-gray-300 '
              }
            `}
          />
        ))}
      </div>

      {}
      <div className="flex w-full">
        <span className="text-white text-xl font-bold mt-1">
          PRJCT-{String(currentIndex + 1).padStart(2, '0')}
        </span>
        <div className="flex ml-auto">
          <CarouselFloatingBtn
            direction="prev"
            onClick={prev}
            active={currentIndex > 0}
          />
          <CarouselFloatingBtn
            direction="next"
            onClick={next}
            active={currentIndex < total.length - 1}
          />
        </div>
      </div>
    </div>
  );
}
