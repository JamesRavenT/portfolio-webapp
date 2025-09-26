import { label } from '../../../../_data/projects';
import LastChanges from './elements/LastChanges';
import ProjectHeader from './elements/ProjectHeader';
import ProjectStatus from './elements/ProjectStatus';
import Technologies from './elements/Technologies';
import ProjectDescription from './ProjectDescription';
import CornerBox from './ui/CornerBox';
import Divider from './ui/Divider';

export default function ProjectDetails({ project }) {
  if (!project) return null;

  return (
    <>
      {/**MOBILE VIEW */}
      <div className="lg:hidden relative flex flex-col h-full w-full px-5 z-20 pt-36 bg-gradient-to-t from-black via-black/99 to-transparent gap-y-2">
        <ProjectHeader project={project} />
        <div className="grid grid-cols-2 gap-x-4 mt-1">
          <ProjectStatus project={project} />
          <LastChanges project={project} />
        </div>
        <Technologies project={project} />
        <Divider />
        <ProjectDescription project={project} label={label} />
      </div>

      {/**LAPTOP VIEW */}
      <CornerBox className="hidden lg:flex flex-col h-full w-full px-5 z-20 pt-12 gap-y-3 bg-black/70">
        <ProjectHeader project={project} />
        <Divider />
        <div className="grid grid-cols-2 gap-x-4 mt-3">
          <ProjectStatus project={project} />
          <LastChanges project={project} />
        </div>
        <Technologies project={project} />
        <Divider />
        <ProjectDescription project={project} label={label} />
      </CornerBox>
    </>
  );
}
