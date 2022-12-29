'use client';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

import { Logo } from './Logo';

export type HeaderProps = {
  isSticky?: boolean;
};

export const Header = ({ isSticky = false }: HeaderProps) => {
  const { ref, inView, entry } = useInView();
  const isStickied = !inView && (entry?.boundingClientRect?.top ?? 0) < 0;

  return (
    <>
      <div ref={ref} />
      <header
        className={classNames(
          'flex h-24 items-center border-b bg-slate-1',
          isSticky ? 'sticky top-0' : undefined,
          isSticky ? (isStickied ? 'border-b-slate-4' : 'border-b-transparent') : 'border-b-slate-4',
        )}
      >
        <div className='container mx-auto flex items-center justify-between'>
          <Logo label='Andy Tran' />
          <div></div>
        </div>
      </header>
    </>
  );
};
