export function paginate(currentIndex, dir, maxIndex) {
  return Math.max(0, Math.min(currentIndex + dir, maxIndex));
}
