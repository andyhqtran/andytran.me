'use client';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { IconButton } from '@several-ui/icon-button';
import { Tooltip } from '@several-ui/tooltip';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const DetailsButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const hasDetails = searchParams.has('showDetails');

  const handleToggleDetails = () => {
    const currentSearchParams = new URLSearchParams(Array.from(searchParams));

    if (hasDetails) {
      currentSearchParams.delete('showDetails');
    } else {
      currentSearchParams.set('showDetails', 'true');
    }

    router.push(`${pathname}${currentSearchParams ? `?${currentSearchParams.toString()}` : ''}`);
  };

  return (
    <Tooltip label='View details'>
      <IconButton appearance='outline' color={hasDetails ? 'blue' : 'slate'} onClick={handleToggleDetails}>
        {hasDetails ? <EyeOpenIcon className='h-3 w-3' /> : <EyeClosedIcon className='h-3 w-3' />}
      </IconButton>
    </Tooltip>
  );
};
