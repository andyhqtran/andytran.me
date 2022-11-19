import { IconButton } from '~/components/IconButton';
import { ThemeSwitcher } from '~/components/ThemeSwitcher';

export const Footer = () => {
  return (
    <footer className='container'>
      <div className='flex h-24 items-center justify-between border-t border-slate-4'>
        <div className='text-sm text-slate-11'>Copyright &copy; Andy Tran</div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
};
