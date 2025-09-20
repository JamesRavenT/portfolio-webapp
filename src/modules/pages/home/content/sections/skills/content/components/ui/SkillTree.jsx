export default function SkillTree({ Icon, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3 text-center">
      <Icon className="size-18 lg:hidden" />
      <h2 className="lg:pl-5 lg:self-start pt-2 text-xl lg:text-7xl font-semibold">{title}</h2>
      <p className="lg:pl-5 lg:self-start lg:text-3xl text-sm text-white/70">{description}</p>
    </div>
  );
}
