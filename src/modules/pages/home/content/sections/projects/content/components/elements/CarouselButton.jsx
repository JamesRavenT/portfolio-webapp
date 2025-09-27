import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CarouselFloatingBtn({
  direction = 'next',
  onClick,
  className = '',
}) {
  const isNext = direction === 'next';

  return (
    <>
      {}
      <button
        onClick={onClick}
        className={`
          absolute lg:hidden top-25 z-[99]
          ${isNext ? 'right-0' : 'left-0'}
          text-white p-3
          animate-pulse
          ${className}
        `}
      >
        {isNext ? (
          <ChevronRight className="size-10" />
        ) : (
          <ChevronLeft className="size-10" />
        )}
      </button>

      {}
      <button
        onClick={onClick}
        className={`
          hidden lg:flex z-[99] mx-2
          ${isNext ? 'right-0' : 'left-0'}
          text-white
          ${className}
        `}
      >
        {isNext ? (
          <ChevronRight className="size-7" />
        ) : (
          <ChevronLeft className="size-7" />
        )}
      </button>
    </>
  );
}
