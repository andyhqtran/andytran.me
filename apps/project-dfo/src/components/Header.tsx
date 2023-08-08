'use client';
import { DiscordLogoIcon } from '@radix-ui/react-icons';
import { IconButton } from '@several-ui/icon-button';
import { Tooltip } from '@several-ui/tooltip';
import Link from 'next/link';

import { trackedClickedLogo } from '~/analytics/trackClickedLogo';
import { Logo } from '~/components/Logo';
import { Navigation } from '~/components/Navigation';
import { ExternalRoutes } from '~/constants/Routes';

export const Header = () => {
  return (
    <header className='mx-auto flex h-20 max-w-3xl items-center justify-between px-6'>
      <Logo onClick={trackedClickedLogo} />

      <div className='flex items-center gap-4'>
        <Navigation />

        <div className='flex gap-2'>
          <Link href={ExternalRoutes.Discord} legacyBehavior>
            <Tooltip label='Discord'>
              <IconButton appearance='outline' color='slate' size='md'>
                <DiscordLogoIcon className='h-3 w-3' />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
      </div>
    </header>
  );
};
