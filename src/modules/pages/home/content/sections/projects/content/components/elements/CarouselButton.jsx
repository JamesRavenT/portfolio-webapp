// CarouselFloatingBtn.jsx
import { ICO_ArrowRightActive } from '../../../../../icons/ICO_ArrowRightActive';
import { ICO_ArrowLeftActive } from '../../../../../icons/ICO_ArrowLeftActive';

export default function CarouselFloatingBtn({
  direction = 'next',
  onClick,
  className = '',
}) {
  const isNext = direction === 'next';

  return (
    <button
      onClick={onClick}
      className={`
        absolute lg:top-65 top-25  z-[99]
        ${isNext ? ' lg:right-180 ' : 'lg:left-60 '}
        z-50  text-white p-3
        ${className}
      `}
    >
      {isNext ? (
        <ICO_ArrowRightActive className="size-20" />
      ) : (
        <ICO_ArrowLeftActive className="size-20" />
      )}
    </button>
  );
}
