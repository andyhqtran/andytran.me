import classNames from 'classnames';
import Link from 'next/link';

export type LogoProps = {
  label: string;
};

export const Logo = ({ label }: LogoProps) => {
  const initials = label.replace(/[^a-zA-Z- ]/g, '').match(/\b\w/g);

  return (
    <Link
      aria-label={`Logo for ${process.env.NEXT_PUBLIC_SITE_NAME}`}
      className={classNames(
        'flex h-14 w-14 select-none items-center justify-center rounded-full border border-transparent bg-slate-2 font-bold text-slate-12 outline-none',
        'hover:bg-slate-3',
        'focus-visible:ring-2 focus-visible:ring-blue-7',
        'active:border-slate-5',
      )}
      href='/'
    >
      {initials}
    </Link>
  );
};
