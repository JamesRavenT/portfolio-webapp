// components/SkillIcon.js
export default function SkillIcon({ Icon, label }) {
  return (
    <div
      className="flex flex-col items-center gap-y-2 w-full p-2 cursor-pointer 
        transition-colors duration-100
        hover:bg-gradient-to-r from-transparent via-white to-transparent hover:text-black"
    >
      <Icon className="size-5 md:size-10 shadow-2xl" />
      <p className="text-xs md:text-lg ">{label}</p>
    </div>
  );
}
