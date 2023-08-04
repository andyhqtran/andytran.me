import { trackedClickedLogo } from '~/analytics/trackClickedLogo';
import { Logo } from '~/components/Logo';
import { Navigation } from '~/components/Navigation';
import { ThemeSwitcher } from '~/components/ThemeSwitcher';

export const Header = () => {
  return (
    <header className='mx-auto flex h-20 max-w-3xl items-center justify-between px-6'>
      <Logo onClick={trackedClickedLogo} />

      <div className='flex items-center gap-8'>
        <Navigation />

        <ThemeSwitcher />
      </div>
    </header>
  );
};
