export default function CornerBox({ children, className = '' }) {
  return (
    <div className={`relative rounded-2xl border border-gray-500 ${className}`}>
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white rounded-tl-xl"></span>
      <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white rounded-tr-xl"></span>
      <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white rounded-bl-xl"></span>
      <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white rounded-br-xl"></span>

      {/* Inner content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
