/**
 * SkillIcon.jsx
 * Reusable Component that houses the TechStack Icons.
 * Finalized for v1.0.0 release
 * Last Updated: 09/27
 */

export default function SkillIcon({ Icon, label }) {
  return (
    <div
      className="flex flex-col items-center gap-y-2 w-full lg:w-auto p-2 cursor-pointer 
        transition-colors duration-200 hover:shadow-lg "
    >
      <Icon className="size-5 lg:size-8 shadow-2xl" />
      <p className="text-xs lg:text-base ">{label}</p>
    </div>
  );
}
