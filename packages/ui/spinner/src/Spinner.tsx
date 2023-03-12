import classNames from 'classnames';
import type { ComponentProps } from 'react';

export type SpinnerProps = Omit<ComponentProps<'svg'>, 'viewBox' | 'xmlns'>;

export const Spinner = ({ className, ...restOfProps }: SpinnerProps) => {
  return (
    <svg
      aria-label='Loading'
      aria-live='polite'
      className={classNames('animate-spinnerRotate block origin-center motion-reduce:animate-none', className)}
      height={24}
      role='alert'
      width={24}
      viewBox='0 0 66 66'
      xmlns='http://www.w3.org/2000/svg'
      {...restOfProps}
    >
      <circle
        className='animate-spinnerDash origin-center motion-reduce:animate-none'
        cx={33}
        cy={33}
        fill='none'
        r={29}
        stroke='currentColor'
        strokeDasharray={187}
        strokeDashoffset={0}
        strokeWidth={8}
        strokeLinecap='round'
      />
    </svg>
  );
};
