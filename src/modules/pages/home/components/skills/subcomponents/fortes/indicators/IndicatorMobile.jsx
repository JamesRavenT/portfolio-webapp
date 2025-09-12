export default function IndicatorMobile({index, slides, setIndex}){
    return(
        <div className="md:hidden flex absolute top-78 gap-x-5 mt-10 items-center">
        {slides.map((_, i) => (
            <div
            key={i}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            className={`cursor-pointer transition-all duration-300 transform 
                ${i === index 
                ? "w-2 h-2 bg-white rotate-45" 
                : "w-1 h-1 bg-gray-500 rotate-0"}`
            }
            />
        ))}
        </div>
    )
}