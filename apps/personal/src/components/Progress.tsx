import * as RadixProgress from '@radix-ui/react-progress';
import classNames from 'classnames';

export type ProgressProps = Pick<RadixProgress.ProgressProps, 'className' | 'value'>;

export const Progress = ({ className, value }: ProgressProps) => {
  return (
    <RadixProgress.Root className={classNames('h-1 overflow-hidden bg-slate-2 text-blue-9', className)} value={value}>
      <RadixProgress.Indicator
        className='h-full w-full bg-current transition-transform duration-100 ease-linear'
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </RadixProgress.Root>
  );
};
