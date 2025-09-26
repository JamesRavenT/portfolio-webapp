export default function SkillTree({ Icon, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3 text-center">
      <Icon className="size-18 lg:hidden" />
      <h2 className=" pt-2 text-xl lg:text-6xl font-semibold">{title}</h2>
      <p className="lg:text-xl text-sm text-white/70">{description}</p>
    </div>
  );
}
