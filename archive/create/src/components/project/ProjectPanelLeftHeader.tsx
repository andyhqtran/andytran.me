import classNames from "classnames";
import { type ComponentProps } from "react";

import { useProjectPanelActiveValue } from "~/hooks/useProjectPanelActiveValue";

export type ProjectPanelLeftTitleProps = Omit<ComponentProps<"h2">, "children">;

export const ProjectPanelLeftHeader = ({
  className,
  ...restOfProps
}: ProjectPanelLeftTitleProps) => {
  const { projectPanelActiveValue } = useProjectPanelActiveValue();

  return (
    <header
      className={classNames(
        "flex h-16 shrink-0 items-center justify-between gap-2 border-b border-b-slate-4 bg-slate-1 px-4",
        className,
      )}
      {...restOfProps}
    >
      <h2 className="font-semibold text-base text-slate-12 capitalize">
        {projectPanelActiveValue}
      </h2>
    </header>
  );
};
