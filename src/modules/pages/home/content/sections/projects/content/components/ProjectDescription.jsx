export default function ProjectDescription({ label, project }) {
  return (
    <>
      <p className="mt-2 lg:mt-0 lg:text-2xl">{label.description}</p>
      <p className="text-sm lg:text-base text-justify text-gray-300">
        {project.description}
      </p>
    </>
  );
}
