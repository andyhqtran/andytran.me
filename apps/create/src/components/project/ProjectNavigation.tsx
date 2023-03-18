'use client';
import { Component1Icon, FileIcon, GearIcon, ImageIcon, LayersIcon, TokensIcon } from '@radix-ui/react-icons';
import { ReactNode } from 'react';

import { ProjectNavigationItem } from '~/components/project/ProjectNavigationItem';
import { useProjectPanelActiveValue } from '~/hooks/useProjectPanelActiveValue';
import { ProjectPanels } from '~/recoil/atoms/projectPanelState';

const PROJECT_NAVIGATION: {
  id: ProjectPanels;
  icon: ReactNode;
  label: string;
}[] = [
  {
    id: 'layers',
    icon: <LayersIcon />,
    label: 'Layers',
  },
  {
    id: 'pages',
    icon: <FileIcon />,
    label: 'Pages',
  },
  {
    id: 'components',
    icon: <Component1Icon />,
    label: 'Components',
  },
  {
    id: 'tokens',
    icon: <TokensIcon />,
    label: 'Tokens',
  },
  {
    id: 'assets',
    icon: <ImageIcon />,
    label: 'Assets',
  },
  {
    id: 'settings',
    icon: <GearIcon />,
    label: 'Settings',
  },
];

export const ProjectNavigation = () => {
  const { projectPanelActiveValue, setProjectPanelActiveValue } = useProjectPanelActiveValue();

  return (
    <nav className='flex h-full w-16 shrink-0 flex-col gap-3 border-r border-r-slate-4 bg-slate-1 p-3'>
      {PROJECT_NAVIGATION.map((panel) => {
        const isActive = projectPanelActiveValue === panel.id;

        return (
          <ProjectNavigationItem
            isActive={isActive}
            key={panel.id}
            onClick={() => {
              if (panel.id === projectPanelActiveValue) {
                setProjectPanelActiveValue(null);
              } else {
                setProjectPanelActiveValue(panel.id);
              }
            }}
          >
            {panel.icon}
          </ProjectNavigationItem>
        );
      })}
    </nav>
  );
};
