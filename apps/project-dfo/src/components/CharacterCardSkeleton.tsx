import { twMerge } from 'tailwind-merge';

export const CharacterCardSkeleton = ({ className }) => {
  return (
    <div
      className={twMerge(
        'relative flex min-h-[96px] cursor-pointer rounded border border-slate-7 bg-slate-3',
        className,
      )}
    />
  );
};
