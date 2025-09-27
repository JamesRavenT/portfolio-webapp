/**
 * SkillTree.jsx
 * Reusable Component that houses the Forte Icons.
 * Finalized for v1.0.0 release
 * Last Updated: 09/27
 */

export default function SkillTree({ Icon, title }) {
  return (
    <>
    {/**MOBILE VIEW */}
    <div className="lg:hidden flex flex-col items-center justify-center gap-y-3 text-center">
      <Icon className="size-18" />
      <h2 className=" pt-2 text-2xl lg:text-6xl font-semibold">{title}</h2>
    </div>
    {/**DESKTOP VIEW */}
    <div className="hidden lg:flex gap-y-3 text-center p-10">
      <Icon className="size-35"/>
    </div>
    </>
  );
}
