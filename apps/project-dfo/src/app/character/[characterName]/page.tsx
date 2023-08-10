import { RocketIcon } from '@radix-ui/react-icons';
import { CollapsibleCard } from '@several-ui/collapsible-card';

import { EquipmentCard } from '~/components/character/EquipmentCard';
import { getCharacters } from '~/data/getCharacters';

export type PageProps = {
  params: {
    characterName: string;
  };
};

export default async function Page({ params }: PageProps) {
  const characters = await getCharacters({
    characterName: params.characterName,
    serverId: 'cain',
  });

  const character = characters.rows?.[0];

  return (
    <div className='relative z-0 flex flex-col gap-8'>
      <div className='flex items-center gap-3 rounded border border-blue-6 bg-blue-3 p-4 text-sm text-blue-11'>
        <RocketIcon className='h-3 w-3' />
        This page is currently a work-in-progress and contains a limited amount of information.
      </div>

      <div className='flex flex-col gap-1'>
        <h1 className='text-xl text-slate-12'>{character.characterName}</h1>
        <div className='flex gap-2 text-sm text-slate-11'>
          <div>Fame: {character.fame}</div>
          <div>Job: {character.jobGrowName}</div>
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <EquipmentCard characterId={character.characterId} serverId='cain' />

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

  const character = characters.rows?.[0];

  return {
    description: `Character information for ${character.characterName}`,
    title: `${character.characterName} (${character.jobGrowName}) - ${character.fame} - Dungeon Fighter Online Resources`,
  };
};
