import { Button } from '@several-ui/button';
import { IconButton } from '@several-ui/icon-button';

import { Logo } from '~/components/Logo';
import { Navigation } from '~/components/Navigation';

export const Header = () => {
  return (
    <header className='mx-auto flex h-20 max-w-3xl items-center justify-between px-8'>
      <Logo />

      <div className='flex items-center gap-2'>
        <Navigation />
        <Button appearance='secondary'>Button</Button>
        <IconButton appearance='secondary'>1</IconButton>
      </div>
    </header>
  );
};
