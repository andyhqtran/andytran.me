import classNames from 'classnames';
import { ComponentProps } from 'react';

export type ProjectNavigationItemProps = ComponentProps<'button'> & {
  isActive?: boolean;
};

export const ProjectNavigationItem = ({ children, isActive, ...restOfProps }: ProjectNavigationItemProps) => {
  return (
    <button
      className={classNames(
        'flex h-10 w-10 items-center justify-center rounded border outline-none transition-colors focus-visible:ring-2 focus-visible:ring-blue-7 focus-visible:ring-offset-1',
        isActive
          ? 'border-blue-6 bg-blue-3 text-blue-9 hover:border-blue-7 hover:bg-blue-4 hover:text-blue-10'
          : 'border-transparent bg-slate-1 text-slate-11 hover:border-slate-5 hover:bg-slate-2 hover:text-slate-12',
      )}
      {...restOfProps}
    >
      {children}
    </button>
  );
};
