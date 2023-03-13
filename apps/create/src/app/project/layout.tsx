import { ProjectContextProvider } from '~/components/project/ProjectContextProvider';
import { ProjectHeader } from '~/components/project/ProjectHeader';
import { ProjectNavigation } from '~/components/project/ProjectNavigation';
import { ProjectPanelLeft } from '~/components/project/ProjectPanelLeft';
import { ProjectPanelRight } from '~/components/project/ProjectPanelRight';

export default function Layout() {
  return (
    <ProjectContextProvider>
      <div className='flex h-full flex-col'>
        <ProjectHeader />
        <div className='flex w-full grow items-stretch'>
          <ProjectNavigation />
          <ProjectPanelLeft />
          <div className='grow bg-slate-2' />
          <ProjectPanelRight />
        </div>
      </div>
    </ProjectContextProvider>
  );
}
