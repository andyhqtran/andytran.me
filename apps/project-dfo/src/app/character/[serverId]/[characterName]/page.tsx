import { ExclamationTriangleIcon, RocketIcon } from '@radix-ui/react-icons';
import { CollapsibleCard } from '@several-ui/collapsible-card';

import { EquipmentCard } from '~/components/character/equipment-card/EquipmentCard';
import { getCharacters } from '~/data/getCharacters';

export type PageProps = {
  params: {
    characterName: string;
    serverId: string;
  };
};

export default async function Page({ params }: PageProps) {
  const characters = await getCharacters({
    characterName: params.characterName,
    serverId: params.serverId === 'sirocco' ? 'siroco' : 'cain',
  });

  const character = characters?.[0];

  if (!character) {
    return (
      <div className='flex flex-col gap-8'>
        <div className='flex items-center gap-3 rounded border border-blue-6 bg-blue-3 p-4 text-sm text-blue-11'>
          <RocketIcon className='h-3 w-3' />
          This page is currently a work-in-progress and contains a limited amount of information.
        </div>

        <div className='flex flex-col gap-1'>
          <h1 className='text-xl text-slate-12'>Character not found</h1>
          <div className='text-sm text-slate-11'>
            The character <b>{params.characterName}</b> could not be found on the <b>{params.serverId}</b> server.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='relative z-0 flex flex-col gap-8'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-4 rounded border border-blue-6 bg-blue-3 p-4 text-sm text-blue-11'>
          <RocketIcon className='h-3 w-3 shrink-0' />
          This page is currently a work-in-progress and contains a limited amount of information.
        </div>

        <div className='flex items-center gap-4 rounded border border-yellow-6 bg-yellow-3 p-4 text-sm text-yellow-11'>
          <ExclamationTriangleIcon className='h-3 w-3 shrink-0' />
          Hall of Dimensions fusions is currently not supported in Neople&apos;s API. We&apos;ve reached out to them and
          got a confirmation that this is being worked on.
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <h1 className='text-xl text-slate-12'>{character.characterName}</h1>
        <div className='flex gap-2 text-sm text-slate-11'>
          <div>Fame: {character.fame}</div>
          <div>Job: {character.jobGrowName}</div>
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <EquipmentCard
          characterId={character.characterId}
          serverId={params.serverId === 'sirocco' ? 'siroco' : 'cain'}
        />

        <CollapsibleCard title='Buff'>No buff entries.</CollapsibleCard>

        <CollapsibleCard title='Avatar'>No avatar entries.</CollapsibleCard>

        <CollapsibleCard title='Statistics'>No statistics entries.</CollapsibleCard>

        <CollapsibleCard title='Skill'>No skill entries.</CollapsibleCard>
      </div>
    </div>
  );
}

export const generateMetadata = async ({ params }: PageProps) => {
  const characterName = params.characterName;

  const characters = await getCharacters({
    characterName,
    serverId: 'cain',
  });

  const character = characters?.[0];

  if (!character) {
    return {
      description: `Character information for ${characterName}`,
      title: `${characterName} - Dungeon Fighter Online Resources`,
    };
  }

  return {
    description: `Character information for ${character.characterName}`,
    title: `${character.characterName} (${character.jobGrowName}) - ${character.fame} - Dungeon Fighter Online Resources`,
  };
};
