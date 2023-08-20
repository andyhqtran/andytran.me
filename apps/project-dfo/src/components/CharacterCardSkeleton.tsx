import { ComponentPropsWithoutRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

export const characterCardSkeleton = tv({
  base: 'relative flex animate-pulse items-center justify-between gap-4 rounded border border-slate-7 bg-slate-3 py-4 pr-4',
  variants: {
    size: {
      sm: 'min-h-[80px]',
      md: 'min-h-[96px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type CharacterCardSkeletonVariants = VariantProps<typeof characterCardSkeleton>;

export type CharacterCardSkeletonProps = Pick<ComponentPropsWithoutRef<'div'>, 'className'> &
  CharacterCardSkeletonVariants & {
    hasJob?: boolean;
  };

export const CharacterCardSkeleton = ({ className, hasJob, size }: CharacterCardSkeletonProps) => {
  return (
    <div className={characterCardSkeleton({ size, className })}>
      <div className='flex shrink-0 gap-4'>
        <div className='flex min-w-[80px] flex-col items-center justify-center gap-2 border-r border-slate-7'>
          <div className='h-3 w-9 rounded bg-slate-4' />
          <div className='h-7 w-4 rounded bg-slate-4' />
        </div>

        <div className='flex items-center'>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
              <div className='h-4 w-24 rounded bg-slate-4' />
              {hasJob && <div className='h-3 w-40 rounded bg-slate-4' />}
            </div>

            <div className='flex items-center gap-2'>
              <div className='h-3 w-3 rounded bg-slate-4' />
              <div className='h-3 w-24 rounded bg-slate-4' />
            </div>
          </div>
        </div>
      </div>
      <div className='h-5 w-20 rounded bg-slate-4' />
    </div>
  );
};
