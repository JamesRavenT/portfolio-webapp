export default function HighlightBorder({ children }) {
  return (
    <div className="relative">
      {}
      <div className="relative rotate-45 rounded-2xl scale-60 border-2 hover:scale-70 transition-transform duration-500">
        <div className="relative rounded-xl scale-90 border-2">
          <div className="relative bg-black/70 m-2">
            <div className="relative z-10 rotate-315">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
