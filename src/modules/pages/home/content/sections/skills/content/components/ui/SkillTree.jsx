export default function SkillTree({ Icon, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3 text-center">
      <Icon className="size-18 md:hidden" />
      <h2 className="md:pl-5 md:self-start pt-2 text-xl md:text-5xl font-semibold">{title}</h2>
      <p className="md:pl-5 md:self-start md:text-lg text-sm text-gray-300">{description}</p>
    </div>
  );
}
