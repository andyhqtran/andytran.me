import { CollapsibleCard } from '@several-ui/collapsible-card';

import { getCharacters } from '~/data/getCharacters';

export default async function Page() {
  const characters = await getCharacters({
    characterName: 'Navigated',
    serverId: 'cain',
  });

  const character = characters.rows?.[0];

  return (
    <div className='relative z-0 flex flex-col gap-8'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-xl text-slate-12'>{character.characterName}</h1>
        <div className='flex gap-2 text-sm text-slate-11'>
          <div>Fame: {character.fame}</div>
          <div>Job: {character.jobName}</div>
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <CollapsibleCard title='Equipment'>equips</CollapsibleCard>
        <CollapsibleCard title='Buff'>equips</CollapsibleCard>
        <CollapsibleCard title='Avatar'>equips</CollapsibleCard>
        <CollapsibleCard title='Statistics'>equips</CollapsibleCard>
        <CollapsibleCard title='Skill'>equips</CollapsibleCard>
      </div>
    </div>
  );
}
