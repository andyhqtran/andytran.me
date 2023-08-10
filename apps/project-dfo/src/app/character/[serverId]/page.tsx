import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { type Metadata } from 'next';

import { CharacterRedirect } from '~/components/character/CharacterRedirect';

export type PageProps = {
  params: {
    serverId: string;
  };
};

export default async function Page({ params }: PageProps) {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex items-center gap-3 rounded border border-blue-6 bg-blue-3 p-4 text-sm text-blue-11'>
        <ExclamationTriangleIcon className='h-3 w-3' />
        The URL has been changed for character search to account for multiple servers.
      </div>

      <CharacterRedirect current={params.serverId} />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Character search | Dungeon Fighter Online Resources',
};
