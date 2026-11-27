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
        "border-b-slate-4 bg-slate-1 flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4",
        className,
      )}
      {...restOfProps}
    >
      <h2 className="text-slate-12 text-base font-semibold capitalize">
        {projectPanelActiveValue}
      </h2>
    </header>
  );
};
