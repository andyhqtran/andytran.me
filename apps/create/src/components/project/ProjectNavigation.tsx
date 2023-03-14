'use client';
import { Component1Icon, FileIcon, GearIcon, ImageIcon, LayersIcon, TokensIcon } from '@radix-ui/react-icons';

import { ProjectNavigationItem } from '~/components/project/ProjectNavigationItem';
import { useProjectContext } from '~/hooks/useProjectContext';
import { ProjectPanels, ProjectTypes } from '~/hooks/useProjectReducer';

const PROJECT_NAVIGATION = [
  {
    name: ProjectPanels.Layers,
    icon: <LayersIcon />,
  },
  {
    name: ProjectPanels.Pages,
    icon: <FileIcon />,
  },
  {
    name: ProjectPanels.Components,
    icon: <Component1Icon />,
  },
  {
    name: ProjectPanels.Tokens,
    icon: <TokensIcon />,
  },
  {
    name: ProjectPanels.Assets,
    icon: <ImageIcon />,
  },
  {
    name: ProjectPanels.Settings,
    icon: <GearIcon />,
  },
];

export const ProjectNavigation = () => {
  const { projectDispatch, projectState } = useProjectContext();

  return (
    <nav className='flex h-full w-16 shrink-0 flex-col gap-3 border-r border-r-slate-4 bg-slate-1 p-3'>
      {PROJECT_NAVIGATION.map((panel) => {
        const isActive = projectState.activePanel === panel.name;

        return (
          <ProjectNavigationItem
            isActive={isActive}
            key={panel.name}
            onClick={() =>
              projectDispatch({
                type: ProjectTypes.SetActivePanel,
                payload: {
                  value: isActive ? null : panel.name,
                },
              })
            }
          >
            {panel.icon}
          </ProjectNavigationItem>
        );
      })}
    </nav>
  );
};
