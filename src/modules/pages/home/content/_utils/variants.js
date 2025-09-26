export const getVariants = (isDesktop) => ({
  enter: (dir) =>
    isDesktop ? { y: 0, opacity: 0 } : { x: dir > 0 ? 100 : -100, opacity: 0 },
  center: { x: 0, y: 0, opacity: 1 },
  exit: (dir) =>
    isDesktop ? { y: 0, opacity: 0 } : { x: dir > 0 ? -100 : 100, opacity: 0 },
});
