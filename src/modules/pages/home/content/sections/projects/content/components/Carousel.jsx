import CarouselControls from './elements/CarouselControl';

export default function Carousel({ images, height, currentIndex, setCurrentIndex }) {
  const next = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };
  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className={`relative w-full ${height} overflow-hidden `}>
      <img
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/90 to-transparent" />

      {/* Controls */}
      <CarouselControls
        currentIndex={currentIndex}
        total={images.length}
        onSelect={setCurrentIndex} // ✅ this updates state
      />
    </div>
  );
}
