// PageMarker.jsx
export default function PageMarker({ index, setIndex, skillset = [] }) {
  if (!skillset.length) return null; // early exit if no slides

  const handleClick = (i) => setIndex([i, i > index ? 1 : -1]);

  return (
    <>
      {/* MOBILE MARKERS */}
      <div className="lg:hidden flex absolute top-78 gap-x-5 mt-10 items-center">
        {skillset.map((_, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={`cursor-pointer transition-all duration-300 transform ${
              i === index ? 'w-2 h-2 bg-white rotate-45' : 'w-1 h-1 bg-gray-500 rotate-0'
            }`}
          />
        ))}
      </div>

      {/* DESKTOP MARKERS */}
      <div className="hidden lg:flex flex-col absolute top-0 pt-28 right-0 gap-y-25 items-center w-60 h-[100vh] bg-gradient-to-l from-black via-black/50 to-transparent">
        {skillset.map((slide, i) => {
          const Icon = slide.Icon;
          const isActive = i === index;

          return (
            <div
              key={i}
              className={`w-full flex items-center justify-center transition-colors duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-transparent via-white to-transparent'
                  : 'bg-transparent'
              }`}
            >
              <div
                onClick={() => handleClick(i)}
                className={`flex items-center justify-center cursor-pointer w-18 h-18 transition-all duration-300 transform shadow-xl ${
                  isActive ? 'rotate-45 scale-120 bg-white/90' : 'rotate-0 scale-100 bg-transparent'
                }`}
              >
                {Icon && (
                  <Icon
                    className={`w-14 h-14 transition-colors duration-300 ${
                      isActive ? 'text-black rotate-315 p-3' : 'text-white'
                    }`}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
