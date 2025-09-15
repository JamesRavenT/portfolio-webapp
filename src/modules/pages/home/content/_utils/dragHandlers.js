export const createDragEndHandler = ({ index, slidesLength, isDesktop, paginate }) => {
  return (_, { offset }) => {
    const offsetValue = isDesktop ? offset.y : offset.x;
    const threshold = 100;

    if (offsetValue > threshold && index > 0) paginate(-1);
    else if (offsetValue < -threshold && index < slidesLength - 1) paginate(1);
  };
};
