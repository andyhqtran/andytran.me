'use client';
import classNames from 'classnames';

import { Progress, ProgressProps } from '~/components/Progress';
import { usePageScrollPercentage } from '~/hooks/usePageScrollPercentage';

export type ScrollIndicatorProps = Pick<ProgressProps, 'className'>;

export const ScrollIndicator = ({ className }: ScrollIndicatorProps) => {
  const { scrollPercentage } = usePageScrollPercentage();

  return <Progress className={classNames('sticky top-0', className)} value={scrollPercentage} />;
};
