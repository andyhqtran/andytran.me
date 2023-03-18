import type { ReactNode } from 'react';

import { ProjectHeader } from '~/components/project/ProjectHeader';
import { ProjectNavigation } from '~/components/project/ProjectNavigation';
import { ProjectPanelLeft } from '~/components/project/ProjectPanelLeft';
import { ProjectPropertiesPanel } from '~/components/project/ProjectPropertiesPanel';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex h-full flex-col'>
      <ProjectHeader />
      <div className='flex w-full grow items-stretch'>
        <ProjectNavigation />
        <ProjectPanelLeft />
        <div className='grow bg-slate-2'>{children}</div>
        <ProjectPropertiesPanel />
      </div>
    </div>
  );
}
