"use client";
import dynamic from "next/dynamic";
import { type ReactNode } from "react";

import { ProjectHeader } from "~/components/project/ProjectHeader";
import { ProjectNavigation } from "~/components/project/ProjectNavigation";
import { ProjectPropertiesPanelSkeleton } from "~/components/project/ProjectPropertiesPanelSkeleton";

const ProjectPanelLeft = dynamic(
  () =>
    import("~/components/project/ProjectPanelLeft").then(
      (mod) => mod.ProjectPanelLeft,
    ),
  { ssr: false },
);

const ProjectPropertiesPanel = dynamic(
  () =>
    import("~/components/project/ProjectPropertiesPanel").then(
      (mod) => mod.ProjectPropertiesPanel,
    ),
  {
    loading: ProjectPropertiesPanelSkeleton,
    ssr: false,
  },
);

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <ProjectHeader />
      <div className="flex w-full grow items-stretch">
        <ProjectNavigation />
        <ProjectPanelLeft />
        <div className="grow bg-slate-2">{children}</div>
        <ProjectPropertiesPanel />
      </div>
    </div>
  );
}
