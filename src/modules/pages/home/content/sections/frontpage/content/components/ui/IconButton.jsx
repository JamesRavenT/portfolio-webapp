export default function IconButton({ Icon, src, onClick, bgColor = 'bg-black' }) {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} flex h-fit px-3 md:h-12 py-2.5 md:py-5 gap-x-2 md:gap-x-3 
                  shadow-xl items-center lg:border-0 border rounded-sm hover:opacity-80 transition`}
    >
      <Icon className="w-5 h-5 text-white" />
    </button>
  );
}
