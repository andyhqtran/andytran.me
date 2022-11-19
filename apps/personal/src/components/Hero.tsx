import Link from 'next/link';

const NAVIGATION = [
  {
    label: 'Email',
    href: 'mailto:hello@andytran.me',
  },
  {
    label: 'About',
    href: 'https://www.notion.so/andytran/Andy-Tran-635f05c3018844f5872e9bb692bd73d4',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/andyhqtran',
  },
];

export const Hero = () => {
  return (
    <section className='flex flex-col gap-6 px-14 pt-10 pb-16'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-7xl font-black tracking-tight text-slate-12'>Andy Tran</h1>
        <p className='text-2xl text-slate-11'>
          Senior Front-end Engineer at{' '}
          <Link
            className='tracking-tight text-slate-12 underline hover:text-blue-9'
            href='https://air.inc'
            target='_blank'
          >
            Air Labs
          </Link>
          .
        </p>
      </div>

      <nav className='flex items-center gap-4'>
        {NAVIGATION.map((navigationItem, index) => {
          return (
            <Link
              className='text-lg text-slate-12 underline hover:text-blue-9'
              href={navigationItem.href}
              key={index}
              target='_blank'
            >
              {navigationItem.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};
