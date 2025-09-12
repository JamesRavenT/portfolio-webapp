import AndDevIco from "../../_icons/AndDevIco";
import SoftDevIco from "../../_icons/SoftDevIco";
import WebDevIco from "../../_icons/WebDevIco";

export default function IndicatorDesktop({ index, setIndex }) {
  const slides = [WebDevIco, AndDevIco, SoftDevIco];

return (
  <div className="flex flex-col absolute top-0 pt-28 right-0 gap-y-25  items-center w-60 h-[100vh] bg-gradient-to-l from-black via-black/50 to-transparent">
    <div></div>
    {slides.map((Icon, i) => (
      <div
        key={i}
        className={`
          w-full flex items-center justify-center transition-colors duration-300
          ${i === index ? "bg-gradient-to-r from-transparent via-white to-transparent"  : "bg-transparent"}
        `}
      >
        <div
          onClick={() => setIndex([i, i > index ? 1 : -1])}
          className={`
            flex items-center justify-center cursor-pointer 
            w-18 h-18 transition-all duration-300 transform shadow-xl 

            ${i === index 
              ? "rotate-45 scale-120 bg-white/90" 
              : "rotate-0 scale-100 bg-transparent"}
          `}
        >
          <Icon
            className={`
              w-14 h-14 transition-colors duration-300 
              ${i === index ? "text-black rotate-315 p-3" : "text-white "}
            `}
          />
        </div>
      </div>
    ))}
    <div></div>
  </div>
);


}
