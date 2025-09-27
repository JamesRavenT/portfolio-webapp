export default function ProjectHeader({ project }) {
  return (
    <>
      {}
      <p className="lg:hidden text-3xl font-bold text-white">{project.name}</p>
      <div className="lg:hidden flex items-center gap-x-2 ">
        <p className="text-gray-300 text-sm">{project.version}</p>
        <div className="h-full w-0.5 bg-gray-400 lg:h-8" />
        {}
        <div className="flex gap-2 ">
          {project.platform.map((Icon, idx) => (
            <Icon key={idx} className="size-5 lg:size-7 text-green-400" />
          ))}
        </div>
      </div>
      {}
      <div className="hidden lg:flex items-center gap-x-2 lg:gap-x-4 lg:mt-2">
        <p className="text-gray-300 text-sm lg:text-2xl">{project.version}</p>
        <div className="h-full w-0.5 bg-gray-400 lg:h-8" />
        {}
        <div className="flex gap-2 ">
          {project.platform.map((Icon, idx) => (
            <Icon key={idx} className="size-7 text-blue-400" />
          ))}
        </div>
      </div>
      <hr className="hidden lg:flex w-full border-1 m-2 ml-auto" />
      <p className="hidden lg:flex w-full text-7xl font-bold text-white">
        {project.name}
      </p>
    </>
  );
}
