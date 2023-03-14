import { Component1Icon, FileIcon, GearIcon, ImageIcon, LayersIcon, TokensIcon } from '@radix-ui/react-icons';

import { ProjectNavigationItem } from '~/components/project/ProjectNavigationItem';

export const ProjectNavigation = () => {
  return (
    <nav className='flex h-full w-16 shrink-0 flex-col gap-3 border-r border-r-slate-4 bg-slate-1 p-3'>
      <ProjectNavigationItem isActive>
        <LayersIcon />
      </ProjectNavigationItem>
      <ProjectNavigationItem>
        <FileIcon />
      </ProjectNavigationItem>
      <ProjectNavigationItem>
        <Component1Icon />
      </ProjectNavigationItem>
      <ProjectNavigationItem>
        <TokensIcon />
      </ProjectNavigationItem>
      <ProjectNavigationItem>
        <ImageIcon />
      </ProjectNavigationItem>
      <ProjectNavigationItem>
        <GearIcon />
      </ProjectNavigationItem>
    </nav>
  );
};
