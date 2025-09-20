export default function ProjectHeader({ project }) {
  return (
    <>
      <p className="text-3xl lg:text-6xl font-bold text-white">{project.name}</p>
      <div className="flex items-center gap-x-2 lg:gap-x-4 lg:mt-2">
        <p className="text-gray-300 text-sm lg:text-2xl">{project.version}</p>
        <div className="h-full w-0.5 bg-gray-400" />
        {/* Platform Icons */}
        <div className="flex gap-2 ">
          {project.platform.map((Icon, idx) => (
            <Icon key={idx} className="size-5 lg:size-7 text-green-400" />
          ))}
        </div>
      </div>
    </>
  );
}
