import {
  Component1Icon,
  FileIcon,
  GearIcon,
  ImageIcon,
  LayersIcon,
  TokensIcon,
} from "@radix-ui/react-icons";
import { type ReactNode } from "react";

import { ProjectNavigationItem } from "~/components/project/ProjectNavigationItem";
import { useProjectPanelActiveValue } from "~/hooks/useProjectPanelActiveValue";
import { type ProjectPanels } from "~/recoil/atoms/projectPanelState";

const PROJECT_NAVIGATION: {
  id: ProjectPanels;
  icon: ReactNode;
  label: string;
}[] = [
  {
    icon: <LayersIcon />,
    id: "layers",
    label: "Layers",
  },
  {
    icon: <FileIcon />,
    id: "pages",
    label: "Pages",
  },
  {
    icon: <Component1Icon />,
    id: "components",
    label: "Components",
  },
  {
    icon: <TokensIcon />,
    id: "tokens",
    label: "Tokens",
  },
  {
    icon: <ImageIcon />,
    id: "assets",
    label: "Assets",
  },
  {
    icon: <GearIcon />,
    id: "settings",
    label: "Settings",
  },
];

export const ProjectNavigation = () => {
  const { projectPanelActiveValue, setProjectPanelActiveValue } =
    useProjectPanelActiveValue();

  return (
    <nav className="flex h-full w-16 shrink-0 flex-col gap-3 border-r border-r-slate-4 bg-slate-1 p-3">
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
