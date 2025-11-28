"use client";
import { usePageScrollPercentage } from "@several/hooks";
import { Progress, type ProgressProps } from "@several/primitives";
import classNames from "classnames";

export type ScrollIndicatorProps = Pick<ProgressProps, "className">;

export const ScrollIndicator = ({ className }: ScrollIndicatorProps) => {
  const { scrollPercentage } = usePageScrollPercentage();

  return (
    <Progress
      className={classNames("sticky top-0 z-10", className)}
      value={scrollPercentage}
    />
  );
};
